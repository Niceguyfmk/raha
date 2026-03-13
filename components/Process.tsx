'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { FaArrowRight } from 'react-icons/fa';

const processes = [
    {
        id: '01',
        title: 'Bespoke distribution with a focus on GCC',
        description: 'Building a tailored distribution strategy across the GCC, securing the right retail partners, warehousing, and logistics to get your product into market efficiently.',
    },
    {
        id: '02',
        title: 'Ecommerce, Direct-to-Customer and Digital Presence',
        description: 'Launching and optimizing your digital storefront across Amazon, Noon, and Shopify while establishing a strong brand-led direct-to-consumer presence.',
    },
    {
        id: '03',
        title: 'Digital Marketing and Optimization',
        description: 'Driving growth through localized performance marketing, influencer partnerships, and continuous optimization of customer acquisition and conversion.',
    },
    {
        id: '04',
        title: 'Market Intelligence, Network & Regulation',
        description: 'Navigating GCC regulatory requirements, municipality registrations, and compliant labeling while leveraging local market intelligence and partner networks.',
    }
];

export default function Process() {
    return (
        <section id="process" className="relative bg-bg-section py-20 lg:py-48 px-6 overflow-hidden border-t border-white/5">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    number="003"
                    brandName="Raha x Strategy"
                    title="Raha Playbook"
                    statement="From outside the GCC to dominant within it."
                    description="Our systematic approach to taking a brand into the market and scaling it fast."
                />

                <div className="mt-32 grid grid-cols-1 lg:grid-cols-4 gap-1">
                    {processes.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group bg-bg-card p-10 h-full min-h-[400px] flex flex-col justify-between rounded-xl hover:bg-bg-card-hover transition-colors"
                        >
                            <div className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <span className="text-white/20 text-5xl font-medium tracking-tighter">{step.id}</span>
                                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-orange-main group-hover:text-white group-hover:border-orange-main transition-all">
                                        <FaArrowRight className="-rotate-45" size={14} />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-medium text-white tracking-tight">
                                    {step.title}
                                </h3>
                            </div>

                            <p className="text-text-muted text-lg leading-relaxed max-w-[280px]">
                                {step.description}
                            </p>

                            {/* Decorative line */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5 group-hover:bg-orange-main transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
