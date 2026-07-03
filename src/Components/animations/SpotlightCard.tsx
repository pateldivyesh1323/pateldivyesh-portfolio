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
 * A flat poster card with a hard ink frame. On hover it lifts slightly, the
 * frame turns red, and a spotlight follows the cursor. Overlays are
 * absolutely positioned and pointer-events-none, so they never disturb the
 * consumer's layout.
 */
const SpotlightCard = ({
    children,
    className = "",
    lift = 3,
    intensity = 9,
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
            className={`group relative overflow-hidden rounded-lg bg-surface border border-ink/10 hover:border-accent/50 transition-colors duration-200 ${className}`}
        >
            {children}

            {/* Cursor-following red spotlight */}
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
