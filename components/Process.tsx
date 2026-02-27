'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { FaArrowRight } from 'react-icons/fa';

const processes = [
    {
        id: '01',
        title: 'Deep Discovery',
        description: 'We dive into consumer behavior and market data to identify untapped opportunities for your brand.',
    },
    {
        id: '02',
        title: 'Strategic Build',
        description: 'Design and engineering concentrated on lead generation and high-conversion user journeys.',
    },
    {
        id: '03',
        title: 'Multi-Channel Launch',
        description: 'Deploying across D2C, marketplaces, and offline retail for maximum market penetration.',
    },
    {
        id: '04',
        title: 'Data-Driven Growth',
        description: 'Continuous optimization and feedback loops to maximize retention and customer lifetime value.',
    }
];

export default function Process() {
    return (
        <section id="process" className="relative bg-[#161719] py-48 px-6 overflow-hidden border-t border-white/5">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    number="003"
                    brandName="Raha x Strategy"
                    title="Our Process"
                    statement="From behavior analysis to global scale — how we drive results."
                    description="A systematic methodology designed to achieve your business objectives."
                />

                <div className="mt-32 grid grid-cols-1 lg:grid-cols-4 gap-1">
                    {processes.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group bg-[#1C1D20] p-10 h-full min-h-[400px] flex flex-col justify-between rounded-xl hover:bg-[#252629] transition-colors"
                        >
                            <div className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <span className="text-white/20 text-5xl font-medium tracking-tighter">{step.id}</span>
                                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-[#FF5722] group-hover:text-white group-hover:border-[#FF5722] transition-all">
                                        <FaArrowRight className="-rotate-45" size={14} />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-medium text-white tracking-tight">
                                    {step.title}
                                </h3>
                            </div>

                            <p className="text-[#888891] text-lg leading-relaxed max-w-[280px]">
                                {step.description}
                            </p>

                            {/* Decorative line */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5 group-hover:bg-[#FF5722] transition-colors" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Summary / Flow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 text-center"
                >
                    <div className="flex flex-col items-center gap-4">
                        <span className="text-white/40 text-xs uppercase tracking-[0.2em]">Objective</span>
                        <span className="text-2xl text-white font-medium">Growth Engine</span>
                    </div>
                    <div className="hidden lg:block w-32 h-[1px] bg-white/10" />
                    <div className="flex flex-col items-center gap-4">
                        <span className="text-white/40 text-xs uppercase tracking-[0.2em]">Strategy</span>
                        <span className="text-2xl text-white font-medium">Market Dominance</span>
                    </div>
                    <div className="hidden lg:block w-32 h-[1px] bg-white/10" />
                    <div className="flex flex-col items-center gap-4">
                        <span className="text-white/40 text-xs uppercase tracking-[0.2em]">Outcome</span>
                        <span className="text-2xl text-[#FF5722] font-medium">Maximized Revenue</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
