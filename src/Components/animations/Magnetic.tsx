"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type MagneticProps = {
    children: React.ReactNode;
    className?: string;
    /** How strongly the element is pulled toward the cursor (0–1). */
    strength?: number;
};

/**
 * Wraps an element so it drifts toward the cursor while hovered and springs
 * back on leave. Rendered inline-block so it hugs its child.
 */
const Magnetic = ({
    children,
    className = "",
    strength = 0.35,
}: MagneticProps): React.ReactElement => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 220, damping: 16 });
    const springY = useSpring(y, { stiffness: 220, damping: 16 });

    const handleMove = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
        y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            style={{ x: springX, y: springY }}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Magnetic;
