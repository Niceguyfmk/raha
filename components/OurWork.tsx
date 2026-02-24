'use client';
import React from 'react';
import { motion } from 'framer-motion';

import SectionHeader from './SectionHeader';

const Card = ({ title, subtitle, videoSrc, className, children }: { title: string, subtitle: string, videoSrc?: string, className?: string, children?: React.ReactNode }) => {
    return (
        <motion.div
            className={`relative overflow-hidden rounded-2xl bg-[#0f0f11] border border-white/5 group ${className}`}
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
                        <h3 className="text-lg md:text-xl font-normal text-[#888891] tracking-tight leading-snug">{subtitle}</h3>
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
    return (
        <section className="relative bg-[#161719] py-48 px-6 overflow-hidden border-t border-white/5">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    number="001"
                    brandName="Raha Partners"
                    title="Our Work"
                    statement="Transforming consumer behavior into loyal communities that drive sustainable growth every day."
                    description="Every solution is designed to solve real problems, delivering practical value over mere aesthetics."
                />

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-[380px] gap-1 mb-1">
                    {/* Top Row: 2 large cards */}
                    <div className="lg:col-span-2 lg:row-span-2">
                        {/* Digital Commerce - Large Left Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-3xl bg-[#2a2a2c] h-full group"
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <img
                                    src="/images/training.avif"
                                    alt="Training"
                                    className="w-full h-full object-cover opacity-90 grayscale transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                                {/* Top: Title */}
                                <div>
                                    <p className="text-sm text-white/60 mb-2">Digital Commerce & Marketplaces</p>
                                    <h3 className="text-3xl font-medium text-white">Direct-to-Consumer Growth</h3>
                                </div>

                                {/* Top Right: Grid Icon */}
                                <div className="absolute top-8 right-8 grid grid-cols-3 gap-2 group-hover:rotate-90 transition-transform duration-300">
                                    {[...Array(9)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-[4px] h-[4px] rounded-sm bg-[#E3DBD8]/70"
                                        />
                                    ))}
                                </div>

                                {/* Bottom Left: Arrow Button */}
                                <button className="w-[60px] h-[60px] group-hover:w-[140px] rounded-xl bg-[#FF5722] flex items-center justify-center hover:bg-[#E64A19] transition-all duration-300">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Omnichannel Scale - Large Right Card (Orange) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-3xl lg:row-span-2 bg-[#FF5722] h-full group"
                    >
                        {/* Content */}
                        <div className="relative z-10 p-8 h-full flex flex-col justify-between">

                            {/* Top Section */}
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <p className="text-sm text-white/80">Product Lineup</p>
                                    <span className="text-xs text-white/60">5/8</span>
                                </div>

                                <h3 className="text-5xl font-medium text-white mb-6">
                                    Omnichannel
                                </h3>

                                <p className="text-white/90 text-base leading-relaxed max-w-sm">
                                    Seamless customer journeys that connect digital engagement with real-world conversion.
                                </p>

                                {/* Animated Dot Section */}
                                <div className="relative mt-12 flex justify-center">

                                    <div className="relative w-full max-w-[420px] h-[220px] sm:h-[240px] lg:h-[272px] overflow-hidden">

                                        {/* Layer 1 */}
                                        <motion.div
                                            className="absolute inset-0 grid grid-cols-6 sm:grid-cols-7 lg:grid-cols-8 gap-6 place-items-center"
                                            animate={{ y: [0, 14, 0] }}
                                            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            {[...Array(48)].map((_, i) => (
                                                <div
                                                    key={`base-${i}`}
                                                    className="w-[6px] h-[6px] rounded-full bg-white/40"
                                                />
                                            ))}
                                        </motion.div>

                                        {/* Layer 2 (reverse drift) */}
                                        <motion.div
                                            className="absolute inset-0 grid grid-cols-6 sm:grid-cols-7 lg:grid-cols-8 gap-6 place-items-center rotate-180"
                                            animate={{ y: [0, -18, 0] }}
                                            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            {[...Array(48)].map((_, i) => (
                                                <div
                                                    key={`reverse-${i}`}
                                                    className="w-[6px] h-[6px] rounded-full bg-white/25"
                                                />
                                            ))}
                                        </motion.div>

                                    </div>
                                </div>

                            </div>

                            {/* Bottom Section */}
                            <div className="flex items-center gap-2 text-white/90">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5" fill="none" />
                                    <circle cx="10" cy="10" r="3" fill="white" />
                                </svg>
                                <span className="text-sm font-medium">
                                    Consumer First Experience
                                </span>
                            </div>

                        </div>
                    </motion.div>

                </div>

                {/* Middle Row: 3 equal cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-1">
                    {/* Audience Analytics */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-lg bg-[#2a2a2c] h-[380px] group"
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
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>

                        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                            <h3 className="text-2xl font-medium text-white">Audience Analytics</h3>

                            <div className="absolute top-6 right-6 grid grid-cols-3 gap-2 group-hover:rotate-90 transition-transform duration-300">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-[4px] h-[4px] rounded-sm bg-[#E3DBD8]/70"
                                    />
                                ))}
                            </div>

                            <p className="absolute bottom-32 left-6 text-white text-[1.0625rem] leading-[1.4] tracking-tighter max-w-[15.8rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Real-time tracking and evaluation of consumer behavior, conversion paths, and brand sentiment.
                            </p>

                            <button className="w-[60px] h-[60px] group-hover:w-[140px] rounded-xl bg-[#FF5722] flex items-center justify-center hover:bg-[#E64A19] transition-all duration-300">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>


                    {/* Global Fulfillment */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-lg bg-[#2a2a2c] h-[380px] group"
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
                            <h3 className="text-2xl font-medium text-white">Global Fulfillment</h3>

                            <div className="absolute top-6 right-6 grid grid-cols-3 gap-2 group-hover:rotate-90 transition-transform duration-300">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-[4px] h-[4px] rounded-sm bg-[#E3DBD8]/70"
                                    />
                                ))}
                            </div>

                            <p className="absolute bottom-32 left-6 text-white text-[1.0625rem] leading-[1.4] tracking-tighter max-w-[15.8rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Optimized logistics and distribution systems that ensure your products reach customers everywhere, fast.
                            </p>

                            <button className="w-[60px] h-[60px] group-hover:w-[140px] rounded-xl bg-[#FF5722] flex items-center justify-center hover:bg-[#E64A19] transition-all duration-300">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>

                    {/* Personalization */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-lg bg-[#2a2a2c] h-[380px] group"
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
                            <h3 className="text-2xl font-medium text-white">Personalization</h3>

                            <div className="absolute top-6 right-6 grid grid-cols-3 gap-2 group-hover:rotate-90 transition-transform duration-300">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-[4px] h-[4px] rounded-sm bg-[#E3DBD8]/70"
                                    />
                                ))}
                            </div>

                            <p className="absolute bottom-32 left-6 text-white text-[1.0625rem] leading-[1.4] tracking-tighter max-w-[15.8rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                AI-driven product recommendations and content tailoring that makes every customer feel seen.
                            </p>

                            <button className="w-[60px] h-[60px] group-hover:w-[140px] rounded-xl bg-[#FF5722] flex items-center justify-center hover:bg-[#E64A19] transition-all duration-300">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Row: 3 equal cards, cta middle */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">

                    {/* Market Expansion */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-lg bg-[#2a2a2c] h-[380px] group"
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
                            <h3 className="text-2xl font-medium text-white">Market Expansion</h3>

                            <div className="absolute top-6 right-6 grid grid-cols-3 gap-2 group-hover:rotate-90 transition-transform duration-300">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-[4px] h-[4px] rounded-sm bg-[#E3DBD8]/70"
                                    />
                                ))}
                            </div>

                            <p className="absolute bottom-32 left-6 text-white text-[1.0625rem] leading-[1.4] tracking-tighter max-w-[15.8rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Scalable frameworks for entering new territories and adapting to local consumer preferences.
                            </p>

                            <button className="w-[60px] h-[60px] group-hover:w-[140px] rounded-xl bg-[#FF5722] flex items-center justify-center hover:bg-[#E64A19] transition-all duration-300">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>

                    {/* Middle Image Card (NO TEXT, NO CTA) */}
                    <motion.div className="relative overflow-hidden rounded-lg h-[380px] flex items-center justify-center">
                        <svg
                            viewBox="0 0 200 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-40 h-24 text-white/10"
                        >
                            {/* Base Block */}
                            <path
                                d="M30 50 L150 50 L170 70 L50 70 Z"
                                stroke="currentColor"
                                strokeWidth="4"
                            />

                            {/* Left Side */}
                            <path
                                d="M30 50 L50 70 L50 110 L30 90 Z"
                                stroke="currentColor"
                                strokeWidth="4"
                            />

                            {/* Front Face */}
                            <rect
                                x="50"
                                y="70"
                                width="120"
                                height="40"
                                stroke="currentColor"
                                strokeWidth="4"
                            />

                            {/* Top Circles */}
                            <circle
                                cx="80"
                                cy="40"
                                r="14"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <circle
                                cx="120"
                                cy="40"
                                r="14"
                                stroke="currentColor"
                                strokeWidth="4"
                            />

                            {/* Circle Connectors */}
                            <line x1="80" y1="54" x2="80" y2="50" stroke="currentColor" strokeWidth="4" />
                            <line x1="120" y1="54" x2="120" y2="50" stroke="currentColor" strokeWidth="4" />
                        </svg>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </motion.div>

                    {/* Right Info Card */}
                    <motion.div className="relative rounded-2xl bg-[#1C1D20] h-[380px] p-10 flex flex-col justify-between">
                        <div>
                            <h3 className="text-4xl font-medium text-white">
                                Brand Engine <span className="text-white/40">2.0</span>
                            </h3>

                            <p className="text-[#FF5722] mt-4">
                                Early beta access now available.
                            </p>

                            <div className="mt-8">
                                <span className="text-white/40 text-sm">
                                    Scaling Progress
                                </span>
                                <div className="text-6xl font-medium text-white mt-4">
                                    84.7%
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-white/60">Talk to us</span>

                            <button className="w-[60px] h-[60px] rounded-xl bg-[#FF5722] flex items-center justify-center">
                                →
                            </button>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
