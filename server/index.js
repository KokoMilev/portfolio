import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// In-memory store: IP -> [timestamps]
const sendLogs = new Map();
const LIMIT = 3;
const WINDOW_MS = 24 * 60 * 60 * 1000;

// Helper: get client IP
const getClientIp = (req) => req.ip || req.connection.remoteAddress || 'unknown';

// Helper: clean old timestamps
const cleanOldTimestamps = (timestamps) => {
    const now = Date.now();
    return timestamps.filter((ts) => now - ts < WINDOW_MS);
};

// GET /api/contact/check - Check if user can send
app.get('/api/contact/check', (req, res) => {
    const ip = getClientIp(req);
    const timestamps = sendLogs.get(ip) || [];
    const clean = cleanOldTimestamps(timestamps);
    sendLogs.set(ip, clean);

    if (clean.length >= LIMIT) {
        return res.status(429).json({
            error: `You have reached the limit of ${LIMIT} messages in 24 hours. Please try again later.`,
        });
    }

    return res.status(200).json({ ok: true });
});

// POST /api/contact/log - Log a send
app.post('/api/contact/log', (req, res) => {
    const ip = getClientIp(req);
    const timestamps = sendLogs.get(ip) || [];
    const clean = cleanOldTimestamps(timestamps);
    clean.push(Date.now());
    sendLogs.set(ip, clean);

    return res.status(200).json({ ok: true });
});

app.listen(PORT, () => {
    console.log(`Contact API listening on port ${PORT}`);
});

