"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    /** Tailwind bg class for the wipe panel. */
    panel?: string;
};

/**
 * Scroll reveal with a solid "curtain" that swipes upward off the section,
 * uncovering the content beneath it. Reads as a poster-style background wipe.
 */
const Reveal = ({
    children,
    className = "",
    delay = 0,
    panel = "bg-accent",
}: RevealProps): React.ReactElement => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-90px" });

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: 44 }}
                animate={inView ? { y: 0 } : { y: 44 }}
                transition={{
                    duration: 0.7,
                    delay: delay + 0.12,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                {children}
            </motion.div>

            {/* Curtain that wipes up to reveal the content */}
            <motion.div
                aria-hidden
                className={`pointer-events-none absolute inset-0 z-20 origin-top ${panel}`}
                initial={{ scaleY: 1 }}
                animate={inView ? { scaleY: 0 } : { scaleY: 1 }}
                transition={{
                    duration: 0.6,
                    delay,
                    ease: [0.7, 0, 0.2, 1],
                }}
            />
        </div>
    );
};

export default Reveal;
