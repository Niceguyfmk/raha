'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}

export default function AnimatedCounter({
    end,
    duration = 2,
    prefix = '',
    suffix = '',
    className = '',
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (isInView && !hasAnimated.current) {
            hasAnimated.current = true;
            const startTime = Date.now();
            const endTime = startTime + duration * 1000;

            const updateCount = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / (endTime - startTime), 1);

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentCount = Math.floor(easeOutQuart * end);

                setCount(currentCount);

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    setCount(end);
                }
            };

            requestAnimationFrame(updateCount);
        }
    }, [isInView, end, duration]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {count}
            {suffix}
        </span>
    );
}
