import React from "react";

const skillsData = {
    languages: [
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "TypeScript", icon: "devicon-typescript-plain" },
        { name: "Go", icon: "devicon-go-original-wordmark" },
        { name: "Rust", icon: "devicon-rust-plain" },
        { name: "C++", icon: "devicon-cplusplus-plain" },
        { name: "Java", icon: "devicon-java-plain" },
        { name: "Python", icon: "devicon-python-plain" },
    ],
    frameworks: [
        { name: "React", icon: "devicon-react-original" },
        { name: "Express", icon: "devicon-express-original" },
        { name: "Socket.io", icon: "devicon-socketio-original" },
        { name: "MongoDB", icon: "devicon-mongodb-plain" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
        { name: "Redis", icon: "devicon-redis-plain" },
        { name: "GraphQL", icon: "devicon-graphql-plain" },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
        { name: "Material-UI", icon: "devicon-materialui-plain" },
    ],
    tools: [
        { name: "VS Code", icon: "devicon-vscode-plain" },
        { name: "Git", icon: "devicon-git-plain" },
        { name: "GitHub", icon: "devicon-github-original" },
        { name: "Docker", icon: "devicon-docker-plain" },
    ],
};

const SkillBox = ({ skill }: { skill: { name: string; icon: string } }) => {
    return (
        <div
            key={skill.name}
            className="flex items-center gap-1 md:gap-1.5 px-1.5 md:px-2 py-0.5 md:py-1 border border-gray-300 dark:border-gray-700 rounded-md hover:border-[#FFA500] dark:hover:border-[#FFA500] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer whitespace-nowrap w-fit bg-white bg-opacity-50 dark:bg-transparent"
        >
            <i
                className={`${skill.icon} text-base md:text-lg text-gray-700 dark:text-gray-300 group-hover:text-[#FFA500] dark:group-hover:text-[#FFA500]`}
            ></i>
            <span className="text-[10px] md:text-xs text-gray-700 dark:text-gray-300 group-hover:text-[#FFA500] dark:group-hover:text-[#FFA500]">
                {skill.name}
            </span>
        </div>
    );
};

const Skills = (): React.ReactElement => {
    return (
        <div className="flex items-center justify-center flex-col gap-2 my-8 md:my-12 px-4 md:px-0">
            <div className="font-bold text-base md:text-lg text-gray-900 dark:text-white">
                Skills
            </div>
            <div className="w-full">
                <div className="mb-4 md:mb-6">
                    <h3 className="text-[#FFA500] font-semibold mb-2 md:mb-3 text-xs md:text-sm">
                        Languages
                    </h3>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {skillsData.languages.map((skill) => (
                            <SkillBox key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>

                <div className="mb-4 md:mb-6">
                    <h3 className="text-[#FFA500] font-semibold mb-2 md:mb-3 text-xs md:text-sm">
                        Frameworks & Tools
                    </h3>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {skillsData.frameworks.map((skill) => (
                            <SkillBox key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-[#FFA500] font-semibold mb-2 md:mb-3 text-xs md:text-sm">
                        Development Tools
                    </h3>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {skillsData.tools.map((skill) => (
                            <SkillBox key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
