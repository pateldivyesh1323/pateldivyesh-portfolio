import React from "react";
import { ProjectCard } from "../Components/Projects";
import { projectsData } from "../data";
import { Link } from "react-router";
import ParticleBackground from "../Components/ParticleBackground";

const ProjectsPage = (): React.ReactElement => {
    return (
        <div className="relative transition-colors duration-300">
            <ParticleBackground />
            <div className="absolute top-0 left-0 right-0 h-[300px] bg-[#FFA500] blur-[150px] opacity-20 pointer-events-none"></div>
            <div className="max-w-3xl mx-auto relative py-8 md:py-12 px-4 md:px-0">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white">
                        All Projects
                    </h1>
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#FFA500] dark:hover:text-[#FFA500] transition-colors duration-300 text-sm"
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
                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                            />
                        </svg>
                        Back to Home
                    </Link>
                </div>
                <div className="w-full space-y-3 md:space-y-4">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
