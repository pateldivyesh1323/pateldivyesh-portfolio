"use client";

import { useMemo } from "react";
import { experienceData } from "@/data";
import SectionHeader from "./SectionHeader";
import SpotlightCard from "./animations/SpotlightCard";

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
            <SectionHeader eyebrow="Experience" title="Work" no="01" />
            <div className="w-full flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                    <span className="section-eyebrow">Now</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {current.map((exp, index) => (
                            <SpotlightCard key={index} className="p-5">
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="font-display uppercase tracking-tight text-text text-lg md:text-xl leading-none group-hover:text-accent transition-colors">
                                        {exp.role}
                                    </h3>
                                    <span className="inline-flex items-center gap-1.5 shrink-0 mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-accent">
                                        <span className="relative flex h-1.5 w-1.5">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                                        </span>
                                        Live
                                    </span>
                                </div>
                                <p className="text-sm text-muted mt-2">
                                    {exp.company}
                                </p>
                                <p className="text-xs text-muted mt-1">
                                    {exp.location} · {exp.duration}
                                </p>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <span className="section-eyebrow">Previously</span>
                    <div className="flex flex-col">
                        {past.map((exp, index) => (
                            <div
                                key={index}
                                className="group flex items-baseline justify-between gap-4 py-4 px-1 border-b border-ink/15 last:border-0 transition-colors duration-200"
                            >
                                <div className="min-w-0">
                                    <span className="text-sm font-medium text-text group-hover:text-accent transition-colors">
                                        {exp.role}
                                    </span>
                                    <span className="text-xs text-muted ml-2">
                                        {exp.company}
                                    </span>
                                </div>
                                <span className="text-xs text-muted shrink-0 tabular-nums">
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
