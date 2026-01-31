import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState('');

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' })
        }
        if (submitError) {
            setSubmitError('')
        }
    }

    const validateForm = () => {
        const newErrors = {};
        
        if (!form.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
        }
        
        if (form.message.length < 50) {
            newErrors.message = 'Message must be at least 50 characters';
        }
        
        return newErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError('');
        
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);

        try {
            // Check rate limit on server
            const checkRes = await fetch('/api/contact/check');
            const checkData = await checkRes.json();

            if (!checkRes.ok) {
                setSubmitError(checkData?.error || 'Rate limit exceeded. Try again later.');
                setLoading(false);
                return;
            }

            // Send email via EmailJS (client-side)
            await emailjs.send(
                'service_3c0agdn',
                'template_ixhhisk',
                {
                    from_name: form.name,
                    to_name: 'Kaloyan',
                    from_email: form.email,
                    to_email: 'kaloyandimov.milev@gmail.com',
                    message: form.message
                },
                'BbWbeZvGgbUQF0In7'
            );

            // Log the send on server
            await fetch('/api/contact/log', { method: 'POST' });

            setLoading(false);

            alert('Your message has been sent!')

            setForm({
                name: '',
                email: '',
                message: ''
            })
            setErrors({});

        } catch (error) {
            setLoading(false);

            console.log(error);
            setSubmitError('Something went wrong!')
        }

    }
    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                {/* <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" /> */}
                <div className="contact-container">
                    <h3 className="head-text">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        I'm currently looking for new opportunities, my inbox is always open.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">
                                Full Name
                            </span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
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
                                value={form.email}
                                onChange={handleChange}
                                required
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
                                value={form.message}
                                onChange={handleChange}
                                required
                                className={`field-input ${errors.message ? '!border-red-500 ring-2 ring-red-500 focus:ring-red-500' : ''}`}
                                placeholder="Hi, I'm interested in ... "
                            />
                            <div className="flex justify-between items-center">
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                                {form.message.length < 50 && <p  className="text-gray-400 text-sm">{form.message.length}/50</p>}
                            </div>
                        </label>
                        <button
                            className="field-btn transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Sending ... ' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field_btn_arrow" />
                        </button>
                        {submitError && (
                            <p className="text-red-500 text-sm">{submitError}</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact