const LIMIT = 3;
const WINDOW_MS = 24 * 60 * 60 * 1000;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMAILJS_URL = 'https://api.emailjs.com/api/v1.0/email/send';
const EMAILJS_SERVICE_ID = 'service_3c0agdn';
const EMAILJS_TEMPLATE_ID = 'template_ixhhisk';
const EMAILJS_PUBLIC_KEY = 'BbWbeZvGgbUQF0In7';

// IP -> [timestamps]. Serverless instances don't share memory, so this slows
// down abuse from one client but isn't a global guarantee.
const sendLogs = new Map();

const getClientIp = (req) =>
  req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket?.remoteAddress || 'unknown';

const getRecentSends = (ip, now) => {
  const recent = (sendLogs.get(ip) || []).filter((ts) => now - ts < WINDOW_MS);
  if (recent.length > 0) {
    sendLogs.set(ip, recent);
  } else {
    sendLogs.delete(ip);
  }
  return recent;
};

const asTrimmedString = (value) => (typeof value === 'string' ? value.trim() : '');

const validate = ({ name, email, message }) => {
  const errors = {};

  if (!name) {
    errors.name = 'Name is required';
  } else if (name.length > MAX_NAME_LENGTH) {
    errors.name = `Name must be at most ${MAX_NAME_LENGTH} characters`;
  }

  if (!email) {
    errors.email = 'Email is required';
  } else if (email.length > MAX_EMAIL_LENGTH || !EMAIL_PATTERN.test(email)) {
    errors.email = 'Enter a valid email address';
  }

  if (message.length < MIN_MESSAGE_LENGTH) {
    errors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters`;
  } else if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be at most ${MAX_MESSAGE_LENGTH} characters`;
  }

  return errors;
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body ?? {};

  // Hidden field that only bots fill in: pretend it worked and send nothing.
  if (body.company) {
    return res.status(200).json({ ok: true });
  }

  const fields = {
    name: asTrimmedString(body.name),
    email: asTrimmedString(body.email),
    message: asTrimmedString(body.message),
  };

  const errors = validate(fields);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  const ip = getClientIp(req);
  const now = Date.now();
  const recent = getRecentSends(ip, now);

  if (recent.length >= LIMIT) {
    return res.status(429).json({
      error: `You have reached the limit of ${LIMIT} messages in 24 hours. Please try again later.`,
    });
  }

  try {
    const response = await fetch(EMAILJS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: {
          from_name: fields.name,
          to_name: 'Kaloyan',
          from_email: fields.email,
          to_email: 'kaloyandimov.milev@gmail.com',
          message: fields.message,
        },
      }),
    });

    if (!response.ok) {
      console.error('EmailJS rejected the message:', response.status, await response.text());
      return res.status(502).json({ error: 'The message could not be sent.' });
    }
  } catch (error) {
    console.error('EmailJS request failed:', error);
    return res.status(502).json({ error: 'The message could not be sent.' });
  }

  sendLogs.set(ip, [...recent, now]);
  return res.status(200).json({ ok: true });
}
