"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/Components/Projects";
import { projectsData, PROJECT_TAGS, TAG_LABELS, type ProjectTag } from "@/data";

export default function ProjectsPage() {
    const [selectedTag, setSelectedTag] = useState<ProjectTag | "all">("all");

    const filteredProjects = useMemo(() => {
        if (selectedTag === "all") return projectsData;
        return projectsData.filter((project) => project.tags.includes(selectedTag));
    }, [selectedTag]);

    return (
        <div className="relative transition-colors duration-300">
            <div className="max-w-3xl mx-auto relative py-8 md:py-12 px-4 md:px-0">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white">
                        All Projects
                    </h1>
                    <Link
                        href="/"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                        Back to Home
                    </Link>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                    <button
                        onClick={() => setSelectedTag("all")}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                            selectedTag === "all"
                                ? "bg-[#DC2626] text-white dark:bg-[#DC2626] dark:text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                        }`}
                    >
                        All
                    </button>
                    {PROJECT_TAGS.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                                selectedTag === tag
                                    ? "bg-[#DC2626] text-white dark:bg-[#DC2626] dark:text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                            }`}
                        >
                            {TAG_LABELS[tag]}
                        </button>
                    ))}
                </div>
                <div className="w-full space-y-3 md:space-y-4">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
