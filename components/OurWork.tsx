'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaTimes } from 'react-icons/fa';

import SectionHeader from './SectionHeader';

const Card = ({ title, subtitle, videoSrc, className, children }: { title: string, subtitle: string, videoSrc?: string, className?: string, children?: React.ReactNode }) => {
    return (
        <motion.div
            className={`relative overflow-hidden rounded-2xl bg-bg-soft border border-white/5 group ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            {videoSrc && (
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>
            )}

            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                {/* Top Content */}
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg md:text-xl font-normal text-muted tracking-tight leading-snug">{subtitle}</h3>
                        <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight leading-tight">{title}</h2>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11L11 1M11 1H1M11 1V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                {/* Bottom Content / Hover Reveal */}
                <div className="mt-auto pt-20">
                    <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                        <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                            {children}
                        </p>
                    </div>
                    <div className="h-px w-full bg-white/10 mt-6" />
                </div>
            </div>
        </motion.div>
    );
};

export default function OurWork() {
    const [isCard1Open, setIsCard1Open] = useState(false);

    return (
        <section id="our-work" className="relative bg-bg-section py-20 lg:py-48 px-6 overflow-hidden border-t border-white/5">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    number="001"
                    brandName="Raha Partners"
                    title="Brands We Scale"
                    statement="Real work. Real results."
                    description="Every engagement starts with a brand that needs market access and ends with products on shelves and screens."
                />

                {/* Middle Row: 3 equal cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-1">
                    {/* Audience Analytics */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-lg bg-bg-card-alt h-[380px] group"
                    >
                        <div className="absolute inset-0 z-0">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover opacity-70 grayscale"
                            >
                                <source src="/videos/training_vid2.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                        </div>

                        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                            <h3 className="text-2xl font-medium text-white">Laurastar</h3>

                            <div className="absolute top-6 right-6 grid grid-cols-3 gap-2 group-hover:rotate-90 transition-transform duration-300">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-[4px] h-[4px] rounded-sm bg-dot-color/70"
                                    />
                                ))}
                            </div>

                            <p className="hidden lg:block absolute bottom-10 lg:bottom-32 left-6 right-6 text-white text-[14px] md:text-[1.0625rem] leading-[1.44] tracking-tight opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                                Built the GCC e-commerce playbook for an Indian consumer electronics brand. Set up marketplace operations on Amazon and Noon, developed the content and listing strategy, and ran performance marketing to build initial traction.
                            </p>

                            <a href="#contact" className="flex items-start group/btn">
                                <div className="h-[60px] w-[160px] lg:w-[60px] group-hover/btn:w-[160px] rounded-xl bg-[#FF5722] flex items-center transition-all duration-300 hover:bg-[#E64A19] cursor-pointer overflow-hidden">
                                    <div className="flex items-center gap-4 px-[20px] whitespace-nowrap">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                                            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="font-medium text-[#161719] opacity-100 lg:opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                                            Talk to us
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </motion.div>


                    {/* Global Fulfillment */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-lg bg-bg-card-alt h-[380px] group"
                    >
                        {/* Image Background */}
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <img
                                src="/images/prediction.avif"
                                alt="Prediction"
                                className="w-full h-full object-cover opacity-70 grayscale transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>

                        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                            <h3 className="text-2xl font-medium text-white">LADAZ</h3>

                            <div className="absolute top-6 right-6 grid grid-cols-3 gap-2 group-hover:rotate-90 transition-transform duration-300">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-[4px] h-[4px] rounded-sm bg-dot-color/70"
                                    />
                                ))}
                            </div>

                            <p className="hidden lg:block absolute bottom-10 lg:bottom-32 left-6 right-6 text-white text-[14px] md:text-[1.0625rem] leading-[1.44] tracking-tight opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                                SEO, paid social, influencer partnerships, and in-store activations. Designed for conversion, not vanity metrics.
                            </p>

                            <a href="#contact" className="flex items-start group/btn">
                                <div className="h-[60px] w-[160px] lg:w-[60px] group-hover/btn:w-[160px] rounded-xl bg-[#FF5722] flex items-center transition-all duration-300 hover:bg-[#E64A19] cursor-pointer overflow-hidden">
                                    <div className="flex items-center gap-4 px-[20px] whitespace-nowrap">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                                            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="font-medium text-[#161719] opacity-100 lg:opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                                            Talk to us
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Personalization */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-lg bg-bg-card-alt h-[380px] group"
                    >
                        {/* Video Background */}
                        <div className="absolute inset-0 z-0">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover opacity-70 grayscale"
                            >
                                <source src="/videos/stableworks_vid3.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>

                        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                            <h3 className="text-2xl font-medium text-white">Basic Brands</h3>

                            <div className="absolute top-6 right-6 grid grid-cols-3 gap-2 group-hover:rotate-90 transition-transform duration-300">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-[4px] h-[4px] rounded-sm bg-dot-color/70"
                                    />
                                ))}
                            </div>

                            <p className="hidden lg:block absolute bottom-10 lg:bottom-32 left-6 right-6 text-white text-[14px] md:text-[1.0625rem] leading-[1.44] tracking-tight opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                                Municipality registrations, product labeling, import documentation, and GCC conformity. We handle the paperwork that stops most international brands at the border.
                            </p>

                            <a href="#contact" className="flex items-start group/btn">
                                <div className="h-[60px] w-[160px] lg:w-[60px] group-hover/btn:w-[160px] rounded-xl bg-[#FF5722] flex items-center transition-all duration-300 hover:bg-[#E64A19] cursor-pointer overflow-hidden">
                                    <div className="flex items-center gap-4 px-[20px] whitespace-nowrap">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                                            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="font-medium text-[#161719] opacity-100 lg:opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                                            Talk to us
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Row: 3 equal cards, cta middle (Moved to Middle) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 mb-1">

                    {/* Market Expansion */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-lg bg-bg-card-alt h-[380px] group"
                    >
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <img
                                src="/images/inference.avif"
                                alt="Inference"
                                className="w-full h-full object-cover opacity-70 grayscale transition-transform duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>

                        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                            <h3 className="text-2xl font-medium text-white">Noise</h3>

                            <div className="absolute top-6 right-6 grid grid-cols-3 gap-2 group-hover:rotate-90 transition-transform duration-300">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-[4px] h-[4px] rounded-sm bg-[#E3DBD8]/70"
                                    />
                                ))}
                            </div>

                            <p className="hidden lg:block absolute bottom-10 lg:bottom-32 left-6 right-6 text-white text-[14px] md:text-[1.0625rem] leading-[1.44] tracking-tight opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                                We manage the full stack — catalog setup, pricing strategy, content optimization, inventory sync, and seller performance across Amazon, Noon, and Mumzworld.
                            </p>

                            <a href="#contact" className="flex items-start group/btn">
                                <div className="h-[60px] w-[160px] lg:w-[60px] group-hover/btn:w-[160px] rounded-xl bg-[#FF5722] flex items-center transition-all duration-300 hover:bg-[#E64A19] cursor-pointer overflow-hidden">
                                    <div className="flex items-center gap-4 px-[20px] whitespace-nowrap">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                                            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="font-medium text-[#161719] opacity-100 lg:opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                                            Talk to us
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Analytics Insights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-lg bg-bg-card-alt h-[380px] group"
                    >
                        {/* Image Background */}
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <img
                                src="/images/prediction.avif"
                                alt="Analytics"
                                className="w-full h-full object-cover opacity-70 grayscale transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>

                        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                            <h3 className="text-2xl font-medium text-white">Signature Perfumes</h3>

                            <div className="absolute top-6 right-6 grid grid-cols-3 gap-2 group-hover:rotate-90 transition-transform duration-300">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-[4px] h-[4px] rounded-sm bg-[#E3DBD8]/70"
                                    />
                                ))}
                            </div>

                            <p className="hidden lg:block absolute bottom-10 lg:bottom-32 left-6 right-6 text-white text-[14px] md:text-[1.0625rem] leading-[1.44] tracking-tight opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                                Real-time insights on market performance, competitor analysis, and customer behavior to drive data-backed decisions and scale your brand profitably.
                            </p>

                            <a href="#contact" className="flex items-start group/btn">
                                <div className="h-[60px] w-[160px] lg:w-[60px] group-hover/btn:w-[160px] rounded-xl bg-[#FF5722] flex items-center transition-all duration-300 hover:bg-[#E64A19] cursor-pointer overflow-hidden">
                                    <div className="flex items-center gap-4 px-[20px] whitespace-nowrap">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                                            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="font-medium text-[#161719] opacity-100 lg:opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                                            Talk to us
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Raha Launchpad */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-lg bg-bg-card-alt h-[380px] group"
                    >
                        {/* Video Background */}
                        <div className="absolute inset-0 z-0">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover opacity-70 grayscale"
                            >
                                <source src="/videos/stableworks_vid3.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>

                        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                            <h3 className="text-2xl font-medium text-white">OS Fashion Eyewear</h3>

                            <div className="absolute top-6 right-6 grid grid-cols-3 gap-2 group-hover:rotate-90 transition-transform duration-300">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-[4px] h-[4px] rounded-sm bg-[#E3DBD8]/70"
                                    />
                                ))}
                            </div>

                            <p className="hidden lg:block absolute bottom-10 lg:bottom-32 left-6 right-6 text-white text-[14px] md:text-[1.0625rem] leading-[1.44] tracking-tight opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                                Our end-to-end brand launch system. From regulatory clearance to first sale, compressed into a single managed process.
                            </p>

                            <a href="#contact" className="flex items-start group/btn">
                                <div className="h-[60px] w-[160px] lg:w-[60px] group-hover/btn:w-[160px] rounded-xl bg-[#FF5722] flex items-center transition-all duration-300 hover:bg-[#E64A19] cursor-pointer overflow-hidden">
                                    <div className="flex items-center gap-4 px-[20px] whitespace-nowrap">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                                            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="font-medium text-[#161719] opacity-100 lg:opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                                            Talk to us
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                </div>

                {/* Top Row: Bento Grid Layout (Moved to Bottom) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-[300px] gap-1">
                    {/* Top Row: Case Study 1 (Spans 2 columns, 2 rows) */}
                    <div className="lg:col-span-2 row-span-2 h-[600px]">
                        {/* Case Study 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-3xl bg-bg-card-alt h-full group"
                        >
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <picture>
                                    <source media="(max-width: 765px)" srcSet="/images/lift_xtra_ALU_1.webp" />
                                    <img
                                        src="/images/training.avif"
                                        alt="Electronics"
                                        className="w-full h-full object-cover opacity-90 grayscale transition-transform duration-500 group-hover:scale-110"
                                    />
                                </picture>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                            </div>

                            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                                <div>
                                    <p className="text-sm text-white/60 mb-2">Distribution + E-commerce</p>
                                    <h3 className="text-3xl font-medium text-white max-w-lg leading-tight">Placeholder</h3>
                                </div>

                                {/* Mobile/Tablet Description (Fixed at bottom) */}
                                <div className="lg:hidden mt-auto">
                                    <p className="text-white/90 text-[14px] md:text-[1.0625rem] leading-[1.44] tracking-tight">
                                        Took a European premium appliance brand from zero GCC presence to full marketplace and retail coverage across the UAE. Built the distribution infrastructure and secured retail partnerships.
                                    </p>
                                </div>

                                {/* Overlay Content (z-20) - Desktop Only Toggle */}
                                <AnimatePresence>
                                    {isCard1Open && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 z-20 bg-black/90 p-12 hidden lg:flex flex-col justify-center"
                                        >
                                            <div className="max-w-md">
                                                <p className="text-white/90 text-[14px] md:text-[1.0625rem] leading-[1.44] tracking-tight mb-8">
                                                    Took a European premium appliance brand from zero GCC presence to full marketplace and retail coverage across the UAE. Built the distribution infrastructure and secured retail partnerships.
                                                </p>
                                                <div className="text-orange-main text-2xl font-bold">
                                                    Result: <span className="text-white">Live across 5+ retail and online channels within 120 days</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <button
                                    onClick={() => setIsCard1Open(!isCard1Open)}
                                    className={`relative z-30 h-[60px] rounded-xl hidden lg:flex items-center transition-all duration-300 overflow-hidden cursor-pointer
                                        ${isCard1Open ? 'w-[60px] justify-center bg-white text-bg-main' : 'w-[60px] group-hover:w-[160px] justify-start bg-[#FF5722] hover:bg-[#E64A19]'}`}
                                >
                                    <div className="flex items-center gap-4 px-[20px] whitespace-nowrap">
                                        {isCard1Open ? (
                                            <FaTimes size={24} className="flex-shrink-0" />
                                        ) : (
                                            <>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                                                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span className="font-medium text-[#161719] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    View Details
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Case Study 2 (Spans 1 column, 2 rows) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-3xl row-span-2 bg-orange-main h-[600px] group"
                    >
                        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                            <div>
                                <p className="text-white/90 text-sm text-white/80 mb-2">Market Entry + Compliance</p>
                                <h3 className="text-4xl font-medium text-white mb-6 leading-tight">Raha Launchpad</h3>
                                <p className="text-white/90 text-[14px] md:text-[1.0625rem] leading-[1.44] tracking-tight mb-8">Managed end-to-end market entry including regulatory clearance, municipality approvals, and labeling compliance.</p>
                                <div className="bg-black/10 p-6 rounded-xl border border-white/10">
                                    <div className="text-white/60 text-xs uppercase tracking-widest mb-1">Impact</div>
                                    <div className="text-white font-medium">Regulatory clearance secured. Product market-ready in UAE.</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-white/90">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5" fill="none" />
                                    <circle cx="10" cy="10" r="3" fill="white" />
                                </svg>
                                <span className="text-sm font-medium">Regulatory & Compliance Mastery</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
