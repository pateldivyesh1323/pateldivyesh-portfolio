"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

type FadeInProps = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
};

const offsets = {
    up: { y: 28, x: 0 },
    down: { y: -28, x: 0 },
    left: { x: 28, y: 0 },
    right: { x: -28, y: 0 },
    none: { x: 0, y: 0 },
};

const FadeIn = ({
    children,
    delay = 0,
    className = "",
    direction = "up",
}: FadeInProps): React.ReactElement => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const offset = offsets[direction];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...offset }}
            animate={
                isInView
                    ? { opacity: 1, x: 0, y: 0 }
                    : { opacity: 0, ...offset }
            }
            transition={{
                duration: 0.55,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
