import React from "react";

const Projects = (): React.ReactElement => {
    const projectsData = [
        {
            name: "Submitly",
            techStack:
                "ReactJS, TailwindCSS, RadixUI, MongoDB, NodeJS, ExpressJS",
            description:
                "Submitly is a seamless form submission solution that simplifies how users interact with your website. Without the need for a backend server, Submitly allows you to receive form submissions directly into your inbox.",
            link: "https://submitlyforms.vercel.app",
            github: "https://github.com/pateldivyesh1323/submitly",
            image: "/Images/Projects/Submitly.png",
        },
        {
            name: "Mockinter",
            techStack: "NextJS, TailwindCSS, MongoDB",
            description:
                "This platform helps in job seekers in preparing for their upcoming interview. Mockinter connects interviewer and interviewee on the basis of their role they are seeking and give mock interviews.",
            link: "https://mockinter.vercel.app",
            github: "https://github.com/pateldivyesh1323/mockinter",
            image: "/Images/Projects/Mockinter.png",
        },
        {
            name: "Passvault",
            techStack:
                "ReactJS, TailwindCSS, MongoDB, Auth0, NodeJs, ExpressJS",
            description:
                "A password manager with both client and server side encryption. Save and encrypt your password with your own key.",
            link: "https://passvault.vercel.app",
            github: "https://github.com/pateldivyesh1323/passvault",
            image: "/Images/Projects/Passvault.png",
        },
        {
            name: "Edittube",
            techStack:
                "React.JS, TailwindCSS, NodeJS, ExpressJs, MongoDB, Cloudinary, Auth0",
            description:
                "Upload vidoes directly from editor to your youtube channel saving your time and internet bandwidth.",
            link: "https://edittube.vercel.app",
            github: "https://github.com/InnoSource-Labs/edittube",
            image: "/Images/Projects/Edittube.png",
        },
        {
            name: "Enjoymovies",
            techStack: "React.JS",
            description:
                "Get all information about favourite upcoming, trending and popular movies all gathered in one place. You can also search for your favourite movies. Powered by TMBD API.",
            link: "https://enjoymovies.netlify.app",
            github: "https://github.com/pateldivyesh1323/enjoymovies",
            image: "/Images/Projects/Enjoymovies.png",
        },
        {
            name: "Heatlevels",
            techStack: "React.JS",
            description:
                "Weather website powered by openweathermap api. Search weather based on your location or any city along with weather forecast.",
            link: "https://heatlevels.netlify.app",
            github: "https://github.com/pateldivyesh1323/heatlevels",
            image: "/Images/Projects/Heatlevels.png",
        },
        {
            name: "Wonders of world",
            techStack: "HTML, CSS, Javascript",
            description:
                "Get all information about new seven wonders of world gathered in one place.",
            link: "https://wondersof-world.web.app/",
            github: "https://github.com/pateldivyesh1323/Wonders-of-World",
            image: "/Images/Projects/Wondersofworld.png",
        },
    ];

    return (
        <div className="projects-component min-h-screen flex items-center justify-center flex-col gap-8 mt-12">
            <div className="font-bold text-lg underline">Projects</div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8">
                {projectsData.map((project, index) => {
                    return (
                        <div
                            key={index}
                            className="rounded-md sm:w-[400px] w-[300px] hover:bg-neutral-200 hover:bg-opacity-10 transition-all duration-300"
                        >
                            <img
                                src={project.image}
                                alt=""
                                className="rounded-md sm:h-[200px] h-[170px]"
                            />
                            <div className="text-white mx-2 my-4">
                                <div className="mb-2 flex items-center justify-between">
                                    <span className="font-semibold text-[#64add5]">
                                        {project.name}
                                    </span>
                                    <div className="text-sm lg:text-md">
                                        <a
                                            href={project.github}
                                            className="underline"
                                        >
                                            Github
                                        </a>
                                        &nbsp;
                                        <a
                                            href={project.link}
                                            className="underline mr-2"
                                        >
                                            Live
                                        </a>
                                    </div>
                                </div>
                                <div className="font-semibold text-neutral-200 mb-4 text-xs">
                                    {project.techStack}
                                </div>
                                <div className="text-neutral-200 text-sm">
                                    {project.description}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
