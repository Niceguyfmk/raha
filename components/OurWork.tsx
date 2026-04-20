'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

import SectionHeader from './SectionHeader';

const Card = ({ title, subtitle, videoSrc, className, children }: { title: string, subtitle: string, videoSrc?: string, className?: string, children?: React.ReactNode }) => {
    return (
        <motion.div
            className={`relative overflow-hidden rounded-2xl bg-bg-soft group ${className}`}
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
        <section id="our-work" className="relative bg-bg-section pt-20 pb-20 lg:py-24 px-6 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    brandName="Our Partners"
                    title="Brands We Scale"
                    statement="Real work. Real results."
                    description="Every engagement starts with a brand that needs market access and ends with products on shelves and screens."
                />

                {/* Middle Row: 3 equal cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-1">
                    {/* Audience Analytics */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-lg bg-bg-card-alt h-[380px] group"
                    >
                        {/* Image Background */}
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <img
                                src="/images/laura_img.jpg"
                                alt="Laurastar"
                                className="w-full h-full object-cover opacity-70 grayscale transition-transform duration-500 group-hover:scale-110"
                            />
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


                            <a
                                href="https://laurastar.ae/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start group/btn"
                            >
                                <div className="h-[60px] w-[220px] lg:w-[60px] group-hover/btn:w-[220px] rounded-xl bg-[#FF5722] flex items-center transition-all duration-300 hover:bg-[#E64A19] cursor-pointer overflow-hidden">
                                    <div className="flex items-center gap-4 px-[20px] whitespace-nowrap">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                                            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="font-medium text-[#161719] opacity-100 lg:opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                                            Explore our partner
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
                                src="/images/ladaz.jpg"
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


                            <a
                                href="https://ladaz.co/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start group/btn"
                            >
                                <div className="h-[60px] w-[220px] lg:w-[60px] group-hover/btn:w-[220px] rounded-xl bg-[#FF5722] flex items-center transition-all duration-300 hover:bg-[#E64A19] cursor-pointer overflow-hidden">
                                    <div className="flex items-center gap-4 px-[20px] whitespace-nowrap">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                                            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="font-medium text-[#161719] opacity-100 lg:opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                                            Explore our partner
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
                        {/* Image Background */}
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <img
                                src="/images/platable.avif"
                                alt="Platable"
                                className="w-full h-full object-cover opacity-70 grayscale transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>

                        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                            <h3 className="text-2xl font-medium text-white">Platable</h3>

                            <div className="absolute top-6 right-6 grid grid-cols-3 gap-2 group-hover:rotate-90 transition-transform duration-300">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-[4px] h-[4px] rounded-sm bg-dot-color/70"
                                    />
                                ))}
                            </div>


                            <a
                                href="https://stage.platablenow.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start group/btn"
                            >
                                <div className="h-[60px] w-[220px] lg:w-[60px] group-hover/btn:w-[220px] rounded-xl bg-[#FF5722] flex items-center transition-all duration-300 hover:bg-[#E64A19] cursor-pointer overflow-hidden">
                                    <div className="flex items-center gap-4 px-[20px] whitespace-nowrap">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                                            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="font-medium text-[#161719] opacity-100 lg:opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                                            Explore our partner
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Row: 3 equal cards, cta middle (Moved to Middle) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-1">

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
                                src="/images/noise.jpg"
                                alt="Noise"
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


                            <a
                                href="https://www.gonoise.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start group/btn"
                            >
                                <div className="h-[60px] w-[220px] lg:w-[60px] group-hover/btn:w-[220px] rounded-xl bg-[#FF5722] flex items-center transition-all duration-300 hover:bg-[#E64A19] cursor-pointer overflow-hidden">
                                    <div className="flex items-center gap-4 px-[20px] whitespace-nowrap">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                                            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="font-medium text-[#161719] opacity-100 lg:opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                                            Explore our partner
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
                                src="/images/techxr.png"
                                alt="TechXR"
                                className="w-full h-full object-cover opacity-70 grayscale transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>

                        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                            <h3 className="text-2xl font-medium text-white">TechXR</h3>

                            <div className="absolute top-6 right-6 grid grid-cols-3 gap-2 group-hover:rotate-90 transition-transform duration-300">
                                {[...Array(9)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-[4px] h-[4px] rounded-sm bg-[#E3DBD8]/70"
                                    />
                                ))}
                            </div>


                            <a
                                href="https://techxr.co/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start group/btn"
                            >
                                <div className="h-[60px] w-[220px] lg:w-[60px] group-hover/btn:w-[220px] rounded-xl bg-[#FF5722] flex items-center transition-all duration-300 hover:bg-[#E64A19] cursor-pointer overflow-hidden">
                                    <div className="flex items-center gap-4 px-[20px] whitespace-nowrap">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                                            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="font-medium text-[#161719] opacity-100 lg:opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                                            Explore our partner
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
                        {/* Image Background */}
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <img
                                src="/images/osf_img.webp"
                                alt="OS Fashion Eyewear"
                                className="w-full h-full object-cover opacity-70 grayscale transition-transform duration-500 group-hover:scale-110"
                            />
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


                            <a
                                href="https://osfashioneyewear.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start group/btn"
                            >
                                <div className="h-[60px] w-[220px] lg:w-[60px] group-hover/btn:w-[220px] rounded-xl bg-[#FF5722] flex items-center transition-all duration-300 hover:bg-[#E64A19] cursor-pointer overflow-hidden">
                                    <div className="flex items-center gap-4 px-[20px] whitespace-nowrap">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
                                            <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="font-medium text-[#161719] opacity-100 lg:opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                                            Explore our partner
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                </div>



            </div>
        </section>
    );
}
