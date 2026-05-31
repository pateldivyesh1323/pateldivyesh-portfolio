import React from "react";
import SectionHeader from "./SectionHeader";

type SectionHeaderRowProps = {
    eyebrow: string;
    title: string;
    subtitle?: string;
    action?: React.ReactNode;
};

const SectionHeaderRow = ({
    eyebrow,
    title,
    subtitle,
    action,
}: SectionHeaderRowProps): React.ReactElement => {
    return (
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-10">
            <SectionHeader
                eyebrow={eyebrow}
                title={title}
                subtitle={subtitle}
                className="mb-0"
            />
            {action}
        </div>
    );
};

export default SectionHeaderRow;
