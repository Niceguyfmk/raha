'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="fixed top-8 left-0 right-0 z-50 px-6"
            >
                <div className="flex items-center justify-between max-w-[1800px] mx-auto">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white text-sm md:text-base font-normal tracking-wider"
                    >
                        RahaPartners
                    </motion.div>

                    {/* Hamburger Menu */}
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-50 flex flex-col gap-1.5 group"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={{
                                rotate: isOpen ? 45 : 0,
                                y: isOpen ? 8 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-7 h-0.5 bg-[#FF5722] transition-all"
                        />
                        <motion.span
                            animate={{
                                opacity: isOpen ? 0 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-7 h-0.5 bg-[#FF5722] transition-all"
                        />
                        <motion.span
                            animate={{
                                rotate: isOpen ? -45 : 0,
                                y: isOpen ? -8 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-7 h-0.5 bg-[#FF5722] transition-all"
                        />
                    </motion.button>
                </div>
            </motion.nav>

            {/* Full Screen Menu Overlay */}
            <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    x: isOpen ? 0 : '100%',
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="fixed inset-0 bg-black z-40 flex items-center justify-center"
            >
                <div className="text-center space-y-8">
                    {['Home', 'Our Work', 'Services', 'Process', 'Team', 'Contact'].map(
                        (item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: isOpen ? 1 : 0,
                                    y: isOpen ? 0 : 20,
                                }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                onClick={() => setIsOpen(false)}
                                className="block text-4xl md:text-6xl font-light text-white hover:text-[#FF5722] transition-colors duration-300"
                            >
                                {item}
                            </motion.a>
                        )
                    )}
                </div>
            </motion.div>
        </>
    );
}
