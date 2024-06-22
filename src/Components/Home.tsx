import React from "react";
import Socials from "./Socials";

const Home = (): React.ReactElement => {
    return (
        <div className="home-component flex items-center justify-center flex-col md:flex-row gap-12 lg:justify-evenly p-8 h-fit min-h-screen flex-wrap">
            <div>
                <img
                    className="md:w-[250px] w-[200px] rounded-full border-[#86b9b0] shadow-[0_0_30px_2px_#86b9b0]"
                    src="./Images/PatelDivyesh-square.jpg"
                    alt=""
                />
            </div>
            <div className="sm:text-2xl text-md font-bold">
                Hello, I'm
                <div className="divyesh-patel lg:text-8xl text-5xl mb-4 md:mb-8 font-semibold font-poppins">
                    Divyesh Patel
                </div>
                <div className="sm:text-xl text-sm font-semibold max-w-[700px]">
                    <span className="text-[#86b9b0]">Full Stack Developer</span>{" "}
                    based in Ahmedabad, India. Currently in the of my third year
                    in Computer Engineering. When I'm not lost in lines of code,
                    you'll find me championing the beauty of{" "}
                    <span className="text-[#86b9b0]">Open Source</span>.
                </div>
                <Socials />
                <a
                    href="/pateldivyesh-resume.pdf"
                    download="pateldivyesh-resume.pdf"
                >
                    <button className="font-medium text-sm bg-white text-[#295a9b] p-4 mt-6">
                        Download Resume
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Home;
