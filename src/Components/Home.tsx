import React from 'react'
import Socials from './Socials'

const Home = (): React.ReactElement => {
    return (
        <div className='flex items-center justify-center lg:justify-evenly p-8 box-border h-screen flex-wrap lg:mt-0 mt-16'>
            <div>
                <img className='w-[250px] h-[250px] rounded-full border-4 border-[#86b9b0] shadow-[0_0_30px_2px_#86b9b0]' src="./src/assets/PatelDivyesh-square.jpg" alt="" />
            </div>
            <div className='text-2xl font-bold'>
                Hello, I'm
                <div className='lg:text-7xl text-4xl mb-8'>Divyesh Patel</div>
                <div className='text-xl font-semibold max-w-[500px]'>
                    <span className='text-[#86b9b0]'>Full Stack Developer</span> based in Ahmedabad, India. Currently in the of my third year in Computer Engineering. When I'm not lost in lines of code, you'll find me championing the beauty of <span className='text-[#86b9b0]'>Open Source</span>.
                </div>
                <Socials />
            </div>
        </div>
    )
}

export default Home
