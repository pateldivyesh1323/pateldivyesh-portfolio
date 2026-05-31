"use client";

import React from "react";
import { useTheme } from "@/Context/ThemeContext";
import { SunIcon, MoonIcon } from "@/Components/ThemeIcons";
import { iconButton } from "@/lib/ui";

const ThemeToggle: React.FC = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <button
            onClick={toggleDarkMode}
            className={`p-2 ${iconButton}`}
            aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
        >
            {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
    );
};

export default ThemeToggle;
