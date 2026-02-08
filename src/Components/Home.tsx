"use client";

import React from "react";
import Socials from "./Socials";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

const Home = (): React.ReactElement => {
    return (
        <div className="flex items-start flex-col md:flex-row gap-6 md:gap-8 mt-8 md:mt-12 px-4 md:px-6 w-full relative">
            <div className="absolute top-2 right-2 md:top-0 md:right-0 z-10">
                <ThemeToggle />
            </div>
            <div className="mx-auto md:mx-0 relative border border-[#DC2626] rounded-full">
                <div
                    className={`relative w-[100px] h-[100px] md:w-[90px] md:h-[90px]`}
                >
                    <Image
                        className="w-full h-full object-cover relative z-10 rounded-full"
                        src="/Images/PatelDivyesh-square.jpg"
                        alt="Divyesh Patel"
                        width={100}
                        height={100}
                        placeholder="blur"
                        blurDataURL="/Images/PatelDivyesh-square.jpg"
                        loading="eager"
                    />
                </div>
            </div>
            <div className="text-md max-w-xl text-center md:text-left md:flex-1 w-full">
                <div className="text-2xl md:text-4xl font-bold font-poppins text-gray-900 dark:text-white">
                    Divyesh Patel
                </div>
                <div className="text-xs md:text-base max-w-[500px] font-normal text-gray-700 dark:text-gray-300 leading-relaxed mt-2 mb-4 mx-auto md:mx-0">
                    22, Software Developer <br /> Arizona, USA
                </div>
                <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                    <Socials />
                    <a
                        href="/pateldivyesh.pdf"
                        download="pateldivyesh.pdf"
                        className="text-gray-700 dark:text-white hover:text-[#DC2626] transition-colors duration-300 flex items-center gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <rect width="24" height="24" fill="none" />
                            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                        </svg>
                        <span className="text-sm font-medium">
                            Download Resume
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
