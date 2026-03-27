'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

import { FaBox, FaChartLine, FaBullhorn, FaFingerprint, FaArrowDown } from 'react-icons/fa';

const services = [
    {
        id: '01',
        title: 'Bespoke distribution with a focus on GCC',
        shortTitle: 'Amazon, Noon & Retail',
        description: 'Building a tailored distribution strategy across the GCC, securing the right retail partners, warehousing, and logistics to get your product into market efficiently.',
        icon: <FaBox size={32} />
    },
    {
        id: '02',
        title: 'Ecommerce, Direct-to-Customer and Digital Presence',
        shortTitle: 'Clearance & Logistics',
        description: 'Launching and optimizing your digital storefront across Amazon, Noon, and Shopify while establishing a strong brand-led direct-to-consumer presence.',
        icon: <FaChartLine size={32} />
    },
    {
        id: '03',
        title: 'Digital Marketing and Optimization',
        shortTitle: 'Performance & PR',
        description: 'Driving growth through localized performance marketing, influencer partnerships, and continuous optimization of customer acquisition and conversion.',
        icon: <FaBullhorn size={32} />
    },
    {
        id: '04',
        title: 'Market Intelligence, Network & Regulation',
        shortTitle: 'Intel & Regulation',
        description: 'Navigating GCC regulatory requirements, municipality registrations, and compliant labeling while leveraging local market intelligence and partner networks.',
        icon: <FaFingerprint size={32} />
    }
];

// Component for a single column of dots that oscillates
const OscillatingColumn = ({ delay = 0 }) => {
    // We animate the active index from 0 to 3 to 0
    // Using simple state interval for robustness as "game loop"
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 = down, -1 = up

    useEffect(() => {
        // Initial offset delay
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                setActiveIndex(prev => {
                    let next = prev + direction;
                    if (next >= 4) {
                        setDirection(-1);
                        return 2;
                    }
                    if (next < 0) {
                        setDirection(1);
                        return 1;
                    }
                    return next; // But wait, direction state inside interval closure is stale!
                    // Fix: Functional update logic logic handles logic, but separate state 'direction' is tricky in interval.
                });
            }, 600); // Speed of bounce
            return () => clearInterval(interval);
        }, delay * 1000); // Start delay

        return () => clearTimeout(timer);
    }, [delay, direction]); // Adding direction to dependency breaks typical interval. 

    // Better Approach: Pure CSS Keyframes or Framer loop for values 0,1,2,3,2,1
    // Let's use Framer Motion on the *column* wrapper? No, individual dots need color.

    return (
        <div className="flex flex-col gap-12">
            {[0, 1, 2, 3].map(row => (
                <Dot key={row} row={row} columnDelay={delay} />
            ))}
        </div>
    );
};

// Simplified Dot that knows its timing based on column delay
const Dot = ({ row, columnDelay }: { row: number, columnDelay: number }) => {
    return (
        <motion.div
            className="w-1.5 h-1.5 rounded-full"
            animate={{
                backgroundColor: [
                    "rgba(255, 255, 255, 0.2)", // Start Inactive
                    "rgba(255, 255, 255, 0.2)",
                    "rgba(255, 255, 255, 0.2)",
                    "#FF5722",                  // Active Color
                    "rgba(255, 255, 255, 0.2)",
                    "rgba(255, 255, 255, 0.2)",
                    "rgba(255, 255, 255, 0.2)"
                ]
            }}
            transition={{
                duration: 4, // Total loop time for one up-down cycle
                ease: "linear",
                repeat: Infinity,
                // The magic timing:
                // We want the "Pulse" to hit this row at specific times.
                // Cycle: 0->1->2->3->2->1->0
                // Time map:
                // Row 0: t=0, t=6
                // Row 1: t=1, t=5 
                // Row 2: t=2, t=4
                // Row 3: t=3
                // This is hard to map to a simple keyframe array unless we hand-craft delays.

                // Let's try offset delay based purely on Row + Col logic?
                // Actually, simple sine wave opacity might look indistinguishable and better?
                // "Bounce" implies sharp movement.

                // Let's try standard keyframes with specific prompt logic match.
                // delay = columnDelay - (row * step)?
                // delay = columnDelay + timeToReachRow.

                // Let's go with a simpler visual approximation that looks great:
                // Just use staggered sine wave opacity, constrained to "active" threshold.
                times: [0, 0.1, 0.2, 0.5, 0.8, 0.9, 1], // Just placeholders
                repeatDelay: 0
            }}
        // RE-ATTEMPT with smart variants to ensure "bouncing" feel.
        // Actually, simply animate based on a prop passed from parent is cleaner.
        />
    )
}

// 3rd attempt at logic: Component with explicit state is easiest for tight control
const BouncingColumn = ({ colIndex }: { colIndex: number }) => {
    const [activeRow, setActiveRow] = useState(0);

    useEffect(() => {
        // Start phase based on column
        let currentRow = 0;
        let direction = 1;

        // Sync start? Stagger start.
        const stagger = colIndex * 300; // 300ms delay per column

        const intervalId = setInterval(() => {
            // Logic to bounce 0 -> 3 -> 0
            if (currentRow >= 3) direction = -1;
            if (currentRow <= 0) direction = 1;
            currentRow += direction;
            setActiveRow(currentRow);
        }, 400); // 400ms per step

        // We need to offset the *start* of this interval loop.
        // JS intervals drift, but for visual UI it's fine.
        // We actually want them to be *out of phase*.
        // Col 0 starts at Row 0. Col 1 starts at Row 0 later?
        // Let's manually set initial Row based on colIndex to create "Diagonal".
        // If Wave moves Top-Left to Bottom-Right:
        // Col 0 starts at Row 0.
        // Col 1 starts at Row -1 (waits).

        return () => clearInterval(intervalId);
    }, [colIndex]);

    // Actually, simple CSS animation with `animation-delay` is best for performance and sync.
    // Let's use a Keyframe style for the backgroundColor.
    return (
        <div className="flex flex-col gap-12">
            {[0, 1, 2, 3].map(row => (
                <div
                    key={row}
                    className="w-1.5 h-1.5 rounded-full bg-white/20 transition-colors duration-500"
                    style={{
                        // We manually drive animation via a global CSS class we inject or inline styles?
                        animation: `pingPongHighlight 2.4s infinite`, // 0.4s * 6 steps = 2.4s
                        animationDelay: `${(colIndex * 0.4) + (row * 0.4)}s` // This is linear wave, not bounce.
                        // Bounce logic:
                        // Row 0 active at 0s, 2.4s
                        // Row 1 active at 0.4s, 2.0s
                        // Row 2 active at 0.8s, 1.6s
                        // Row 3 active at 1.2s
                        // This requires specific delays per row.
                    }}
                >
                    {/* We need distinct animation delays per row to simulate the bounce */}
                    <style jsx>{`
                        @keyframes pingPongHighlight {
                            0%, 100% { background-color: rgba(255,255,255,0.2); }
                            10% { background-color: var(--orange-main); }
                            20% { background-color: rgba(255,255,255,0.2); }
                        }
                    `}</style>
                </div>
            ))}
        </div>
    )
}

// 4th Final attempt: Pre-calculated delays for the Bounce Pattern logic.
// We want the "Active Highlight" to travel 0->1->2->3->2->1->0.
// Step duration = S = 0.4s.
// Cycle Time = 6S = 2.4s.
// Row 0 highlight times: 0
// Row 1 highlight times: 1S (0.4s), 5S (2.0s)
// Row 2 highlight times: 2S (0.8s), 4S (1.6s)
// Row 3 highlight times: 3S (1.2s)
// We need each Row to have its own Keyframe that peaks at those times?
// OR just distinct delay.
// Column Offset: Each column `c` starts `c * S` later.

const BouncingDots = () => {
    return (
        <div className="flex-1 min-h-[160px] flex items-center justify-center py-8">
            <style jsx global>{`
                @keyframes bounceColor0 {
                    0%, 16% { background-color: var(--orange-main); } /* Active at start */
                    33% { background-color: rgba(255,255,255,0.2); }
                    83% { background-color: rgba(255,255,255,0.2); }
                    100% { background-color: var(--orange-main); } /* Back to active */
                }
                @keyframes bounceColor1 {
                    0% { background-color: rgba(255,255,255,0.2); }
                    16%, 33% { background-color: var(--orange-main); } /* Active at 1/6 */
                    50% { background-color: rgba(255,255,255,0.2); }
                    83%, 100% { background-color: var(--orange-main); } /* Active at 5/6 (Back up) */
                    /* Wait, simple linear bounce means distinct keyframes per row */
                }
                /* Let's simplify: A generic "ActivePulse" animation. We delay it. */
                @keyframes activePulse {
                    0% { background-color: rgba(255,255,255,0.2); }
                    5% { background-color: var(--orange-main); transform: scale(1.2); }
                    10% { background-color: rgba(255,255,255,0.2); transform: scale(1); }
                    100% { background-color: rgba(255,255,255,0.2); }
                }
            `}</style>

            <div className="grid grid-cols-5 gap-x-12 gap-y-12 h-full">
                {[0, 1, 2, 3, 4].map(col => (
                    <div key={col} className="flex flex-col justify-between h-full gap-12">
                        {[0, 1, 2, 3, 4].map(row => {
                            // Cycle for 5 rows: 0->1->2->3->4->3->2->1->0
                            // Length: 8 beats
                            const beatDuration = 0.3;
                            const cycleBeats = 8;
                            const totalDuration = cycleBeats * beatDuration;

                            // 9 keyframes for 8 segments (0 to 8) to complete the loop
                            // 0 -> 1/8 -> 2/8 ... -> 8/8
                            const keyframes = [
                                "rgba(255,255,255,0.2)", // 0
                                "rgba(255,255,255,0.2)", // 1
                                "rgba(255,255,255,0.2)", // 2
                                "rgba(255,255,255,0.2)", // 3
                                "rgba(255,255,255,0.2)", // 4
                                "rgba(255,255,255,0.2)", // 5
                                "rgba(255,255,255,0.2)", // 6
                                "rgba(255,255,255,0.2)", // 7
                                "rgba(255,255,255,0.2)"  // 8
                            ];

                            // Active states logic:
                            // Row 0: Active at beat 0 and beat 8
                            if (row === 0) { keyframes[0] = "var(--orange-main)"; keyframes[8] = "var(--orange-main)"; }
                            // Row 1: Active at beat 1 and beat 7
                            if (row === 1) { keyframes[1] = "var(--orange-main)"; keyframes[7] = "var(--orange-main)"; }
                            // Row 2: Active at beat 2 and beat 6
                            if (row === 2) { keyframes[2] = "var(--orange-main)"; keyframes[6] = "var(--orange-main)"; }
                            // Row 3: Active at beat 3 and beat 5
                            if (row === 3) { keyframes[3] = "var(--orange-main)"; keyframes[5] = "var(--orange-main)"; }
                            // Row 4: Active at beat 4 (center of wave)
                            if (row === 4) { keyframes[4] = "var(--orange-main)"; }

                            return (
                                <motion.div
                                    key={row}
                                    className="w-1.5 h-1.5 rounded-full"
                                    animate={{ backgroundColor: keyframes }}
                                    transition={{
                                        duration: totalDuration,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: col * beatDuration // Stagger columns
                                    }}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function ServicesGrid() {
    const [activeId, setActiveId] = useState('01');
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const checkLayout = () => {
            setIsDesktop(window.innerWidth >= 1200);
        };
        checkLayout();
        window.addEventListener('resize', checkLayout);
        return () => window.removeEventListener('resize', checkLayout);
    }, []);

    return (
        <div className="w-full flex flex-col xl:flex-row gap-1 xl:h-[800px]">
            {/* Summary Card (Info) */}
            <motion.div
                layout
                className={`relative rounded-xl bg-bg-card p-8 flex flex-col justify-between flex-shrink-0 
                            order-1 xl:order-last xl:flex-[4.5] xl:w-auto mb-1 xl:mb-0
                            w-full h-auto min-h-0
                            `}
            >
                <div> {/* Wrapper for top content to separate from Footer and Grid */}
                    <div className="flex justify-between items-center text-white/40 text-sm tracking-wide border-b border-white/10 pb-6 mb-4 xl:mb-8">
                        <span>Capabilities</span>
                        <span>3/3</span>
                    </div>

                    <div className="space-y-4 xl:space-y-6 mb-8">
                        <h2 className="text-3xl md:text-[48px] font-medium text-text-dim leading-[1.1] tracking-[-0.05em] text-balance">
                            Everything you need to win in the GCC
                        </h2>
                        <p className="text-text-muted text-md leading-relaxed max-w-md">
                            We provide the operational muscle, market expertise, and digital infrastructure to turn your brand into a local market leader.
                        </p>
                    </div>
                </div>

                <BouncingDots />

                {/* Footer */}
                <div className="flex items-center gap-4 text-white/40 pt-6 border-t border-white/10 mt-6">
                    <div className="grid grid-cols-3 gap-0.5">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className={`w-1 h-1 ${i % 2 === 0 ? 'bg-orange-main' : 'bg-white/20'}`} />
                        ))}
                    </div>
                    <span className="text-sm font-medium tracking-wide">Marketplace, Logistics, and Growth at scale.</span>
                </div>
            </motion.div>

            {/* Services List (Unchanged content logic, just preserving structure) */}
            <div className="contents">
                {services.map((service) => {
                    const isActive = activeId === service.id;
                    return (
                        <motion.div
                            key={service.id}
                            layout
                            onClick={() => setActiveId(service.id)}
                            className={`relative rounded-xl overflow-hidden cursor-pointer select-none group flex-shrink-0 flex flex-col justify-between p-8 transition-colors duration-500 ease-in-out order-2
                                ${isActive ? 'bg-orange-main' : 'bg-bg-card hover:bg-bg-card-hover'}
                                w-full xl:w-auto mb-1 xl:mb-0
                            `}
                            animate={{
                                flex: isDesktop ? (isActive ? 3.5 : 1) : 'unset',
                                height: isDesktop ? '100%' : (isActive ? 500 : 100) // Keep vertical accordion
                            }}
                            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <div className="flex flex-col gap-6">
                                <div className={`flex items-center gap-4 transition-colors pb-6 border-b border-white/10 ${isActive ? 'text-[#e3dbd8]' : 'text-white/50 group-hover:text-white'}`}>
                                    <div className="flex-shrink-0 w-[48px] h-[48px] flex items-center justify-center">
                                        <div className={`transform transition-all duration-300 flex items-center justify-center ${isActive ? '-rotate-[135deg] w-[48px] h-[48px]' : 'group-hover:-rotate-[135deg] w-[36px] h-[36px]'}`}>
                                            <FaArrowDown className="w-full h-full" />
                                        </div>
                                    </div>
                                    <span className={`font-light tracking-tight leading-none transition-all duration-300 ${isActive ? 'text-[70px] text-dot-color' : 'text-[35px]'}`}>
                                        {service.id}
                                    </span>
                                </div>
                                <AnimatePresence mode="popLayout">
                                    {(isActive || !isDesktop) && (
                                        <motion.div
                                            initial={false}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="space-y-4"
                                            transition={{ duration: 0.4 }}
                                        >
                                            <div className={`${!isActive && !isDesktop ? 'flex items-center justify-between' : ''}`}>
                                                <h3 className={`font-medium text-white leading-tight ${isActive ? 'text-3xl' : 'text-xl'}`}>
                                                    {service.title}
                                                </h3>
                                            </div>
                                            {isActive && (
                                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/90 leading-relaxed text-[1.0625rem] max-w-sm">
                                                    {service.description}
                                                </motion.p>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <div className="mt-auto">
                                <motion.div className={`flex flex-col gap-3 ${isActive ? 'text-white' : 'text-white/40'}`} layout style={{ opacity: (!isActive && !isDesktop) ? 0 : 1 }}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col items-start w-full">
                                            <div className="flex-shrink-0 flex items-center justify-center">
                                                {service.icon}
                                            </div>
                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <span className="font-medium text-lg tracking-wide whitespace-nowrap block mt-3">
                                                            {service.shortTitle}
                                                        </span>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
