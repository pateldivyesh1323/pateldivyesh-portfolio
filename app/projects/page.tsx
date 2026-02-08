import Link from "next/link";
import { ProjectCard } from "@/Components/Projects";
import { projectsData } from "@/data";

export default function ProjectsPage() {
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
                <div className="w-full space-y-3 md:space-y-4">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
