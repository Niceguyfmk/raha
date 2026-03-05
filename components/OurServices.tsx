'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import ServicesGrid from './ServicesGrid';

export default function OurServices() {
    return (
        <section id="services" className="relative bg-[#161719] pt-24 pb-48 px-6 overflow-hidden border-t border-white/5">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    number="003"
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
