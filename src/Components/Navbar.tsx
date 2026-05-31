"use client";

import React, { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { href: "/#work", label: "Work" },
    { href: "/projects", label: "Projects" },
    { href: "/#papershelf", label: "Papershelf" },
    { href: "/#timeline", label: "Timeline" },
    { href: "/#skills", label: "Skills" },
    { href: "/#contact", label: "Contact" },
];

const Navbar = (): React.ReactElement => {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
            <nav className="max-w-5xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between gap-4">
                <Link
                    href="/"
                    className="font-display font-semibold text-[var(--color-text)] shrink-0 hover:opacity-70 transition-opacity"
                >
                    Divyesh Patel
                </Link>
                <div className="hidden lg:flex items-center gap-6 text-sm text-[var(--color-muted)]">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="hover:text-[var(--color-text)] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <div className="flex items-center gap-2 md:gap-3 shrink-0">
                    <ThemeToggle />
                    <a
                        href="/pateldivyesh.pdf"
                        download="pateldivyesh.pdf"
                        className="hidden sm:inline-flex items-center px-4 py-1.5 text-xs font-medium rounded-full bg-[var(--color-accent)] text-[var(--color-bg)] hover:opacity-90 transition-opacity"
                    >
                        Resume
                    </a>
                    <button
                        type="button"
                        className="lg:hidden p-2 text-[var(--color-text)]"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                        aria-expanded={open}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
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
                <div className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-4 flex flex-col gap-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/pateldivyesh.pdf"
                        download="pateldivyesh.pdf"
                        className="sm:hidden inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-full bg-[var(--color-accent)] text-[var(--color-bg)]"
                    >
                        Resume
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
