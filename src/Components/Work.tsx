"use client";

import { useMemo } from "react";
import { experienceData } from "@/data";

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
        <div className="flex items-center justify-center flex-col gap-4 px-4 md:px-0">
            <h2 className="font-bold text-base md:text-lg text-gray-900 dark:text-white">
                Work
            </h2>
            <div className="w-full flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <span className="text-[11px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-medium">
                        Now
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {current.map((exp, index) => (
                            <div
                                key={index}
                                className="group relative rounded-xl border border-gray-200 dark:border-gray-800 p-3 transition-all duration-300 hover:border-[#DC2626]/40 hover:shadow-[0_0_16px_-4px_rgba(220,38,38,0.15)]"
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="text-[#DC2626] font-semibold text-sm">
                                        {exp.role}
                                    </h3>
                                    <span className="relative flex h-2 w-2 shrink-0 mt-1.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                                    </span>
                                </div>
                                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                                    {exp.company}
                                </p>
                                <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">
                                    {exp.location} · {exp.duration}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-[11px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-medium">
                        Previously
                    </span>
                    <div className="flex flex-col">
                        {past.map((exp, index) => (
                            <div
                                key={index}
                                className="group flex items-baseline justify-between gap-4 py-2 border-b border-gray-100 dark:border-gray-800/60 last:border-0 transition-colors duration-200 hover:bg-gray-50/50 dark:hover:bg-white/2 -mx-2 px-2 rounded-md"
                            >
                                <div className="min-w-0">
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-[#DC2626] transition-colors duration-200">
                                        {exp.role}
                                    </span>
                                    <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">
                                        {exp.company}
                                    </span>
                                </div>
                                <span className="text-[10px] text-gray-400 dark:text-gray-600 shrink-0 tabular-nums">
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
