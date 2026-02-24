'use client'

import { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { FaLinkedinIn, FaWhatsapp, FaArrowRight, FaLaptop, FaBuilding } from 'react-icons/fa';

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
    const [form, setForm] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(form)
    }

    return (
        <section className="relative w-full bg-[#161719] pb-12 px-3 overflow-hidden">
            <motion.h2
                className="max-w-[1400px] mx-auto mb-6 text-[72px] md:text-[96px] xl:text-[120px]
               font-semibold tracking-[-0.04em] text-[#FA6F45]"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                Let’s Talk<span className="text-[#FA6F45]">.</span>
            </motion.h2>
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-1">

                {/* ── LEFT SIDE ─────────────────────────────────── */}
                <motion.div
                    className="grid grid-rows-[auto_auto_auto] gap-1"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >

                    {/* Follow Us */}
                    <motion.div
                        className="bg-[#212225] rounded-xl p-[32px] flex justify-between items-center"
                        variants={fadeInUp}
                    >
                        <motion.h5
                            className="text-[28px] font-medium tracking-[-0.04em] text-[#c0c0c0]"
                            variants={fadeInUp}
                        >
                            Follow us
                        </motion.h5>
                        <motion.div className="flex gap-10" variants={fadeInUp}>
                            <a href="#" className="text-[#dfd9d7] hover:text-[#FA6F45]">
                                <FaLinkedinIn size={22} />
                            </a>
                            <a href="#" className="text-[#dfd9d7] hover:text-[#FA6F45]">
                                <FaWhatsapp size={22} />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* What We Offer */}
                    <motion.div
                        className="bg-[#212225] rounded-xl p-[32px]"
                        variants={fadeInUp}
                    >
                        <motion.h5
                            className="text-[28px] font-medium tracking-[-0.04em] text-[#c0c0c0] mb-6"
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
                                'Consumer-first growth engines',
                                'Experience-driven platforms',
                                'High-volume commerce setup',
                                'Market-ready digital brands',
                                'End-to-end customer support',
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="text-[18px] tracking-[-0.02em] text-[#888891] list-disc ml-5"
                                    variants={listItem}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Digital + Office */}
                    <motion.div
                        className="bg-[#212225] rounded-xl p-[32px] grid md:grid-cols-2 gap-10"
                        variants={fadeInUp}
                    >
                        {/* Digital */}
                        <motion.div variants={fadeInUp}>
                            <motion.div
                                className="flex items-center gap-3 mb-4 text-[#c0c0c0]"
                                variants={fadeInUp}
                            >
                                <FaLaptop size={20} />
                                <span className="text-[22px] font-medium">
                                    Digital
                                </span>
                            </motion.div>
                            <motion.a
                                href="mailto:faiz@rahapartners.com"
                                className="text-[18px] text-[#FA6F45] hover:underline"
                                variants={fadeInUp}
                            >
                                support@rahapartners.com
                            </motion.a>
                        </motion.div>

                        {/* Office */}
                        <motion.div variants={fadeInUp}>
                            <motion.div
                                className="flex items-center gap-3 mb-4 text-[#c0c0c0]"
                                variants={fadeInUp}
                            >
                                <FaBuilding size={20} />
                                <span className="text-[22px] font-medium">
                                    Office
                                </span>
                            </motion.div>
                            <motion.p
                                className="text-[18px] text-[#888891] leading-relaxed"
                                variants={fadeInUp}
                            >
                                1246 Lake Road, Jumeirah<br />

                                <strong className="text-[#c0c0c0]">
                                    Dubai, UAE
                                </strong>
                            </motion.p>
                        </motion.div>
                    </motion.div>

                </motion.div>

                {/* ── RIGHT SIDE ─────────────────────────────── */}
                <motion.div
                    className="grid grid-rows-[auto_auto_auto_auto_auto_auto] gap-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >

                    {/* Header Card */}
                    <motion.div
                        className="bg-[#212225] rounded-xl p-[32px]"
                        variants={fadeInUp}
                    >
                        <h5 className="text-[28px] font-medium tracking-[-0.04em] text-[#c0c0c0] mb-2">
                            Got a question, challenge, or idea?
                        </h5>
                        <p className="text-[#888891] text-[18px]">
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
                        className="bg-[#2c2c2f] rounded-xl px-6 py-6 text-[#dfd9d7] placeholder-[#888891] outline-none"
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
                        className="bg-[#2c2c2f] rounded-xl px-6 py-6 text-[#dfd9d7] placeholder-[#888891] outline-none"
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
                        className="bg-[#2c2c2f] rounded-xl px-6 py-6 text-[#dfd9d7] placeholder-[#888891] outline-none"
                        variants={fadeInUp}
                    />

                    {/* Message */}
                    <motion.textarea
                        name="message"
                        placeholder="Your message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-[#2c2c2f] rounded-xl px-6 py-6 text-[#dfd9d7] placeholder-[#888891] outline-none resize-none"
                        variants={fadeInUp}
                    />

                    {/* Terms + Button Card */}
                    <motion.div
                        className="bg-[#2c2c2f] rounded-xl p-[32px] flex items-center justify-between"
                        variants={fadeInUp}
                    >
                        <p className="text-[16px] text-[#888891] italic">
                            By submitting, you agree to our{' '}
                            <a href="/privacy-policy" className="text-[#FA6F45]">
                                Privacy Policy.
                            </a>
                        </p>

                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="bg-[#FA6F45] hover:bg-[#ff7a4f] transition rounded-xl w-[64px] h-[64px] flex items-center justify-center"
                        >
                            <FaArrowRight size={20} className="text-[#212225]" />
                        </button>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    )
}