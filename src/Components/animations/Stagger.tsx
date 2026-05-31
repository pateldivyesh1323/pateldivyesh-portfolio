"use client";

import React from "react";
import { motion } from "motion/react";

type StaggerContainerProps = {
    children: React.ReactNode;
    className?: string;
    stagger?: number;
};

export const StaggerContainer = ({
    children,
    className = "",
    stagger = 0.08,
}: StaggerContainerProps): React.ReactElement => {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
                hidden: {},
                visible: {
                    transition: { staggerChildren: stagger },
                },
            }}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}): React.ReactElement => {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] },
                },
            }}
        >
            {children}
        </motion.div>
    );
};
