'use client'

import { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { FaLinkedinIn, FaWhatsapp, FaArrowRight, FaLaptop, FaBuilding, FaCheckCircle, FaSpinner } from 'react-icons/fa';

// ➤ Animation Variants
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            ease: 'easeOut',
            duration: 0.5,
        },
    }),
}

const listStagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const listItem: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

export default function FooterContact() {
    // ─── STATE MANAGEMENT ───────────────────────────────────────────
    const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');
    const [form, setForm] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('SUBMITTING');

        // IMPORTANT: Replace 'xbldjrqy' with your actual Formspree ID once you create the form
        const FORMSPREE_ID = 'mbdabgdo';

        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                setStatus('SUCCESS');
                setForm({ name: '', email: '', company: '', message: '' });
            } else {
                setStatus('ERROR');
            }
        } catch (error) {
            setStatus('ERROR');
        }
    }

    return (
        <section id="contact" className="relative w-full bg-bg-section pb-8 px-6 overflow-hidden">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-1">

                {/* ── LEFT SIDE ─────────────────────────────────── */}
                <motion.div
                    className="grid grid-rows-[auto_auto_auto] gap-1"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Contact Us */}
                    <motion.div
                        className="bg-bg-footer-card rounded-xl p-[32px] flex justify-between items-center"
                        variants={fadeInUp}
                    >
                        <motion.h5
                            className="text-[28px] font-medium tracking-[-0.04em] text-text-dim"
                            variants={fadeInUp}
                        >
                            <a href="tel:+971585717283" className="hover:text-orange-accent transition-colors">
                                +971 58 571 7283
                            </a>
                        </motion.h5>
                        <motion.div className="flex gap-10" variants={fadeInUp}>
                            <a href="https://www.linkedin.com/company/raha-partners" target="_blank" rel="noopener noreferrer" className="text-text-warm hover:text-orange-accent">
                                <FaLinkedinIn size={22} />
                            </a>
                            <a href="https://wa.me/971585799283?text=Hi%20Raha%20Partners,%20I'm%20interested%20in%20learning%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="text-text-warm hover:text-orange-accent">
                                <FaWhatsapp size={22} />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* What We Offer */}
                    <motion.div
                        className="bg-bg-footer-card rounded-xl p-[32px]"
                        variants={fadeInUp}
                    >
                        <motion.h5
                            className="text-[28px] font-medium tracking-[-0.04em] text-[#FA6F45] mb-6"
                            variants={fadeInUp}
                        >
                            What we offer
                        </motion.h5>

                        <motion.ul
                            className="space-y-3"
                            variants={listStagger}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                'Regulatory & Labeling',
                                'Marketplace Operations',
                                'Distribution & Retail',
                                'Performance Marketing',
                                'GCC Market Entry',
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="text-[18px] tracking-[-0.02em] text-text-muted list-disc ml-5"
                                    variants={listItem}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Digital + Office */}
                    <motion.div
                        className="bg-bg-footer-card rounded-xl p-[32px] grid md:grid-cols-2 gap-10"
                        variants={fadeInUp}
                    >
                        <motion.div variants={fadeInUp}>
                            <motion.div className="flex items-center gap-3 mb-4 text-text-dim" variants={fadeInUp}>
                                <FaLaptop size={20} />
                                <span className="text-[22px] font-medium">Digital</span>
                            </motion.div>
                            <motion.a
                                href="mailto:zeeshan@rahapartners.com"
                                className="text-[18px] text-orange-accent hover:underline"
                                variants={fadeInUp}
                            >
                                info@rahapartners.com
                            </motion.a>
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <motion.div className="flex items-center gap-3 mb-4 text-text-dim" variants={fadeInUp}>
                                <FaBuilding size={20} />
                                <span className="text-[22px] font-medium">Office</span>
                            </motion.div>
                            <motion.p className="text-[18px] text-text-muted leading-relaxed" variants={fadeInUp}>
                                1246 Lake Road, Jumeirah<br />
                                <strong className="text-text-dim">Dubai, UAE</strong>
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* ── RIGHT SIDE (FORM) ─────────────────────────────── */}
                <motion.div
                    className="relative bg-bg-footer-card rounded-xl overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <AnimatePresence mode="wait">
                        {status === 'SUCCESS' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-[#212225] z-30"
                            >
                                <FaCheckCircle className="text-orange-accent mb-6" size={80} />
                                <h3 className="text-[40px] font-bold text-white mb-4 tracking-tight">Message Sent!</h3>
                                <p className="text-text-dim text-[20px] max-w-sm leading-relaxed">
                                    Thank you for reaching out. A member of the Raha Partners team will be in touch with you shortly.
                                </p>
                                <button
                                    onClick={() => setStatus('IDLE')}
                                    className="mt-10 text-orange-accent font-medium hover:underline text-lg transition-all"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                onSubmit={handleSubmit}
                                className="grid grid-rows-[auto_auto_auto_auto_auto_auto] gap-1 h-full"
                                initial={false}
                                exit={{ opacity: 0 }}
                            >
                                {/* Header Card */}
                                <motion.div className="bg-bg-footer-card p-[32px] pb-4" variants={fadeInUp}>
                                    <h5 className="text-[28px] font-medium tracking-[-0.04em] text-text-dim mb-2">
                                        Got a question, challenge, or idea?
                                    </h5>
                                    <p className="text-text-muted text-[18px]">
                                        Fill out the form — we’ll get back to you shortly.
                                    </p>
                                </motion.div>

                                {/* Name */}
                                <motion.input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="bg-bg-footer-input px-6 py-6 text-text-warm placeholder-text-muted outline-none border-b border-white/5 mx-1 mb-1 rounded-xl"
                                    variants={fadeInUp}
                                />

                                {/* Email */}
                                <motion.input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="bg-bg-footer-input px-6 py-6 text-text-warm placeholder-text-muted outline-none border-b border-white/5 mx-1 mb-1 rounded-xl"
                                    variants={fadeInUp}
                                />

                                {/* Company */}
                                <motion.input
                                    type="text"
                                    name="company"
                                    placeholder="Your Company"
                                    value={form.company}
                                    onChange={handleChange}
                                    required
                                    className="bg-bg-footer-input px-6 py-6 text-text-warm placeholder-text-muted outline-none border-b border-white/5 mx-1 mb-1 rounded-xl"
                                    variants={fadeInUp}
                                />

                                {/* Message */}
                                <motion.textarea
                                    name="message"
                                    placeholder="Your message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="bg-bg-footer-input px-6 py-5 text-text-warm placeholder-text-muted outline-none resize-none mx-1 mb-1 rounded-xl"
                                    variants={fadeInUp}
                                />

                                {/* Terms + Button Card */}
                                <motion.div
                                    className="bg-bg-footer-input p-[32px] flex items-center justify-between mx-1 mb-1 rounded-xl"
                                    variants={fadeInUp}
                                >
                                    <div className="space-y-1">
                                        <p className="text-[14px] text-text-muted italic max-w-[240px]">
                                            By submitting, you agree to our{' '}
                                            <a href="/privacy-policy" className="text-orange-accent">Privacy Policy.</a>
                                        </p>
                                        {status === 'ERROR' && (
                                            <p className="text-red-400 text-xs font-medium">Something went wrong. Please try again.</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'SUBMITTING'}
                                        className="bg-orange-accent hover:bg-orange-hover transition-all rounded-xl w-[64px] h-[64px] flex items-center justify-center shadow-lg hover:shadow-orange-accent/20 disabled:opacity-50"
                                    >
                                        {status === 'SUBMITTING' ? (
                                            <FaSpinner className="animate-spin text-bg-footer-card" size={20} />
                                        ) : (
                                            <FaArrowRight size={20} className="text-bg-footer-card" />
                                        )}
                                    </button>
                                </motion.div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}
