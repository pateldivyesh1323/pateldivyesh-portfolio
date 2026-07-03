import React from "react";
import fs from "fs";
import path from "path";

/**
 * Full-bleed hero background image that fades smoothly into the page
 * background at its bottom edge. Expects the artwork at
 * /public/Images/hero-bg.jpg — until that file exists, renders nothing.
 */
const HeroBackdrop = (): React.ReactElement | null => {
    const hasImage = fs.existsSync(
        path.join(process.cwd(), "public", "Images", "hero-bg.jpg"),
    );
    if (!hasImage) return null;

    // Fade the whole backdrop (artwork + scrim) to transparent over a long,
    // gradual span. Because it goes to *transparent* — not a solid color — the
    // page background and its texture show through progressively, so there is
    // no seam where the image ends.
    const fade =
        "linear-gradient(to bottom, black 0%, black 52%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.2) 85%, transparent 100%)";

    return (
        <div
            aria-hidden
            className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[115vh] z-0 overflow-hidden pointer-events-none"
            style={{ maskImage: fade, WebkitMaskImage: fade }}
        >
            {/* Artwork */}
            <div className="absolute inset-0 bg-[url('/Images/hero-bg.jpg')] bg-cover bg-top" />
            {/* Scrim so hero text stays readable over the artwork */}
            <div className="absolute inset-0 bg-bg/55 dark:bg-bg/50" />
        </div>
    );
};

export default HeroBackdrop;
