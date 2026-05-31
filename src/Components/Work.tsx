"use client";

import { useMemo } from "react";
import { experienceData } from "@/data";
import SectionHeader from "./SectionHeader";

export default function Work() {
    const { current, past } = useMemo(() => {
        const current = experienceData.filter((e) =>
            e.duration.includes("Present"),
        );
        const past = experienceData.filter(
            (e) => !e.duration.includes("Present"),
        );
        return { current, past };
    }, []);

    return (
        <div className="w-full">
            <SectionHeader eyebrow="Experience" title="Work" />
            <div className="w-full flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                    <span className="section-eyebrow">Now</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {current.map((exp, index) => (
                            <div
                                key={index}
                                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20"
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="font-semibold text-[var(--color-text)] text-sm md:text-base">
                                        {exp.role}
                                    </h3>
                                    <span className="relative flex h-2 w-2 shrink-0 mt-1.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                                    </span>
                                </div>
                                <p className="text-sm text-[var(--color-muted)] mt-2">
                                    {exp.company}
                                </p>
                                <p className="text-xs text-[var(--color-muted)] mt-1">
                                    {exp.location} · {exp.duration}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <span className="section-eyebrow">Previously</span>
                    <div className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
                        {past.map((exp, index) => (
                            <div
                                key={index}
                                className="group flex items-baseline justify-between gap-4 py-4 px-5 border-b border-[var(--color-border)] last:border-0 transition-colors duration-200 hover:bg-[var(--color-bg)]"
                            >
                                <div className="min-w-0">
                                    <span className="text-sm font-medium text-[var(--color-text)]">
                                        {exp.role}
                                    </span>
                                    <span className="text-xs text-[var(--color-muted)] ml-2">
                                        {exp.company}
                                    </span>
                                </div>
                                <span className="text-xs text-[var(--color-muted)] shrink-0 tabular-nums">
                                    {exp.duration}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
