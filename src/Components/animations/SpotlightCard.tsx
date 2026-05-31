"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";

type SpotlightCardProps = {
    children: React.ReactNode;
    className?: string;
    /** Lift distance on hover, in px. */
    lift?: number;
    /** Tint strength of the cursor spotlight (0–100). */
    intensity?: number;
};

/**
 * A glass card that grows a gradient border on hover and follows the cursor
 * with a soft warm spotlight. Overlays are absolutely positioned and
 * pointer-events-none, so they never disturb the consumer's layout.
 */
const SpotlightCard = ({
    children,
    className = "",
    lift = 3,
    intensity = 11,
}: SpotlightCardProps): React.ReactElement => {
    const ref = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState({ x: -200, y: -200 });
    const [hover, setHover] = useState(false);

    const handleMove = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            whileHover={{ y: -lift }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`group relative overflow-hidden rounded-2xl border border-border bg-surface/80 backdrop-blur-sm ${className}`}
        >
            {children}

            {/* Gradient border that fades in on hover */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    padding: "1px",
                    background:
                        "linear-gradient(130deg, var(--color-highlight), var(--color-accent), var(--color-accent-muted), var(--color-accent-2))",
                    WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                }}
            />

            {/* Cursor-following spotlight */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    opacity: hover ? 1 : 0,
                    background: `radial-gradient(340px circle at ${pos.x}px ${pos.y}px, color-mix(in srgb, var(--color-accent) ${intensity}%, transparent), transparent 60%)`,
                }}
            />
        </motion.div>
    );
};

export default SpotlightCard;
