import React from "react";
import Link from "next/link";
import { Project, projectsData, TAG_LABELS } from "@/data";

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-3 md:p-2 border border-gray-300 dark:border-gray-700 hover:border-[#DC2626] dark:hover:border-[#DC2626] transition-all duration-300 group bg-white/75 dark:bg-transparent items-center">
            <img
                src={project.image}
                alt={project.name}
                className="w-full md:w-48 h-38 md:h-36 object-cover"
            />
            <div className="flex-1 w-full">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[#DC2626] text-lg md:text-base">
                        {project.name}
                    </h3>
                    <div className="flex gap-4">
                        {project.github && (
                            <a
                                href={project.github}
                                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-[#DC2626] dark:hover:text-[#DC2626] transition-colors duration-300 text-sm"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    width="16"
                                    height="16"
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
                                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-[#DC2626] dark:hover:text-[#DC2626] transition-colors duration-300 text-sm"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-4 h-4"
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
                <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] md:text-xs font-medium bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        >
                            {TAG_LABELS[tag]}
                        </span>
                    ))}
                </div>
                <div className="font-semibold text-gray-800 dark:text-neutral-200 mb-2 text-[11px] md:text-xs">
                    {project.techStack}
                </div>
                <div className="text-gray-700 dark:text-neutral-200 text-xs md:text-sm leading-relaxed text-justify">
                    {project.description}
                </div>
            </div>
        </div>
    );
};

const Projects = (): React.ReactElement => {
    // Show only the first 3 projects
    const featuredProjects = projectsData.slice(0, 3);

    return (
        <div className="px-4 md:px-0">
            <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="font-bold text-base md:text-lg text-gray-900 dark:text-white">
                    Projects
                </h2>
                <Link
                    href="/projects"
                    className="self-start sm:self-auto text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                    View All Projects
                </Link>
            </div>
            <div className="w-full space-y-3 md:space-y-4">
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
