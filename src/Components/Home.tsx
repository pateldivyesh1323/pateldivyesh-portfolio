import React from "react";
import Socials from "./Socials";
import { useTheme } from "../Context/ThemeContext";

const Home = (): React.ReactElement => {
    const { darkMode, toggleDarkMode } = useTheme();

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
                <div className="flex justify-center md:justify-end mb-2">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full bg-[#FFA500] bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
                        aria-label={
                            darkMode
                                ? "Switch to light mode"
                                : "Switch to dark mode"
                        }
                    >
                        {darkMode ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-yellow-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-700 dark:text-slate-300"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </button>
                </div>
                <span className="font-normal text-gray-700 dark:text-gray-300">
                    Hello, I'm
                </span>
                <div className="text-3xl md:text-4xl mb-3 md:mb-4 font-bold font-poppins text-gray-900 dark:text-white">
                    Divyesh Patel
                </div>
                <div className="text-sm md:text-base max-w-[500px] font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
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
