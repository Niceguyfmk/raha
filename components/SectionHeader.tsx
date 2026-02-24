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
            {/* Section Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className=""
            >
                <h2 className="text-[6.875rem] font-medium tracking-[-0.05em] leading-[0.9] text-[#888891]">
                    {title}
                </h2>
            </motion.div>

            {/* Project Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start py-30">

                {/* Left: Project Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-2 flex items-start gap-4 w-[9rem] h-16"
                >
                    <div className="w-[2px] h-full bg-[#FF5722]" />
                    <div className="flex flex-col justify-between h-full">
                        <span className="block text-white text-xl font-light tracking-widest">{number}</span>
                        <span className="block text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase opacity-80">
                            {brandName}
                        </span>
                    </div>
                </motion.div>

                {/* Center: Main Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="lg:col-span-7"
                >
                    <p className="font-inter text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.05em] leading-[1.1] text-[#dfd9d7] text-balance max-w-4xl">
                        {statement}
                    </p>

                </motion.div>

                {/* Right: Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="lg:col-span-3 flex justify-end"
                >
                    <p className="text-[#888891] text-[1rem] leading-[1.2] max-w-[11.4375rem] tracking-tighter">
                        {description}
                    </p>
                </motion.div>

            </div>
        </>
    );
}
