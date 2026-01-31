import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

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
        
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);

        try {
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
            )
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

            alert('Something went wrong!')
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
                                className="field-input"
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
                                className="field-input"
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
                                className="field-input"
                                placeholder="Hi, I'm interested in ... "
                            />
                            <div className="flex justify-between items-center">
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                                {form.message.length < 50 && <p  className="text-gray-400 text-sm">{form.message.length}/50</p>}
                            </div>
                        </label>
                        <button className="field-btn" type="submit" disabled={loading || form.message.length < 50}>
                            {loading ? 'Sending ... ' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field_btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact