import React from "react";
import SectionHeader from "./SectionHeader";

type SectionHeaderRowProps = {
    eyebrow: string;
    title: string;
    subtitle?: string;
    no?: string;
    action?: React.ReactNode;
};

const SectionHeaderRow = ({
    eyebrow,
    title,
    subtitle,
    no,
    action,
}: SectionHeaderRowProps): React.ReactElement => {
    return (
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-10 border-b border-ink/15 pb-4">
            <SectionHeader
                eyebrow={eyebrow}
                title={title}
                subtitle={subtitle}
                no={no}
                divider={false}
                className="mb-0"
            />
            {action && <div className="sm:pb-1">{action}</div>}
        </div>
    );
};

export default SectionHeaderRow;
