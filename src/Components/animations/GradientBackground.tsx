"use client";

import React from "react";

/**
 * Flat poster backdrop: a halftone dot field fading from the top, a huge
 * red disc bleeding off the right edge, and an outlined ring — all static
 * print-style shapes rather than blurred glows.
 */
const GradientBackground = (): React.ReactElement => {
    return (
        <div
            className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
            aria-hidden="true"
        >
            {/* Halftone dot field */}
            <div
                className="absolute inset-0 opacity-[0.35] dark:opacity-[0.22]"
                style={{
                    backgroundImage:
                        "radial-gradient(color-mix(in srgb, var(--color-ink) 26%, transparent) 1.2px, transparent 1.2px)",
                    backgroundSize: "22px 22px",
                    maskImage:
                        "radial-gradient(ellipse 85% 55% at 50% 0%, black 20%, transparent 72%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 85% 55% at 50% 0%, black 20%, transparent 72%)",
                }}
            />

            {/* Big flat red disc bleeding off the top right */}
            <div className="absolute -top-48 right-[-14%] w-[560px] h-[560px] rounded-full bg-accent opacity-[0.09] dark:opacity-[0.13]" />

            {/* Outlined ring, bottom left */}
            <div className="absolute bottom-[-8%] -left-24 w-[380px] h-[380px] rounded-full border-[3px] border-accent opacity-[0.14] dark:opacity-[0.18]" />

            {/* Small solid red dot, mid left */}
            <div className="absolute top-[38%] left-[6%] w-4 h-4 rounded-full bg-accent opacity-25 hidden md:block" />

            {/* Rotating star, upper right */}
            <svg
                viewBox="0 0 24 24"
                className="absolute top-[22%] right-[8%] w-10 h-10 text-accent opacity-30 hidden md:block"
                style={{ animation: "spin-slow 24s linear infinite" }}
                fill="currentColor"
            >
                <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6L12 0z" />
            </svg>
        </div>
    );
};

export default GradientBackground;
