"use client";

import React from "react";
import Image from "next/image";
import Socials from "./Socials";

const Home = (): React.ReactElement => {
    return (
        <section className="min-h-[85vh] flex items-center py-12 md:py-16">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className="order-2 md:order-1">
                    <p className="section-eyebrow mb-4">
                        Software Developer · Arizona, USA
                    </p>
                    <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text)] tracking-tight leading-[1.05]">
                        Divyesh Patel
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-[var(--color-muted)] leading-relaxed max-w-md">
                        22, Software Developer
                        <br />
                        Arizona, USA
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-8">
                        <Socials />
                        <a
                            href="/pateldivyesh.pdf"
                            download="pateldivyesh.pdf"
                            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-all duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                            >
                                <rect width="24" height="24" fill="none" />
                                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                            </svg>
                            Download Resume
                        </a>
                    </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                    <div className="relative w-[220px] h-[280px] md:w-[280px] md:h-[340px] rounded-3xl overflow-hidden shadow-xl shadow-black/10 dark:shadow-black/40 bg-[var(--color-surface)]">
                        <Image
                            className="w-full h-full object-cover"
                            src="/Images/PatelDivyesh-square.jpg"
                            alt="Divyesh Patel"
                            width={280}
                            height={340}
                            placeholder="blur"
                            blurDataURL="/Images/PatelDivyesh-square.jpg"
                            loading="eager"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
