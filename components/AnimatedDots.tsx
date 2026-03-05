'use client';
import { motion } from 'framer-motion';

{/* Animated Dot Section */ }
<div className="relative mt-12 flex justify-center">

    <div className="relative w-full max-w-[420px] h-[220px] sm:h-[240px] lg:h-[272px] overflow-hidden">

        {/* Layer 1 */}
        <motion.div
            className="absolute inset-0 grid grid-cols-6 sm:grid-cols-7 lg:grid-cols-8 gap-6 place-items-center"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
            {[...Array(48)].map((_, i) => (
                <div
                    key={`base-${i}`}
                    className="w-[6px] h-[6px] rounded-full bg-white/40"
                />
            ))}
        </motion.div>

        {/* Layer 2 (reverse drift) */}
        <motion.div
            className="absolute inset-0 grid grid-cols-6 sm:grid-cols-7 lg:grid-cols-8 gap-6 place-items-center rotate-180"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        >
            {[...Array(48)].map((_, i) => (
                <div
                    key={`reverse-${i}`}
                    className="w-[6px] h-[6px] rounded-full bg-white/25"
                />
            ))}
        </motion.div>

    </div>
</div>