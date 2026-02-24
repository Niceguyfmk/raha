'use client'

import { motion } from 'framer-motion'
import { FaLinkedinIn, FaWhatsapp, FaArrowRight, FaChevronUp } from 'react-icons/fa'
import { useRef } from 'react'

export default function FooterContent() {
    const containerRef = useRef<HTMLDivElement>(null)

    // Rotating text path for the decoration
    const textPath = "M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"

    return (
        <div ref={containerRef} className="relative w-full bg-[#161719] text-[#dfd9d7] font-sans overflow-hidden">
            <div className="max-w-[1400px] mx-auto p-3 grid grid-cols-1 md:grid-cols-2 gap-1">

                {/* ── PANEL 1: MESSAGE ────────────────────────────────── */}
                <div className="bg-[#212225] rounded-xl p-8 md:p-12 flex flex-col justify-between min-h-[400px] border border-white/5">
                    <div className="relative w-32 h-32 mb-8">
                        {/* Rotating Text Decoration */}
                        <motion.div
                            className="absolute inset-0 w-full h-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        >
                            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                                <path id="footer-text-path" d={textPath} fill="transparent" />
                                <text className="text-[12px] uppercase font-medium fill-[#c0c0c0] tracking-widest">
                                    <textPath href="#footer-text-path" startOffset="0">
                                        we build brands, you lead markets —&nbsp;
                                    </textPath>
                                </text>
                            </svg>
                        </motion.div>
                        <div className="absolute inset-0 m-auto w-6 h-6 bg-[#FA6F45] rounded-full shadow-[0_0_20px_rgba(250,111,69,0.4)]" />
                    </div>

                    <h5 className="text-[28px] md:text-[34px] font-medium tracking-[-0.04em] text-[#888891] leading-tight text-balance">
                        The smarter way to build, run and scale your brand.
                    </h5>
                </div>

                {/* ── PANEL 2: LOGO LOCKUP ─────────────────────────────── */}
                <div className="relative bg-[#212225] rounded-xl overflow-hidden min-h-[400px] flex flex-col justify-between p-8 md:p-12 group border border-white/5">
                    {/* Video Background with Particle Effect Overlay */}
                    <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                        <video
                            src="https://framerusercontent.com/assets/0BlOZC7zBspEbVthghs8ilWWvc.mp4"
                            autoPlay loop muted playsInline
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>

                    <div className="relative z-10 flex justify-end">
                        <a href="mailto:hello@rahapartners.com" className="text-[18px] md:text-[22px] font-medium text-[#dfd9d7] hover:text-[#FA6F45] transition-colors">
                            hello@rahapartners.com
                        </a>
                    </div>

                    <div className="relative z-10 py-12">
                        <h2 className="text-[60px] md:text-[100px] xl:text-[140px] font-black tracking-[-0.08em] leading-none text-[#FA6F45] select-none opacity-90">
                            RAHA
                        </h2>
                    </div>

                    <div className="relative z-10">
                        <p className="text-[16px] md:text-[18px] leading-relaxed text-[#c0c0c0]">
                            Jumeirah Lake Towers <br />
                            Dubai, <strong className="text-white">UAE</strong>
                        </p>
                    </div>
                </div>

                {/* ── PANEL 3: NAVIGATION ──────────────────────────────── */}
                <div className="bg-[#212225] rounded-xl p-8 md:p-12 grid grid-cols-2 gap-8 border border-white/5">
                    <div className="space-y-6">
                        <div className="flex gap-2 mb-2">
                            <span className="w-4 h-1.5 bg-[#FA6F45] rounded-full" />
                            <span className="w-1.5 h-1.5 bg-[#434346] rounded-full" />
                        </div>
                        {['Home', 'Work', 'Services', 'Process', 'FAQ', 'Testimonials'].map(link => (
                            <a key={link} href="#" className="block text-[18px] md:text-[22px] text-[#dfd9d7] hover:text-[#FA6F45] transition-colors">
                                {link}
                            </a>
                        ))}
                    </div>
                    <div className="space-y-6">
                        <div className="flex gap-2 mb-2">
                            <span className="w-1.5 h-1.5 bg-[#434346] rounded-full" />
                            <span className="w-4 h-1.5 bg-[#FA6F45] rounded-full" />
                        </div>
                        {['The Team', 'Blog', 'Contact', 'Terms & Service', 'Privacy Policy'].map(link => (
                            <a key={link} href="#" className="block text-[18px] md:text-[22px] text-[#dfd9d7] hover:text-[#FA6F45] transition-colors">
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

                {/* ── PANEL 4: NEWSLETTER ─────────────────────────────── */}
                <div className="bg-[#212225] rounded-xl p-8 md:p-12 flex flex-col justify-between space-y-8 border border-white/5">
                    <div>
                        <h5 className="text-[24px] md:text-[28px] font-medium text-[#c0c0c0] mb-3">
                            Keep up with our journey and updates
                        </h5>
                        <p className="text-[#888891] text-[16px] md:text-[18px]">
                            Get the latest news, insights directly to your inbox. <span className="text-[#FA6F45]">*</span>
                        </p>
                    </div>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-[#2c2c2f] rounded-xl px-6 py-5 text-[#dfd9d7] placeholder-[#888891] outline-none border border-transparent focus:border-white/10 transition-all"
                        />
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="flex-1 bg-[#2c2c2f] rounded-xl px-6 py-5 text-[#dfd9d7] placeholder-[#888891] outline-none border border-transparent focus:border-white/10 transition-all"
                            />
                            <button type="submit" onClick={(e) => e.preventDefault()} className="bg-[#FA6F45] hover:bg-[#ff7a4f] text-[#212225] w-16 h-16 rounded-xl flex items-center justify-center transition-all hover:scale-105">
                                <FaArrowRight size={20} />
                            </button>
                        </div>
                    </form>

                    <div>
                        <p className="text-[14px] text-[#888891] italic leading-relaxed">
                            By submitting, you agree to our <a href="#" className="text-[#FA6F45] hover:underline">Terms & Service.</a>
                            <br />
                            <span className="text-[#FA6F45] mr-1">*</span> No spam, just awesome updates.
                        </p>
                    </div>
                </div>

                {/* ── FOOTER BOTTOM ───────────────────────────────────── */}
                <div className="md:col-span-2 bg-[#212225] rounded-xl p-8 flex flex-col md:flex-row justify-between items-center gap-8 border border-white/5">
                    <div className="text-[#888891] text-sm text-center md:text-left">
                        <p className="mb-2">2025 © Raha Partners. All rights reserved.</p>
                        <p className="max-w-md text-[13px] leading-relaxed">
                            <strong className="text-[#c0c0c0]">Raha Partners</strong>, registered in Dubai, specializes in disruptive B2C brands and consumer digital platforms.
                        </p>
                    </div>

                    <div className="flex gap-6 items-center">
                        <a href="#" className="w-10 h-10 rounded-full bg-[#2c2c2f] flex items-center justify-center text-[#dfd9d7] hover:text-[#FA6F45] transition-all hover:scale-110">
                            <FaLinkedinIn size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#2c2c2f] flex items-center justify-center text-[#dfd9d7] hover:text-[#FA6F45] transition-all hover:scale-110">
                            <FaWhatsapp size={18} />
                        </a>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center gap-3 bg-[#2c2c2f] px-6 py-3 rounded-xl text-[#dfd9d7] hover:text-[#FA6F45] transition-all group"
                        >
                            <span className="text-sm font-medium tracking-widest">TOP</span>
                            <FaChevronUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-12" /> {/* Final padding */}
        </div>
    )
}
