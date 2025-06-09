import React from "react";

const skillsData = {
    languages: [
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "TypeScript", icon: "devicon-typescript-plain" },
        { name: "Go", icon: "devicon-go-original-wordmark" },
        { name: "C++", icon: "devicon-cplusplus-plain" },
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
        { name: "Cursor", icon: "devicon-cursor-plain" },
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
            className="flex items-center px-1 md:px-1.5 py-0.25 md:py-0.5 border border-gray-300 rounded-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer whitespace-nowrap w-fit bg-white"
        >
            <span className="text-xs text-black">{skill.name}</span>
        </div>
    );
};

const Skills = (): React.ReactElement => {
    return (
        <div className="flex items-center justify-center flex-col gap-2 my-8 md:my-12 px-4 md:px-0">
            <div className="font-bold text-base md:text-lg">Skills</div>
            <div className="w-full">
                <div className="mb-4 md:mb-6">
                    <h3 className="text-[#FFA500] font-semibold mb-2 md:mb-3 text-xs md:text-sm">
                        Languages
                    </h3>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 font-semibold">
                        {skillsData.languages.map((skill) => (
                            <SkillBox key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>

                <div className="mb-4 md:mb-6">
                    <h3 className="text-[#FFA500] font-semibold mb-2 md:mb-3 text-xs md:text-sm">
                        Frameworks & Tools
                    </h3>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 font-semibold">
                        {skillsData.frameworks.map((skill) => (
                            <SkillBox key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-[#FFA500] font-semibold mb-2 md:mb-3 text-xs md:text-sm">
                        Development Tools
                    </h3>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 font-semibold">
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
