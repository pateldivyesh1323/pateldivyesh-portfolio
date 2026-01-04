import React, { useState } from "react";
import Socials from "./Socials";
import ThemeToggle from "./ThemeToggle";

const Home = (): React.ReactElement => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div className="flex items-start flex-col md:flex-row gap-8 my-8 md:my-12 px-4 md:px-6 w-full relative">
            <div className="absolute top-0 right-0 z-10">
                <ThemeToggle />
            </div>
            <div className="md:ml-0 relative border border-[#DC2626] rounded-full">
                {(!loaded || error) && (
                    <div className="w-[70px] h-[70px] bg-neutral-300 relative rounded-full"></div>
                )}
                <div
                    className={`relative w-[70px] h-[70px] ${
                        loaded && !error ? "block" : "hidden"
                    }`}
                >
                    <img
                        className="w-full h-full object-cover relative z-10 rounded-full"
                        src="./Images/PatelDivyesh-square.jpg"
                        alt="Divyesh Patel"
                        onLoad={() => setLoaded(true)}
                        onError={() => setError(true)}
                    />
                </div>
            </div>
            <div className="text-md max-w-xl text-center md:text-left md:flex-1">
                <div className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 dark:text-white">
                    Divyesh Patel
                </div>
                <div className="text-sm md:text-base max-w-[500px] font-normal text-gray-700 dark:text-gray-300 leading-relaxed mt-2 mb-4">
                    22, Developer <br /> Arizona, USA
                </div>
                <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                    <Socials />
                    <a
                        href="/pateldivyesh.pdf"
                        download="pateldivyesh.pdf"
                        className="hover:text-[#DC2626] transition-colors duration-300"
                    >
                        <svg
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M19.31 12.051c.381 0 .69.314.69.7v4.918c-.006.67-.127 1.2-.399 1.594c-.328.476-.908.692-1.747.737l-15.903-.002c-.646-.046-1.168-.302-1.507-.777c-.302-.423-.446-.95-.444-1.558V12.75c0-.386.309-.7.69-.7c.38 0 .688.314.688.7v4.913c0 .333.065.572.182.736c.081.114.224.184.44.201l15.817.001c.42-.023.627-.1.655-.14c.084-.123.146-.393.15-.8V12.75c0-.386.308-.7.689-.7ZM9.99 0c.38 0 .69.313.69.7l-.001 10.869l3.062-3.079a.682.682 0 0 1 .975.004a.707.707 0 0 1-.004.99l-4.356 4.38a.682.682 0 0 1-.973-.003l-4.296-4.38a.707.707 0 0 1 .002-.99a.682.682 0 0 1 .975.002L9.3 11.794V.699C9.3.313 9.61 0 9.99 0Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
