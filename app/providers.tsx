"use client";

import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/Context/ThemeContext";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <Toaster />
            <div className="grain-overlay" aria-hidden="true" />
            {children}
        </ThemeProvider>
    );
}
