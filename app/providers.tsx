"use client";

import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/Context/ThemeContext";
import GradientBackground from "@/Components/animations/GradientBackground";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <Toaster />
            <GradientBackground />
            <div className="grain-overlay pointer-events-none" aria-hidden="true" />
            {children}
        </ThemeProvider>
    );
}
