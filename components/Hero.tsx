'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCounter from './AnimatedCounter';
import { FaCalendarAlt } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger);

const REVEAL_TEXT = "We handle distribution, marketplace operations, and marketing execution so brands can focus on building great products. Dubai-based. GCC-focused. Operator-led.";

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
                    end: "bottom 95%",
                    scrub: true,
                }
            });

            scrollTl.to(words, {
                // opacity: 1,
                color: 'white',
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
            <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
                <div className="max-w-[1400px] mx-auto w-full z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-20">
                        {/* Left Side - Subtitle */}
                        <div className="hidden lg:col-span-2 lg:flex items-start pt-4">

                        </div>

                        {/* Center - Main Heading */}
                        <div className="col-span-12 lg:col-span-10">
                            <div className="space-y-1 md:space-y-2 overflow-hidden">
                                {['— Build & scale brands across retail & digital ecosystems'].map((line, i) => (
                                    < div key={i} className="overflow-hidden" >
                                        <h1 className="hero-text-line
                                            text-[48px] sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl
                                            font-heading
                                            text-orange-light
                                            font-medium
                                            leading-[135%]
                                            tracking-[-1.5px]
                                            ">
                                            {line}
                                        </h1>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Section */}
                            <div className="mt-20 hero-cta">
                                <div className="md:max-w-2xl flex justify-start">
                                    <div className="flex items-center justify-between md:items-center md:justify-start md:gap-6 w-full">

                                        {/* Left Text */}
                                        <div className="max-w-[250px] md:max-w-md-[230px]">
                                            <h2 className="text-text-dim text-[28px] md:text-3xl font-medium tracking-[-1.12px]">
                                                See it for yourself
                                            </h2>
                                            <p className="mt-3 text-text-muted text-[17px] font-normal tracking-[-0.04em] leading-[1.3]">
                                                Join our guided tour and explore all features live
                                            </p>
                                        </div>

                                        {/* Divider */}
                                        <div className="hidden lg:block h-px w-[80px] bg-white/60" />

                                        {/* Button */}
                                        <motion.a
                                            href="https://calendar.app.google/gWSCEHNpq7X7drDC6"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="inline-flex items-center gap-3 whitespace-nowrap flex-shrink-0
                                             bg-orange-accent hover:bg-orange-hover
                                             text-bg-section
                                             px-5 py-4
                                             rounded-xl
                                             text-base font-medium
                                             transition-all duration-300"
                                        >
                                            <FaCalendarAlt />

                                            <span className="hidden md:inline">Book a Call</span>
                                        </motion.a>

                                    </div>
                                </div>
                            </div>


                            {/* Stats Section */}
                            <div className="mt-16 md:mt-24 flex flex-wrap gap-12 md:gap-16 text-balance">
                                <div className="hero-stats">
                                    <div className="flex items-start gap-2 mb-2">
                                        <span className="text-4xl md:text-5xl font-light text-orange-main"><AnimatedCounter end={15} /></span>
                                        <span className="text-2xl md:text-3xl font-light text-orange-main mt-1">+</span>
                                    </div>
                                    <div className="text-white font-medium text-sm mb-1">Retail & Marketplace Partners</div>
                                    <div className="text-white/50 text-xs">From Carrefour to Amazon</div>
                                </div>

                                <div className="hero-stats">
                                    <div className="flex items-start gap-2 mb-2">
                                        <span className="text-4xl md:text-5xl font-light text-orange-main"><AnimatedCounter end={10} /></span>
                                        <span className="text-2xl md:text-3xl font-light text-orange-main mt-1">+</span>
                                    </div>
                                    <div className="text-white font-medium text-sm mb-1">Countries</div>
                                    <div className="text-white/50 text-xs">Middle East region</div>
                                </div>

                                <div className="hero-stats">
                                    <div className="flex items-start gap-2 mb-2">
                                        <span className="text-4xl md:text-5xl font-light text-orange-main"><AnimatedCounter end={90} /></span>
                                        <span className="text-lg md:text-xl font-light text-orange-main mt-3 ml-1 uppercase">Days</span>
                                    </div>
                                    <div className="text-white font-medium text-sm mb-1">Concept to First Sale</div>
                                    <div className="text-white/50 text-xs text-balance">Average launch timeline</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Part 2: Scroll Reveal (Long Hero Continuation) */}
            < section ref={revealRef} className="relative min-h-lg:[120vh] flex items-center justify-center px-6 md:px-20 py-12 lg:py-32 overflow-hidden" >
                {/* Background Orange Circles (Image 3 Style) */}
                < div className="absolute inset-0 pointer-events-none" >
                    <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full blur-[120px]" />
                    <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full blur-[100px]" />
                </div >

                <div className="max-w-[1200px] mx-auto w-full z-10">
                    <p ref={textRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.25] tracking-[-0.015em] text-white select-none">
                        {REVEAL_TEXT.split(' ').map((word, i) => (
                            <span key={i} className="inline-block">
                                <span className="word text-white/20 transition-colors duration-300">
                                    {word}
                                </span>
                                <span className="inline-block">&nbsp;</span>
                            </span>
                        ))}
                    </p>
                </div>

            </section >
        </div >
    );
}

