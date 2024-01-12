import React from 'react'

const Skills = (): React.ReactElement => {
    return (
        <div className='min-h-screen flex items-center justify-center flex-col gap-8'>
            <div className='font-bold text-lg underline'>
                Skills
            </div>
            <div className='flex justify-evenly w-full flex-wrap gap-6'>
                <div className='flex flex-col items-center bg-[#001b2e] w-[300px] h-[320px] py-4 rounded-lg'>
                    <span className='font-bold text-[#86b9b0] mb-4'>Languages</span>
                    <span>Javascript</span>
                    <span>Typescript</span>
                    <span>GO</span>
                    <span>Rust</span>
                    <span>C++</span>
                    <span>Java</span>
                    <span>Python</span>
                </div>
                <div className='flex flex-col items-center bg-[#001b2e] w-[300px] h-[320px]  py-4  rounded-lg'>
                    <span className='font-bold text-[#86b9b0] mb-4'>Frameworks and Database</span>
                    <span>ReactJS</span>
                    <span>ExpressJS</span>
                    <span>Socket.io</span>
                    <span>MongoDB</span>
                    <span>PostgreSQL</span>
                    <span>Redis</span>
                    <span>GraphQL</span>
                    <span>TailwindCSS</span>
                    <span>MaterailUI</span>
                </div>
                <div className='flex flex-col items-center bg-[#001b2e] w-[300px] h-[320px] py-4  rounded-lg'>
                    <span className='font-bold text-[#86b9b0] mb-4'>Tools</span>
                    <span>VS Code</span>
                    <span>Git</span>
                    <span>Github</span>
                    <span>Docker</span>
                </div>
            </div>
        </div>
    )
}

export default Skills
