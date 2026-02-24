'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const REVEAL_TEXT = "We manage the strategy, engineering, and operations behind intelligent systems — so your team can focus on growth, not complexity.";

export default function ScrollReveal() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!textRef.current || !containerRef.current) return;

        const words = textRef.current.querySelectorAll('.word');

        // Create the scroll animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%", // Start when the section enters the bottom of the screen
                end: "bottom 20%", // End when it's near the top
                scrub: true, // Smoothly link animation to scroll
            }
        });

        // Animate each word from low opacity to full white/orange
        tl.to(words, {
            opacity: 1,
            color: (index) => {
                const wordText = words[index].textContent?.toLowerCase() || '';
                // Highlighting logic
                const orangeWords = ['strategy,', 'engineering,', 'operations', 'intelligent', 'can', 'focus', 'growth,'];
                return orangeWords.some(w => wordText.includes(w)) ? '#FF5722' : '#e3dbd8';
            },
            stagger: 0.1,
            ease: "none"
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen py-32 md:py-64 px-6 md:px-20 flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Enhanced Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Large soft glows */}
                <div className="absolute top-1/4 right-[15%] w-[400px] h-[400px] bg-[#FF5722]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-1/4 left-[10%] w-[500px] h-[500px] bg-[#FF5722]/5 rounded-full blur-[150px] mix-blend-screen" />

                {/* Floating 3D-like geometric mesh fragments (simulated with SVG blobs) */}
                <div className="absolute top-[20%] right-[10%] w-64 h-64 opacity-20 rotate-12 transition-transform duration-[10s] animate-pulse">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FF5722" d="M44.7,-76.4C58.2,-69.2,70,-58.5,77.7,-45.8C85.4,-33.1,89,-18.5,87.6,-4.2C86.1,10.1,79.5,24.1,71.2,36.9C62.9,49.7,52.8,61.4,40.4,68C28,74.7,13.3,76.2,-0.9,77.8C-15.1,79.4,-30.2,81.1,-43.3,75.4C-56.4,69.7,-67.5,56.6,-74.6,42.4C-81.7,28.2,-84.8,12.9,-83.4,-1.8C-82,-16.5,-76.1,-30.6,-67.2,-42.6C-58.3,-54.6,-46.4,-64.5,-33.4,-72.1C-20.4,-79.7,-6.3,-84.9,7.9,-86.3C22.1,-87.7,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
                    </svg>
                </div>
                <div className="absolute bottom-[10%] left-[5%] w-80 h-80 opacity-10 -rotate-12 translate-y-4 transition-transform duration-[8s] animate-pulse">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FF5722" d="M36.1,-63.1C47.2,-55.4,56.9,-44.7,64.2,-32.4C71.5,-20.1,76.4,-6.2,74.4,6.7C72.3,19.5,63.4,31.2,53.2,40.8C43.1,50.3,31.7,57.7,19.4,61.8C7.1,65.8,-6,66.6,-19.1,63.4C-32.2,60.2,-45.3,53.1,-55.1,42.5C-64.8,31.9,-71.2,17.9,-72.2,3.3C-73.2,-11.2,-68.8,-26.4,-59.8,-38.4C-50.8,-50.4,-37.2,-59.2,-23.9,-64.3C-10.6,-69.5,2.4,-71,15.6,-69.1C28.8,-67.2,36.1,-63.1,36.1,-63.1Z" transform="translate(100 100)" />
                    </svg>
                </div>
            </div>

            <div className="max-w-6xl w-full z-10">
                <p
                    ref={textRef}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight select-none"
                >
                    {REVEAL_TEXT.split(' ').map((word, i) => (
                        <span key={i} className="inline-block">
                            <span
                                className="word opacity-20 text-white transition-colors duration-300"
                                style={{ willChange: 'opacity, color' }}
                            >
                                {word}
                            </span>
                            <span className="inline-block">&nbsp;</span>
                        </span>
                    ))}
                </p>
            </div>
        </section>
    );
}
