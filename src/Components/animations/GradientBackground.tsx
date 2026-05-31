"use client";

import React from "react";
import { motion } from "motion/react";

const GradientBackground = (): React.ReactElement => {
    return (
        <div
            className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
            aria-hidden="true"
        >
            {/* Soft dotted grid for depth */}
            <div
                className="absolute inset-0 opacity-[0.3] dark:opacity-[0.2]"
                style={{
                    backgroundImage:
                        "radial-gradient(color-mix(in srgb, var(--color-accent) 18%, transparent) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                    maskImage:
                        "radial-gradient(ellipse 80% 55% at 50% 0%, black 25%, transparent 70%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 80% 55% at 50% 0%, black 25%, transparent 70%)",
                }}
            />

            {/* Amber glow — top right */}
            <motion.div
                className="absolute -top-40 right-[-10%] w-[520px] h-[520px] rounded-full bg-highlight/20 dark:bg-highlight/15 blur-[140px]"
                animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Coral glow — center left */}
            <motion.div
                className="absolute top-1/3 -left-40 w-[460px] h-[460px] rounded-full bg-accent-muted/20 dark:bg-accent-muted/14 blur-[130px]"
                animate={{ x: [0, -30, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Violet glow — bottom right */}
            <motion.div
                className="absolute bottom-[-10%] right-1/4 w-[420px] h-[420px] rounded-full bg-accent-2/16 dark:bg-accent-2/14 blur-[130px]"
                animate={{ x: [0, 30, 0], y: [0, -28, 0], scale: [1, 1.09, 1] }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
};

export default GradientBackground;
