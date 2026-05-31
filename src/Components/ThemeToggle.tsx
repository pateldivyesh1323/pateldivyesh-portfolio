"use client";

import React from "react";
import { useTheme } from "@/Context/ThemeContext";
import { SunIcon, MoonIcon } from "@/Components/ThemeIcons";

const ThemeToggle: React.FC = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-muted)]"
            aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
        >
            {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
    );
};

export default ThemeToggle;
