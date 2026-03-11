'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
    /** Large section number (e.g., "001", "002") */
    number: string;
    /** Brand or company name */
    brandName: string;
    /** Main section title */
    title: string;
    /** Center column statement/description */
    statement: string;
    /** Right column description */
    description: string;
}

export default function SectionHeader({
    number,
    brandName,
    title,
    statement,
    description
}: SectionHeaderProps) {
    return (
        <>
            <div className="mb-20">
                {/* Section Heading - Reduced bottom margin for closer connection */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 md:mb-10 lg:mb-14"
                >
                    <h2 className="text-5xl md:text-8xl lg:text-[6.875rem] font-medium tracking-[-0.05em] leading-[0.9] text-muted">
                        {title}
                    </h2>
                </motion.div>

                {/* Content Container */}
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">

                    {/* Info Block: Number, Brand, Bar, Statement */}
                    <div className="flex flex-row lg:col-span-9 gap-4 md:gap-8 lg:gap-10 w-full">

                        {/* Left: Project Info (Compact on mobile) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col justify-start min-w-[70px] md:min-w-[120px] lg:col-span-2 pt-2"
                        >
                            <span className="block text-white text-lg md:text-2xl font-light tracking-widest leading-none">{number}</span>
                            <span className="block text-white text-[9px] md:text-xs font-bold tracking-[0.2em] uppercase opacity-80 mt-2 leading-tight">
                                {brandName}
                            </span>
                        </motion.div>

                        {/* Statement Area with Bar */}
                        <div className="flex gap-4 md:gap-6 lg:gap-10 flex-1">
                            {/* Orange Bar - Adjusted height and placement */}
                            <div className="w-[2px] h-auto min-h-[50px] bg-orange-main shrink-0 mt-1" />

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="flex flex-col gap-6 md:gap-8"
                            >
                                <h3 className="font-inter text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-0.05em] leading-[1.15] text-warm text-balance max-w-4xl">
                                    {statement}
                                </h3>

                                {/* Mobile/Tablet Description (Aligned with statement) */}
                                <p className="lg:hidden text-muted text-[1.0625rem] leading-[1.44] tracking-tight max-w-[24rem]">
                                    {description}
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Desktop: Right Column Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden lg:flex lg:col-span-3 lg:justify-end lg:pt-2"
                    >
                        <p className="text-muted text-[1rem] leading-[1.3] max-w-[11.4375rem] tracking-tight text-right">
                            {description}
                        </p>
                    </motion.div>

                </div>
            </div>
        </>
    );
}
