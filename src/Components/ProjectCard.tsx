"use client";

import React from "react";
import { Project, TAG_LABELS } from "@/data";
import { linkAccent, pillTag } from "@/lib/ui";
import SpotlightCard from "./animations/SpotlightCard";

type ProjectCardProps = {
    project: Project;
    layout?: "grid" | "list";
};

export const ProjectCard = ({
    project,
    layout = "grid",
}: ProjectCardProps): React.ReactElement => {
    const isList = layout === "list";

    return (
        <SpotlightCard
            className={`flex flex-col ${isList ? "md:flex-row" : ""}`}
        >
            <div
                className={`overflow-hidden bg-border ${
                    isList
                        ? "md:w-72 md:shrink-0 aspect-video md:aspect-auto md:min-h-[180px]"
                        : "aspect-video w-full"
                }`}
            >
                <img
                    src={project.image}
                    alt={project.name}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        isList ? "md:h-full md:min-h-[180px]" : ""
                    }`}
                />
            </div>
            <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display font-medium text-lg text-text group-hover:text-accent transition-colors duration-300">
                        {project.name}
                    </h3>
                    <div className="flex gap-3 shrink-0">
                        {project.github && (
                            <a
                                href={project.github}
                                className={`flex items-center gap-1 ${linkAccent}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                Code
                            </a>
                        )}
                        {project.link && (
                            <a
                                href={project.link}
                                className={`flex items-center gap-1 ${linkAccent}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-3.5 h-3.5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                    />
                                </svg>
                                Live
                            </a>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                        <span key={tag} className={pillTag}>
                            {TAG_LABELS[tag]}
                        </span>
                    ))}
                </div>
                <p className="text-xs font-medium text-muted mb-2">
                    {project.techStack}
                </p>
                <p className="text-sm text-muted leading-relaxed flex-1">
                    {project.description}
                </p>
            </div>
        </SpotlightCard>
    );
};
