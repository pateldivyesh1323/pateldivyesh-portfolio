"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import ThemeToggle from "./ThemeToggle";
import Magnetic from "./animations/Magnetic";
import { btnPrimary } from "@/lib/ui";

const navLinks = [
    { href: "/#work", label: "Work" },
    { href: "/projects", label: "Projects" },
    { href: "/papershelf", label: "Papershelf" },
    { href: "/#timeline", label: "Timeline" },
    { href: "/#skills", label: "Skills" },
    { href: "/#contact", label: "Contact" },
];

const Navbar = (): React.ReactElement => {
    const [open, setOpen] = useState(false);

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 glass-nav"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            <nav className="max-w-4xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between gap-4">
                <Link
                    href="/"
                    className="font-display uppercase text-xl md:text-2xl tracking-tight text-text shrink-0 hover:text-accent transition-colors"
                >
                    Divyesh Patel
                    <span className="text-accent">©</span>
                </Link>
                <div className="hidden lg:flex items-center gap-5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="group relative hover:text-accent transition-colors"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-200 group-hover:w-full" />
                        </a>
                    ))}
                </div>
                <div className="flex items-center gap-2 md:gap-3 shrink-0">
                    <ThemeToggle />
                    <Magnetic className="hidden sm:inline-flex">
                        <a
                            href="/pateldivyesh.pdf"
                            download="pateldivyesh.pdf"
                            className={btnPrimary}
                        >
                            Resume
                        </a>
                    </Magnetic>
                    <button
                        type="button"
                        className="lg:hidden p-2 text-text rounded-[3px] hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                        aria-expanded={open}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            {open ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>
            {open && (
                <motion.div
                    className="lg:hidden border-t border-ink/15 bg-bg px-6 py-4 flex flex-col gap-3"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.25 }}
                >
                    {navLinks.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted hover:text-accent transition-colors"
                        >
                            <span className="text-accent mr-2">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/pateldivyesh.pdf"
                        download="pateldivyesh.pdf"
                        className={`sm:hidden ${btnPrimary}`}
                    >
                        Resume
                    </a>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Navbar;
