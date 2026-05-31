"use client";

import React from "react";
import { motion } from "motion/react";

const GradientBackground = (): React.ReactElement => {
    return (
        <div
            className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
            aria-hidden="true"
        >
            <motion.div
                className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full bg-accent/25 blur-[120px]"
                animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.05, 1] }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-1/3 -left-32 w-[420px] h-[420px] rounded-full bg-accent-muted/20 blur-[100px]"
                animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.08, 1] }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-0 right-1/4 w-[360px] h-[360px] rounded-full bg-highlight/15 blur-[100px]"
                animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
};

export default GradientBackground;
