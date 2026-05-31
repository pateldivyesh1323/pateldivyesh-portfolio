import React from "react";
import Link from "next/link";
import { papersData } from "@/data";
import SectionHeader from "./SectionHeader";

const Papershelf = (): React.ReactElement => {
    const featuredPapers = papersData.slice(0, 7);

    return (
        <div className="w-full">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-10">
                <SectionHeader
                    eyebrow="Reading"
                    title="Papershelf"
                    subtitle="Papers I've read"
                />
                <Link
                    href="/papershelf"
                    className="shrink-0 text-sm font-medium text-[var(--color-text)] hover:opacity-70 transition-opacity sm:mb-2"
                >
                    View All Papers →
                </Link>
            </div>
            <div className="flex flex-col gap-2">
                {featuredPapers.map((paper) => (
                    <a
                        key={paper.title}
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-4 px-5 py-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-bg)] transition-all duration-300"
                    >
                        <span className="text-sm md:text-base text-[var(--color-text)] group-hover:opacity-80 transition-opacity">
                            {paper.title}
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 shrink-0 text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                            />
                        </svg>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Papershelf;
