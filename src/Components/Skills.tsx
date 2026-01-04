import React from "react";

const skillsData = {
    webDevelopment: [
        { name: "React JS", icon: "devicon-react-original" },
        { name: "Next JS", icon: "devicon-nextjs-plain" },
        { name: "Node JS", icon: "devicon-nodejs-plain" },
        { name: "Express JS", icon: "devicon-express-original" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
        { name: "ShadCN UI", icon: "" },
        { name: "REST APIs", icon: "" },
        { name: "WebSockets", icon: "devicon-socketio-original" },
        { name: "SSR", icon: "" },
    ],
    databases: [
        { name: "MongoDB", icon: "devicon-mongodb-plain" },
        { name: "Firebase", icon: "devicon-firebase-plain" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
        { name: "Redis", icon: "devicon-redis-plain" },
        { name: "MySQL", icon: "devicon-mysql-plain" },
        { name: "Elasticsearch", icon: "devicon-elasticsearch-plain" },
        { name: "Neo4J", icon: "devicon-neo4j-plain" },
        { name: "CockroachDB", icon: "" },
        { name: "Prisma ORM", icon: "devicon-prisma-plain" },
    ],
    programmingLanguages: [
        { name: "C++", icon: "devicon-cplusplus-plain" },
        { name: "Python", icon: "devicon-python-plain" },
        { name: "Golang", icon: "devicon-go-original-wordmark" },
        { name: "TypeScript", icon: "devicon-typescript-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "Java", icon: "devicon-java-plain" },
    ],
    machineLearning: [
        { name: "Transformers", icon: "" },
        { name: "LLMs", icon: "" },
        { name: "RAG", icon: "" },
        { name: "LangChain", icon: "" },
        { name: "Hugging Face", icon: "" },
        { name: "Vector Databases", icon: "" },
        { name: "Fine-tuning", icon: "" },
        { name: "Scikit Learn", icon: "" },
        { name: "XGBoost", icon: "" },
        { name: "Pandas", icon: "devicon-pandas-plain" },
        { name: "NumPy", icon: "devicon-numpy-original" },
    ],
    cloudDevOps: [
        { name: "AWS", icon: "devicon-amazonwebservices-original" },
        { name: "GCP", icon: "devicon-googlecloud-plain" },
        { name: "Docker", icon: "devicon-docker-plain" },
        { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
        { name: "CI/CD", icon: "" },
        { name: "GitHub Actions", icon: "devicon-github-original" },
        { name: "Linux", icon: "devicon-linux-plain" },
        { name: "Git", icon: "devicon-git-plain" },
    ],
};

const Skills = (): React.ReactElement => {
    const categories = [
        {
            title: "Programming Languages",
            skills: skillsData.programmingLanguages,
        },
        { title: "Web Development", skills: skillsData.webDevelopment },
        { title: "Databases", skills: skillsData.databases },
        {
            title: "Machine Learning & GenAI",
            skills: skillsData.machineLearning,
        },
        { title: "Cloud & DevOps", skills: skillsData.cloudDevOps },
    ];

    return (
        <div className="flex items-center justify-center flex-col gap-2 my-6 md:my-8 px-4 md:px-0">
            <div className="font-bold text-base md:text-lg text-gray-900 dark:text-white">
                Skills
            </div>
            <div className="w-full overflow-x-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {categories.map((category, idx) => (
                        <div
                            key={idx}
                            className="bg-white/60 dark:bg-gray-800/40 p-2.5 md:p-3 border border-gray-200 dark:border-gray-700 transition-all duration-200"
                        >
                            <h3 className="text-[#DC2626] font-semibold mb-2 text-[10px] md:text-xs">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-1 md:gap-1.5">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className="inline-block px-1.5 md:px-2 py-0.5 text-[9px] md:text-[10px] bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300"
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
