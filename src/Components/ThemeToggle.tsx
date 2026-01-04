import React from "react";
import { useTheme } from "../Context/ThemeContext";
import { SunIcon, MoonIcon } from "./ThemeIcons";

const ThemeToggle: React.FC = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <button
            onClick={toggleDarkMode}
            className={`p-2 transition-all duration-300 ${
                darkMode
                    ? "bg-neutral-100/80 hover:bg-neutral-100"
                    : "bg-[#DC2626]/10 hover:bg-[#DC2626]/20"
            }`}
            aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
        >
            {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
    );
};

export default ThemeToggle;
