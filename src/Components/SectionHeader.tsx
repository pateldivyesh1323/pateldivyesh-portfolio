import React from "react";

type SectionHeaderProps = {
    eyebrow: string;
    title: string;
    subtitle?: string;
    className?: string;
};

const SectionHeader = ({
    eyebrow,
    title,
    subtitle,
    className = "",
}: SectionHeaderProps): React.ReactElement => {
    return (
        <div className={className || "mb-8 md:mb-10"}>
            <p className="section-eyebrow mb-2">
                <span className="h-px w-5 bg-accent/60" />
                {eyebrow}
            </p>
            <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                <span className="text-gradient">{title}</span>
            </h2>
            {subtitle && (
                <p className="mt-2 text-sm text-muted max-w-xl">{subtitle}</p>
            )}
        </div>
    );
};

export default SectionHeader;
