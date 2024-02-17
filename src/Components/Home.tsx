import React from 'react'
import Socials from './Socials'

const Home = (): React.ReactElement => {
    return (
        <div className='home-component flex items-center justify-center lg:justify-evenly p-8 box-border h-screen flex-wrap lg:mt-0 mt-16'>
            <div>
                <img className='w-[250px] h-[250px] rounded-full border-4 border-[#86b9b0] shadow-[0_0_30px_2px_#86b9b0]' src="./Images/PatelDivyesh-square.jpg" alt="" />
            </div>
            <div className='text-2xl font-bold'>
                Hello, I'm
                <div className='divyesh-patel lg:text-8xl text-4xl mb-8 font-semibold font-poppins'>Divyesh Patel</div>
                <div className='text-xl font-semibold max-w-[700px]'>
                    <span className='text-[#86b9b0]'>Full Stack Developer</span> based in Ahmedabad, India. Currently in the of my third year in Computer Engineering. When I'm not lost in lines of code, you'll find me championing the beauty of <span className='text-[#86b9b0]'>Open Source</span>.
                </div>
                <Socials />
                <a href="public/pateldivyesh-resume.pdf" download="pateldivyesh-resume"><button className='font-medium text-sm bg-white text-[#295a9b] p-4 mt-6'>Download Resume</button></a>
            </div>
        </div>
    )
}

export default Home
