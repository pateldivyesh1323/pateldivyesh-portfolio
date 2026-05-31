import React from "react";
import { projectsData } from "@/data";
import SectionHeaderRow from "./SectionHeaderRow";
import { ViewAllLink } from "./PaperLinkRow";
import { ProjectCard } from "./ProjectCard";

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
