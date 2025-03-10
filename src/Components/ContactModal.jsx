import React, { useState, useRef } from 'react';
import { FaTimes, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactModal = ({ isOpen, onClose }) => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.sendForm(
            'service_kdbdofg', //  EmailJS service ID
            'template_z02p9ys', //  EmailJS template ID
            form.current,
            '0G6hhYrDZf1OR3-Zk' //  EmailJS public key
        )
        .then((result) => {
            setSubmitStatus('success');
            form.current.reset();
            setTimeout(() => {
                onClose();
                setSubmitStatus(null);
            }, 2000);
        })
        .catch((error) => {
            setSubmitStatus('error');
        })
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-[#121212] rounded-xl border-2 border-orange-300 p-8 max-w-md w-full mx-4 relative z-10">
            <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-[#ffbd2f] transition-colors"
                >
                    <FaTimes size={24} />
                </button>

                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Susisiekite su manimi
                </h2>

                {submitStatus === 'success' && (
                    <div className="mb-4 p-2 bg-green-500 text-white rounded-md text-center">
                        Žinutė išsiųsta sėkmingai!
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div className="mb-4 p-2 bg-red-500 text-white rounded-md text-center">
                        Klaida! Bandykite dar kartą.
                    </div>
                )}


                <div className="mb-6 space-y-3">
                    <div className="flex items-center text-white gap-3">
                        <FaEnvelope className="text-[#ffbd2f]" />
                        <a href="mailto:edvinasbabilas@gmail.com" className="hover:text-[#ffbd2f] transition-colors">
                            edvinasbabilas@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center text-white gap-3">
                        <FaPhone className="text-[#ffbd2f]" />
                        <a href="tel:+37060000000" className="hover:text-[#ffbd2f] transition-colors">
                            +370 60207083
                        </a>
                    </div>
                    <div className="flex items-center text-white gap-3">
                        <FaLinkedin className="text-[#ffbd2f]" />
                        <a href="https://www.linkedin.com/in/edvinas-babilas/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="hover:text-[#ffbd2f] transition-colors">
                            LinkedIn Profile
                        </a>
                    </div>
                </div>

                <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Jūsų vardas arba kompanijos pav."
                            className="w-full p-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffbd2f]"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="user_email"
                            placeholder="El. paštas"
                            className="w-full p-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffbd2f]"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="Jūsų žinutė"
                            rows="4"
                            className="w-full p-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffbd2f]"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-2 px-4 rounded-md font-medium transition-colors
                            ${isSubmitting 
                                ? 'bg-gray-500 cursor-not-allowed' 
                                : 'bg-[#ffbd2f] text-black hover:bg-[#ffa500]'}`}
                    >
                        {isSubmitting ? 'Siunčiama...' : 'Siųsti'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;