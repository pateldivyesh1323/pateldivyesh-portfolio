import React from "react";
import Socials from "./Socials";

const Home = (): React.ReactElement => {
    return (
        <div className="flex items-center justify-between flex-col md:flex-row gap-8 my-8 md:my-12 px-4 md:px-0">
            <div className="w-full md:w-auto flex justify-center md:justify-start">
                <img
                    className="w-[140px] md:w-[180px] rounded-full ring-2 ring-[#FFA500]"
                    src="./Images/PatelDivyesh-square.jpg"
                    alt="Divyesh Patel"
                />
            </div>
            <div className="text-md max-w-xl text-center md:text-left">
                <span className="font-normal text-gray-300">Hello, I'm</span>
                <div className="text-3xl md:text-4xl mb-3 md:mb-4 font-bold font-poppins">
                    Divyesh Patel
                </div>
                <div className="text-sm md:text-base max-w-[500px] font-normal text-gray-300 leading-relaxed">
                    <span className="text-[#FFA500] font-semibold">
                        Full Stack Developer
                    </span>{" "}
                    based in Ahmedabad, India. Currently in the of my final year
                    in Computer Engineering. When I'm not lost in lines of code,
                    you'll find me championing the beauty of{" "}
                    <span className="text-[#FFA500] font-semibold">
                        Open Source
                    </span>
                    .
                </div>
                <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6 mt-6">
                    <Socials />
                    <a
                        href="/pateldivyesh-resume.pdf"
                        download="pateldivyesh-resume.pdf"
                    >
                        <button className="group text-xs md:text-sm px-4 md:px-6 py-2 md:py-2.5 rounded-lg flex items-center gap-2 md:gap-3 bg-[#FFA500] bg-opacity-10 hover:bg-opacity-20 transition-all duration-300">
                            <span>Resume</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-y-0.5 transition-transform duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
