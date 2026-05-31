import React from "react";
import SectionHeader from "./SectionHeader";

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
        <div className="w-full">
            <SectionHeader eyebrow="Expertise" title="Skills" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category, idx) => (
                    <div
                        key={idx}
                        className="rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] p-5 transition-all duration-200"
                    >
                        <h3 className="font-display font-semibold text-sm text-[var(--color-text)] mb-3">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill.name}
                                    className="inline-block px-3 py-1 text-xs rounded-full bg-[var(--color-bg)] text-[var(--color-muted)] border border-[var(--color-border)]"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
