'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    delay?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}

export default function AnimatedCounter({
    end,
    duration = 2,
    delay = 2,
    prefix = '',
    suffix = '',
    className = '',
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const hasAnimated = useRef(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (isInView && !hasAnimated.current) {
            hasAnimated.current = true;

            timeout = setTimeout(() => {
                const startTime = Date.now();
                const durationMs = duration * 1000;
                const endTime = startTime + durationMs;

                const updateCount = () => {
                    const now = Date.now();
                    const elapsed = now - startTime;
                    const progress = Math.min(elapsed / durationMs, 1);

                    // Easing function for smooth animation
                    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                    const currentCount = Math.round(easeOutQuart * end);

                    setCount(currentCount);

                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    } else {
                        setCount(end);
                    }
                };

                requestAnimationFrame(updateCount);
            }, delay * 1000);
        }

        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [isInView, end, duration, delay]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {count}
            {suffix}
        </span>
    );
}
