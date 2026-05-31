"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import SectionHeaderRow from "@/Components/SectionHeaderRow";
import { ProjectCard } from "@/Components/ProjectCard";
import {
    projectsData,
    PROJECT_TAGS,
    TAG_LABELS,
    type ProjectTag,
} from "@/data";
import { btnGhost, pillFilterActive, pillFilterInactive } from "@/lib/ui";

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
            <main className="max-w-5xl mx-auto px-6 pt-20 md:pt-24 pb-12 relative z-10">
                <SectionHeaderRow
                    eyebrow="Portfolio"
                    title="All Projects"
                    action={
                        <Link href="/" className={`shrink-0 ${btnGhost}`}>
                            ← Back to Home
                        </Link>
                    }
                />
                <div className="flex flex-wrap gap-2 mb-8">
                    <button
                        onClick={() => setSelectedTag("all")}
                        className={
                            selectedTag === "all"
                                ? pillFilterActive
                                : pillFilterInactive
                        }
                    >
                        All
                    </button>
                    {PROJECT_TAGS.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={
                                selectedTag === tag
                                    ? pillFilterActive
                                    : pillFilterInactive
                            }
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
