import React, { useState } from "react";
import Socials from "./Socials";
import ThemeToggle from "./ThemeToggle";

const Home = (): React.ReactElement => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div className="flex items-center flex-col md:flex-row gap-8 my-8 md:my-12 px-4 md:px-6 w-full relative">
            <div className="absolute top-0 right-0 z-10">
                <ThemeToggle />
            </div>
            <div className="md:ml-0">
                {(!loaded || error) && (
                    <div className="w-[120px] h-[120px] rounded-full ring-2 ring-[#FFA500] bg-neutral-300"></div>
                )}
                <img
                    className={`${
                        loaded &&
                        !error &&
                        "w-[120px] rounded-full ring-2 ring-[#FFA500]"
                    }`}
                    src="./Images/PatelDivyesh-square.jpg"
                    alt="Divyesh Patel"
                    onLoad={() => setLoaded(true)}
                    onError={() => setError(true)}
                />
            </div>
            <div className="text-md max-w-xl text-center md:text-left md:flex-1">
                <div className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 dark:text-white">
                    Divyesh Patel
                </div>
                <div className="text-sm md:text-base max-w-[500px] font-normal text-gray-700 dark:text-gray-300 leading-relaxed mt-2 mb-4">
                    21, Developer
                </div>
                <div className="flex items-center justify-center md:justify-start gap-6 mt-4">
                    <Socials />
                    <a
                        href="/pateldivyesh-resume.pdf"
                        download="pateldivyesh-resume.pdf"
                        className="text-sm underline"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
