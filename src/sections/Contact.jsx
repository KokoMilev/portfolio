import { useState } from 'react'

const EMPTY_FORM = {
    name: '',
    email: '',
    message: '',
    company: '',
}

const SEND_FAILED_MESSAGE = 'Your message could not be sent. Please email me at kaloyandimov.milev@gmail.com.';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState('');
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState(EMPTY_FORM)

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
        setSent(false)
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' })
        }
        if (submitError) {
            setSubmitError('')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError('');
        setErrors({});
        setSent(false);
        setLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await response.json().catch(() => ({}));

            if (response.ok) {
                setForm(EMPTY_FORM);
                setSent(true);
            } else if (data.errors) {
                setErrors(data.errors);
            } else if (response.status === 429) {
                setSubmitError(data.error);
            } else {
                setSubmitError(SEND_FAILED_MESSAGE);
            }
        } catch (error) {
            console.error(error);
            setSubmitError(SEND_FAILED_MESSAGE);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <div className="contact-container">
                    <h2 className="head-text">Let's talk</h2>
                    <p className="text-lg text-white-600 mt-3">
                        I'm always open to interesting conversations. Send me a message.
                    </p>

                    <form onSubmit={handleSubmit} noValidate className="mt-12 flex flex-col space-y-7">
                        <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                            className="hidden"
                        />
                        <label className="space-y-3">
                            <span className="field-label">
                                Full Name
                            </span>
                            <input
                                type="text"
                                name="name"
                                aria-invalid={Boolean(errors.name)}
                                value={form.name}
                                onChange={handleChange}
                                className={`field-input ${errors.name ? '!border-red-500 ring-2 ring-red-500 focus:ring-red-500' : ''}`}
                                placeholder="John Doe"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">
                                Email
                            </span>
                            <input
                                type="email"
                                name="email"
                                aria-invalid={Boolean(errors.email)}
                                value={form.email}
                                onChange={handleChange}
                                className={`field-input ${errors.email ? '!border-red-500 ring-2 ring-red-500 focus:ring-red-500' : ''}`}
                                placeholder="johndoe@gmail.com"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">
                                Your Message
                            </span>
                            <textarea
                                name="message"
                                aria-invalid={Boolean(errors.message)}
                                value={form.message}
                                onChange={handleChange}
                                className={`field-input ${errors.message ? '!border-red-500 ring-2 ring-red-500 focus:ring-red-500' : ''}`}
                                placeholder="Hi, I'm interested in ... "
                            />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </label>
                        <button
                            className="field-btn transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Sending ... ' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="" className="field-btn_arrow" />
                        </button>
                        <div aria-live="polite">
                            {submitError && <p className="text-red-500 text-sm">{submitError}</p>}
                            {sent && <p className="text-green-500 text-sm">Your message has been sent. Thanks for reaching out!</p>}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact