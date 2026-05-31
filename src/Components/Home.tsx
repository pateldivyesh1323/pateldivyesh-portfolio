"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Socials from "./Socials";
import { btnSecondary } from "@/lib/ui";

const Home = (): React.ReactElement => {
    return (
        <section className="min-h-[85vh] flex items-center py-12 md:py-16">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className="order-2 md:order-1">
                    <motion.p
                        className="section-eyebrow mb-4"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Software Developer · Arizona, USA
                    </motion.p>
                    <motion.h1
                        className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="text-gradient">Divyesh Patel</span>
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-base md:text-lg text-muted leading-relaxed max-w-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                    >
                        22, Software Developer
                        <br />
                        Arizona, USA
                    </motion.p>
                    <motion.div
                        className="flex flex-wrap items-center gap-3 mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Socials />
                        <a
                            href="/pateldivyesh.pdf"
                            download="pateldivyesh.pdf"
                            className={btnSecondary}
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
                    </motion.div>
                </div>
                <motion.div
                    className="order-1 md:order-2 flex justify-center md:justify-end"
                    initial={{ opacity: 0, scale: 0.92, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.25,
                        ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                >
                    <div className="relative w-[220px] h-[280px] md:w-[280px] md:h-[340px] rounded-2xl overflow-hidden shadow-xl shadow-accent/20 bg-surface ring-1 ring-accent/20">
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
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
