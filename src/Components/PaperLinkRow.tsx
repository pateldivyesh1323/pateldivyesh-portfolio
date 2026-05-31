"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { btnSecondary } from "@/lib/ui";

const ExternalLinkIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 shrink-0 text-muted group-hover:text-accent transition-colors"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
    </svg>
);

type PaperLinkRowProps = {
    title: string;
    link: string;
};

export const PaperLinkRow = ({
    title,
    link,
}: PaperLinkRowProps): React.ReactElement => {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 px-5 py-4 rounded-2xl border border-border bg-surface hover:bg-accent-soft/50 hover:border-accent/25 transition-all duration-300"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
        >
            <span className="text-sm md:text-base text-text group-hover:text-accent transition-colors">
                {title}
            </span>
            <ExternalLinkIcon />
        </motion.a>
    );
};

type ViewAllLinkProps = {
    href: string;
    label: string;
};

export const ViewAllLink = ({
    href,
    label,
}: ViewAllLinkProps): React.ReactElement => {
    return (
        <Link href={href} className={`relative z-10 shrink-0 ${btnSecondary}`}>
            {label}
        </Link>
    );
};

export default PaperLinkRow;
