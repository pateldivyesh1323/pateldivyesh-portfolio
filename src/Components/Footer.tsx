import React from "react";
import Socials from "./Socials";

const BARCODE_BARS = [
    1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 1, 2, 3, 1, 2, 1, 4, 2, 1, 3,
];

const Footer = (): React.ReactElement => {
    return (
        <footer className="border-t border-dashed border-ink/30 pt-10 pb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                    <p className="font-display uppercase text-2xl tracking-tight text-text leading-none">
                        Divyesh Patel
                        <span className="text-accent">.</span>
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mt-2">
                        © {new Date().getFullYear()} · All rights reserved
                    </p>
                </div>
                <div className="flex items-center gap-6">
                    <span
                        className="hidden md:flex items-end gap-[2px] h-6 text-ink opacity-70"
                        aria-hidden
                    >
                        {BARCODE_BARS.map((w, i) => (
                            <span
                                key={i}
                                className="h-full bg-current"
                                style={{ width: `${w}px` }}
                            />
                        ))}
                    </span>
                    <Socials />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
