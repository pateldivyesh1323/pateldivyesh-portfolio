import React from "react";

type SectionHeaderProps = {
    eyebrow: string;
    title: string;
    subtitle?: string;
    /** Poster index printed before the eyebrow, e.g. "01". */
    no?: string;
    /** Hard rule under the header. Disable when a wrapper draws its own. */
    divider?: boolean;
    className?: string;
};

const SectionHeader = ({
    eyebrow,
    title,
    subtitle,
    no,
    divider = true,
    className = "",
}: SectionHeaderProps): React.ReactElement => {
    return (
        <div
            className={`${className || "mb-8 md:mb-10"} ${
                divider ? "border-b border-ink/15 pb-4" : ""
            }`}
        >
            <p className="section-eyebrow mb-1">
                {no && <span className="text-accent/70">{no}</span>}
                <span className="h-[2px] w-5 bg-accent" />
                {eyebrow}
            </p>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight leading-none text-text">
                {title}
                <span className="text-accent">.</span>
            </h2>
            {subtitle && (
                <p className="mt-2 text-sm text-muted max-w-xl">{subtitle}</p>
            )}
        </div>
    );
};

export default SectionHeader;
