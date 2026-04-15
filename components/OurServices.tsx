'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import ServicesGrid from './ServicesGrid';

export default function OurServices() {
    return (
        <section id="services" className="relative bg-bg-section pt-0 pb-20 lg:pt-0 lg:pb-24 px-6 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    number="002"
                    brandName="Raha x Brands"
                    title="Everything you need to win in the GCC"
                    statement="Operational muscle. Market expertise. Digital infrastructure."
                    description="We turn your brand into a local market leader with end-to-end execution."
                />

                <ServicesGrid />

            </div>
        </section>
    );
}
