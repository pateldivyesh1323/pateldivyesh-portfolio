import React from "react";
import { papersData } from "@/data";
import SectionHeaderRow from "./SectionHeaderRow";
import { PaperLinkRow, ViewAllLink } from "./PaperLinkRow";

const Papershelf = (): React.ReactElement => {
    const featuredPapers = papersData.slice(0, 7);

    return (
        <div className="w-full">
            <SectionHeaderRow
                eyebrow="Reading"
                title="Papershelf"
                subtitle="Papers I've read"
                action={
                    <ViewAllLink href="/papershelf" label="View All Papers →" />
                }
            />
            <div className="flex flex-col gap-2">
                {featuredPapers.map((paper) => (
                    <PaperLinkRow
                        key={paper.title}
                        title={paper.title}
                        link={paper.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Papershelf;
