import React from "react";
import Link from "next/link";
import { projectsData } from "@/data";
import SectionHeader from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";

const Projects = (): React.ReactElement => {
    const featuredProjects = projectsData.slice(0, 3);

    return (
        <div className="w-full">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-10">
                <SectionHeader
                    eyebrow="Selected Work"
                    title="Projects"
                    subtitle="A few things I've built recently."
                />
                <Link
                    href="/projects"
                    className="shrink-0 text-sm font-medium text-[var(--color-text)] hover:opacity-70 transition-opacity sm:mb-2"
                >
                    View All Projects →
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
export { ProjectCard } from "./ProjectCard";
