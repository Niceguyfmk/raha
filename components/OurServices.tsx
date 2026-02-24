'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import ServicesGrid from './ServicesGrid';

export default function OurServices() {
    return (
        <section className="relative bg-[#161719] pt-24 pb-48 px-6 overflow-hidden border-t border-white/5">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    number="002"
                    brandName="Raha x Brands"
                    title="Our Services"
                    statement="Strategic solutions for building modern consumer digital platforms."
                    description="Future-proof experiences that scale seamlessly."
                />

                <ServicesGrid />

            </div>
        </section>
    );
}
