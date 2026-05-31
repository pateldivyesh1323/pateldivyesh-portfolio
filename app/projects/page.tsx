"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import SectionHeader from "@/Components/SectionHeader";
import { ProjectCard } from "@/Components/ProjectCard";
import {
    projectsData,
    PROJECT_TAGS,
    TAG_LABELS,
    type ProjectTag,
} from "@/data";

export default function ProjectsPage() {
    const [selectedTag, setSelectedTag] = useState<ProjectTag | "all">("all");

    const filteredProjects = useMemo(() => {
        if (selectedTag === "all") return projectsData;
        return projectsData.filter((project) =>
            project.tags.includes(selectedTag),
        );
    }, [selectedTag]);

    return (
        <div className="relative transition-colors duration-300 min-h-screen">
            <Navbar />
            <main className="max-w-5xl mx-auto px-6 pt-20 md:pt-24 pb-12">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                    <SectionHeader
                        eyebrow="Portfolio"
                        title="All Projects"
                    />
                    <Link
                        href="/"
                        className="shrink-0 text-sm font-medium text-[var(--color-text)] hover:opacity-70 transition-opacity sm:mb-2"
                    >
                        ← Back to Home
                    </Link>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                    <button
                        onClick={() => setSelectedTag("all")}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)] ${
                            selectedTag === "all"
                                ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
                                : "bg-[var(--color-surface)] text-[var(--color-muted)] border border-[var(--color-border)] hover:text-[var(--color-text)]"
                        }`}
                    >
                        All
                    </button>
                    {PROJECT_TAGS.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)] ${
                                selectedTag === tag
                                    ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
                                    : "bg-[var(--color-surface)] text-[var(--color-muted)] border border-[var(--color-border)] hover:text-[var(--color-text)]"
                            }`}
                        >
                            {TAG_LABELS[tag]}
                        </button>
                    ))}
                </div>
                <div className="flex flex-col gap-6">
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.name}
                            project={project}
                            layout="list"
                        />
                    ))}
                </div>
                <div className="mt-16">
                    <Footer />
                </div>
            </main>
        </div>
    );
}
