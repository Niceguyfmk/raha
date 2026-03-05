'use client';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

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
        <section id="our-work" className="relative bg-[#161719] py-48 px-6 overflow-hidden border-t border-white/5">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    number="001"
                    brandName="Raha Partners"
                    title="Brands we’ve taken to market"
                    statement="Real work. Real results."
                    description="Every engagement below started with a brand that needed GCC market access and ended with products on shelves and screens."
                />

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-[380px] gap-1 mb-1">
                    {/* Top Row: 2 large cards */}
                    <div className="lg:col-span-2 lg:row-span-2">
                        {/* Case Study 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-3xl bg-[#2a2a2c] h-full group"
                        >
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <img
                                    src="/images/training.avif"
                                    alt="Electronics"
                                    className="w-full h-full object-cover opacity-90 grayscale transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            </div>

                            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                                <div>
                                    <p className="text-sm text-white/60 mb-2">Distribution + E-commerce</p>
                                    <h3 className="text-3xl font-medium text-white max-w-lg leading-tight">Premium Electronics — UAE Market Entry</h3>
                                </div>

                                <div className="max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white/80 mb-4">Took a European premium appliance brand from zero GCC presence to full marketplace and retail coverage across the UAE. Built the distribution infrastructure and secured retail partnerships.</p>
                                    <div className="text-[#FF5722] font-medium">Result: Live across 5+ retail and online channels within 120 days</div>
                                </div>

                                <button className="w-[60px] h-[60px] group-hover:w-[140px] rounded-xl bg-[#FF5722] flex items-center justify-center hover:bg-[#E64A19] transition-all duration-300">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Case Study 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-3xl lg:row-span-2 bg-[#FF5722] h-full group"
                    >
                        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                            <div>
                                <p className="text-sm text-white/80 mb-2">Market Entry + Compliance</p>
                                <h3 className="text-4xl font-medium text-white mb-6 leading-tight">Thai Consumer Brand — GCC Regulatory & Launch</h3>
                                <p className="text-white/90 text-base leading-relaxed mb-8">Managed end-to-end market entry including regulatory clearance, municipality approvals, and labeling compliance.</p>
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

                {/* Middle Row: Case Study 3 + 2 Capabilities */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-1">
                    {/* Case Study 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-lg bg-[#2a2a2c] h-[380px] group"
                    >
                        <div className="absolute inset-0 z-0">
                            <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-70 grayscale">
                                <source src="/videos/training_vid2.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>
                        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                            <div>
                                <p className="text-xs text-white/40 mb-1">E-commerce + Marketing</p>
                                <h3 className="text-2xl font-medium text-white">Indian Electronics Brand — GCC Scale</h3>
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Built the GCC e-commerce playbook, set up marketplace operations on Amazon and Noon, and ran performance marketing to establish traction.
                                <br /><br />
                                <span className="text-[#FF5722]">Result: Full marketplace presence established across 3 platforms</span>
                            </p>
                            <button className="w-12 h-12 rounded-xl bg-[#FF5722] flex items-center justify-center">
                                <FaArrowRight className="-rotate-45" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Capability 1: Marketplace Operations */}
                    <Card
                        title="Marketplace Operations"
                        subtitle="E-commerce"
                        className="rounded-lg h-[380px]"
                    >
                        We don’t just list your products. We manage the full stack — catalog setup, pricing strategy, content optimization, and performance across Amazon, Noon, and Mumzworld.
                    </Card>

                    {/* Capability 2: Distribution & Retail */}
                    <Card
                        title="Distribution & Retail"
                        subtitle="Logistics"
                        videoSrc="/videos/stableworks_vid3.mp4"
                        className="rounded-lg h-[380px]"
                    >
                        Warehousing, retail partner onboarding, and physical distribution across UAE and GCC. We have the relationships to get your product on shelves.
                    </Card>
                </div>

                {/* Bottom Row: 4 Capabilities */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 mb-1">
                    <Card title="Regulatory & Compliance" subtitle="Market Entry" className="rounded-lg h-[380px]">
                        Municipality registrations, labeling, import documentation, and GCC conformity. We handle the paperwork that stops most brands at the border.
                    </Card>
                    <Card title="Performance Marketing" subtitle="Growth" className="rounded-lg h-[380px]">
                        SEO, paid social, influencer partnerships, and in-store activations. Designed for conversion, not vanity metrics.
                    </Card>
                    <Card title="D2C & Shopify" subtitle="Experience" className="rounded-lg h-[380px]">
                        Standalone e-commerce builds for brands that want to own their customer relationship. From Shopify setup to CRM integration.
                    </Card>
                    <Card title="Market Intelligence" subtitle="Analytics" className="rounded-lg h-[380px]">
                        Competitive pricing analysis, demand forecasting, and channel performance tracking. Data-led decisions, not guesswork.
                    </Card>
                </div>

                {/* Teaser Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
                    <motion.div className="lg:col-span-2 relative rounded-2xl bg-[#1C1D20] p-10 flex flex-col justify-between min-h-[300px]">
                        <div>
                            <h3 className="text-4xl font-medium text-white mb-4">
                                Raha Launchpad <span className="text-white/40">v1.0</span>
                            </h3>
                            <p className="text-[#888891] text-xl max-w-2xl leading-relaxed">
                                Our end-to-end brand launch system. From regulatory clearance to first sale, compressed into a single managed process. Early access available.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 text-[#FF5722] font-medium">
                            <span className="w-12 h-px bg-[#FF5722]" />
                            Accelerate your GCC entry
                        </div>
                    </motion.div>

                    <motion.div className="relative rounded-2xl bg-[#FF5722] h-full p-10 flex flex-col justify-between text-[#161719]">
                        <div className="text-6xl font-bold leading-none">84%</div>
                        <div>
                            <p className="font-semibold text-xl mb-2">Efficiency Gain</p>
                            <p className="opacity-80">Average reduction in market entry time with Raha Launchpad.</p>
                        </div>
                        <button className="w-full py-4 bg-[#161719] text-white rounded-xl font-medium">
                            Request Beta Access
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
