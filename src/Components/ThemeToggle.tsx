import React from "react";
import { useTheme } from "../Context/ThemeContext";
import { SunIcon, MoonIcon } from "./ThemeIcons";

const ThemeToggle: React.FC = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-[#FFA500]/10 hover:bg-[#FFA500]/20 transition-all duration-300"
            aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
        >
            {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
    );
};

export default ThemeToggle;
