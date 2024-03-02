import React from 'react'

const Projects = (): React.ReactElement => {

    const projectsData = [
        {
            name: "Mockinter",
            techStack: "NextJS, TailwindCSS, MongoDB",
            description: "This platform helps in job seekers in preparing for their upcoming interview. Mockinter connects interviewer and interviewee on the basis of their role they are seeking and give mock interviews.",
            link: "https://mockinter.vercel.app",
            github: "https://github.com/pateldivyesh1323/mockinter",
            image: "/Images/Projects/Mockinter.png"
        },
        {
            name: "Passvault",
            techStack: "ReactJS, TailwindCSS, MongoDB, Auth0, NodeJs, ExpressJS",
            description: "A password manager with both client and server side encryption. Save and encrypt your password with your own key.",
            link: "https://passvault.vercel.app",
            github: "https://github.com/pateldivyesh1323/passvault",
            image: "/Images/Projects/Passvault.png"
        },
        {
            name: "Edittube",
            techStack: "React.JS, TailwindCSS, NodeJS, ExpressJs, MongoDB, Cloudinary, Auth0",
            description: "Upload vidoes directly from editor to your youtube channel saving your time and internet bandwidth.",
            link: "https://edittube.vercel.app",
            github: "https://github.com/InnoSource-Labs/edittube",
            image: "/Images/Projects/Edittube.png"
        },
        {
            name: "Enjoymovies",
            techStack: "React.JS",
            description: "Get all information about favourite upcoming, trending and popular movies all gathered in one place. You can also search for your favourite movies. Powered by TMBD API.",
            link: "https://enjoymovies.netlify.app",
            github: "https://github.com/pateldivyesh1323/enjoymovies",
            image: "/Images/Projects/Enjoymovies.png"
        },
        {
            name: "Heatlevels",
            techStack: "React.JS",
            description: "Weather website powered by openweathermap api. Search weather based on your location or any city along with weather forecast.",
            link: "https://heatlevels.netlify.app",
            github: "https://github.com/pateldivyesh1323/heatlevels",
            image: "/Images/Projects/Heatlevels.png"
        },
        {
            name: "Wonders of world",
            techStack: "HTML, CSS, Javascript",
            description: "Get all information about new seven wonders of world gathered in one place.",
            link: "https://wondersof-world.web.app/",
            github: "https://github.com/pateldivyesh1323/Wonders-of-World",
            image: "/Images/Projects/Wondersofworld.png"
        }
    ]

    return (
        <div className='projects-component min-h-screen flex items-center justify-center flex-col gap-8 mb-24'>
            <div className='font-bold text-lg underline'>
                Projects
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {projectsData.map((project, index) => {
                    return (
                        <div key={index} className='bg-[#9DB2BF] rounded-md w-[400px]'>
                            <img src={project.image} alt="" className='rounded-t-md w-[400px] h-[200px]' />
                            <div className='mx-2 my-4'>
                                <div className='text-black mb-2'>
                                    <span className='text-black font-semibold'>{project.name}</span>
                                    <a href={project.github} className='underline float-end'>Github </a>
                                    <a href={project.link} className='underline float-end mr-2'>Live</a>
                                </div>
                                <div className='font-semibold text-neutral-900 mb-4 text-xs'>{project.techStack}</div>
                                <div className='text-neutral-900 text-sm'>{project.description}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects
