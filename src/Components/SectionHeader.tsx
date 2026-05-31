import React from "react";

type SectionHeaderProps = {
    eyebrow: string;
    title: string;
    subtitle?: string;
};

const SectionHeader = ({
    eyebrow,
    title,
    subtitle,
}: SectionHeaderProps): React.ReactElement => {
    return (
        <div className="mb-8 md:mb-10">
            <p className="section-eyebrow mb-2">{eyebrow}</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-text)] tracking-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-2 text-sm text-[var(--color-muted)] max-w-xl">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
