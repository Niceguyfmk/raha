'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCounter from './AnimatedCounter';

gsap.registerPlugin(ScrollTrigger);

const REVEAL_TEXT = "We build the experiences, platforms, and growth engines that connect brands with millions of customers — making every interaction meaningful, effortless, and scalable.";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const revealRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        // Initial Entry Animations
        const tl = gsap.timeline({ delay: 0.5 });

        tl.from('.hero-text-line', {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: 'power4.out',
        });

        tl.from('.hero-cta', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
        }, '-=0.5');

        tl.from('.hero-stats', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
        }, '-=0.5');

        tl.from('.hero-subtitle', {
            x: -30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
        }, 0.3);

        // Scroll Reveal Animation
        if (textRef.current && revealRef.current) {
            const words = textRef.current.querySelectorAll('.word');

            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: revealRef.current,
                    start: "top 70%",
                    end: "bottom 40%",
                    scrub: true,
                }
            });

            scrollTl.to(words, {
                // opacity: 1,
                color: '#FFFFFF',
                stagger: 0.08,
                ease: "none"
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div ref={containerRef} className="relative">
            {/* Part 1: Landing */}
            <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
                <div className="max-w-[1400px] mx-auto w-full z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Left Side - Subtitle */}
                        <div className="lg:col-span-3 flex items-start pt-4">
                            <div className="hero-subtitle">
                                <p className="text-white text-sm md:text-base leading-relaxed">
                                    You in<span className="italic">spire</span>,
                                    <br />
                                    we deliver.
                                </p>
                            </div>
                        </div>

                        {/* Center - Main Heading */}
                        <div className="lg:col-span-9">
                            <div className="space-y-1 md:space-y-2 overflow-hidden">
                                {['— We craft the B2C', 'experiences your', 'customers wish they', 'had'].map((line, i) => (
                                    <div key={i} className="overflow-hidden">
                                        <h1 className="  hero-text-line
                                            text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                                            font-semibold
                                            tracking-[-0.01em]
                                            leading-[1.15]
                                            text-[#FF6A3D]
                                            ">
                                            {line}
                                        </h1>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Section */}
                            <div className="mt-20">
                                <div className="max-w-2xl flex justify-left">
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">

                                        {/* Left Text */}
                                        <div className="max-w-md">
                                            <h2 className="text-[#C0C0C0] text-3xl font-medium tracking-[-0.02em]">
                                                Scale your community
                                            </h2>

                                            <p className="mt-3 text-[#888891] text-[1.0625rem] leading-[1.5]">
                                                Explore how we transform consumer brands into market leaders.
                                            </p>
                                        </div>

                                        {/* Divider */}
                                        <div className="hidden lg:block h-px w-16 bg-white/15" />

                                        {/* Button */}
                                        <motion.a
                                            href="#"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="inline-flex items-center gap-3
                                             bg-[#FA6F45] hover:bg-[#E65C35]
                                             text-[#161719]
                                             px-7 py-4
                                             rounded-xl
                                             text-base font-medium
                                             transition-all duration-300"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2 17L12 22L22 17" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2 12L12 17L22 12" stroke="#161719" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                            Start Growing
                                        </motion.a>

                                    </div>
                                </div>
                            </div>


                            {/* Stats Section */}
                            <div className="mt-16 md:mt-24 flex flex-wrap gap-12 md:gap-16">
                                <div className="hero-stats">
                                    <div className="flex items-start gap-2 mb-2">
                                        <AnimatedCounter end={40} duration={2.5} className="text-4xl md:text-5xl font-light text-white" />
                                        <span className="text-2xl md:text-3xl font-light text-[#FF5722] mt-1">%</span>
                                    </div>
                                    <div className="text-white font-medium text-sm mb-1">Retention Rate</div>
                                    <div className="text-white/50 text-xs">Returning customers</div>
                                </div>

                                <div className="hero-stats">
                                    <div className="flex items-start gap-2 mb-2">
                                        <span className="text-4xl md:text-5xl font-light text-[#FF5722]">+</span>
                                        <AnimatedCounter end={300} duration={2.5} className="text-4xl md:text-5xl font-light text-white" />
                                        <span className="text-2xl md:text-3xl font-light text-[#FF5722] mt-1">%</span>
                                    </div>
                                    <div className="text-white font-medium text-sm mb-1">Active Users</div>
                                    <div className="text-white/50 text-xs">Quarterly growth</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Part 2: Scroll Reveal (Long Hero Continuation) */}
            <section ref={revealRef} className="relative min-h-[120vh] flex items-center justify-center px-6 md:px-20 py-32 overflow-hidden">
                {/* Background Orange Circles (Image 3 Style) */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full blur-[120px]" />
                    <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full blur-[100px]" />
                </div>

                <div className="max-w-[1200px] mx-auto w-full z-10">
                    <p ref={textRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.25] tracking-[-0.015em] text-white select-none">
                        {REVEAL_TEXT.split(' ').map((word, i) => (
                            <span key={i} className="inline-block">
                                <span className="word text-white/30 transition-colors duration-300">
                                    {word}
                                </span>
                                <span className="inline-block">&nbsp;</span>
                            </span>
                        ))}
                    </p>
                </div>

            </section>
        </div>
    );
}

