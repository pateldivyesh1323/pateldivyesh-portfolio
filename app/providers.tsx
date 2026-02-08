"use client";

import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/Context/ThemeContext";
import ParticleBackground from "@/Components/ParticleBackground";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <Toaster />
            {children}
            <ParticleBackground />
        </ThemeProvider>
    );
}
