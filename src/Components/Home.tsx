"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Socials from "./Socials";
import Magnetic from "./animations/Magnetic";
import Typewriter from "./animations/Typewriter";
import { btnSecondary } from "@/lib/ui";

const BARCODE_BARS = [
    2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 1, 2, 3, 1, 2, 1, 4, 2, 1, 3, 1, 2,
];

const Home = (): React.ReactElement => {
    return (
        <section className="min-h-[78vh] flex items-center py-10 md:py-14">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className="order-2 md:order-1">
                    <motion.p
                        className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted mb-6"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                        </span>
                        Software Developer · Arizona, USA
                    </motion.p>
                    <motion.h1
                        className="font-display uppercase text-7xl md:text-8xl lg:text-9xl leading-[0.86] tracking-tight"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="block text-text">Divyesh</span>
                        <span className="block text-accent">
                            Patel
                            <svg
                                viewBox="0 0 24 24"
                                className="inline-block w-[0.45em] h-[0.45em] ml-3 -translate-y-[0.35em] text-accent"
                                fill="currentColor"
                                aria-hidden
                            >
                                <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6L12 0z" />
                            </svg>
                        </span>
                    </motion.h1>
                    <motion.p
                        className="mt-5 font-mono text-sm md:text-base text-text h-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.32 }}
                    >
                        <span className="text-accent">&gt;</span> I build{" "}
                        <Typewriter
                            words={[
                                "AI Powered Tools",
                                "Full-Stack Apps",
                                "Low-level Systems",
                                "Delightful UIs",
                                "Cool Stuff",
                            ]}
                        />
                    </motion.p>
                    <motion.p
                        className="mt-4 text-base text-muted leading-relaxed max-w-md border-l-2 border-accent pl-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.42 }}
                    >
                        22, software developer based in Arizona, USA, currently
                        pursuing a master&apos;s in computer science.
                    </motion.p>
                    <motion.div
                        className="flex flex-wrap items-center gap-3 mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Socials />
                        <Magnetic>
                            <a
                                href="/pateldivyesh.pdf"
                                download="pateldivyesh.pdf"
                                className={btnSecondary}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                >
                                    <rect width="24" height="24" fill="none" />
                                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                                </svg>
                                Resume
                            </a>
                        </Magnetic>
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
                    <motion.div
                        className="relative rotate-2"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        {/* Ticket-stub photo frame */}
                        <div className="relative rounded-md bg-surface p-2 pb-0 shadow-xl shadow-black/20">
                            <div className="relative w-[200px] h-[250px] md:w-[250px] md:h-[310px] rounded-[3px] overflow-hidden bg-surface">
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
                            {/* Perforation + barcode strip — width pinned to
                                the photo so it can never stretch the frame */}
                            <div className="flex w-[200px] md:w-[250px] items-center justify-between gap-3 overflow-hidden border-t border-dashed border-ink/30 mt-2 px-1 py-2">
                                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted whitespace-nowrap">
                                    Admit One
                                </span>
                                <span
                                    className="flex items-end gap-[2px] h-4 text-ink"
                                    aria-hidden
                                >
                                    {BARCODE_BARS.slice(0, 14).map((w, i) => (
                                        <span
                                            key={i}
                                            className="h-full bg-current"
                                            style={{ width: `${w}px` }}
                                        />
                                    ))}
                                </span>
                                <span className="hidden md:inline font-mono text-[10px] uppercase tracking-[0.2em] text-accent whitespace-nowrap">
                                    N°1323
                                </span>
                            </div>
                        </div>
                        {/* Rotated sticker badge */}
                        <span className="absolute -top-4 -left-6 -rotate-6 rounded-[3px] bg-accent text-accent-foreground font-mono text-[10px] font-semibold uppercase tracking-[0.16em] px-2.5 py-1">
                            ★ Now Showing
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
