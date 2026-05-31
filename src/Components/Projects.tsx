"use client";

import React from "react";
import { projectsData } from "@/data";
import SectionHeaderRow from "./SectionHeaderRow";
import { ViewAllLink } from "./PaperLinkRow";
import { ProjectCard } from "./ProjectCard";
import { StaggerContainer, StaggerItem } from "./animations/Stagger";

const Projects = (): React.ReactElement => {
    const featuredProjects = projectsData.slice(0, 3);

    return (
        <div className="w-full">
            <SectionHeaderRow
                eyebrow="Selected Work"
                title="Projects"
                subtitle="A few things I've built recently."
                action={
                    <ViewAllLink href="/projects" label="View All Projects →" />
                }
            />
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredProjects.map((project) => (
                    <StaggerItem key={project.name}>
                        <ProjectCard project={project} />
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </div>
    );
};

export default Projects;
export { ProjectCard } from "./ProjectCard";
