import React from "react";
import { papersData } from "@/data";
import SectionHeaderRow from "./SectionHeaderRow";
import { PaperLinkRow, ViewAllLink } from "./PaperLinkRow";
import { StaggerContainer, StaggerItem } from "./animations/Stagger";

const Papershelf = (): React.ReactElement => {
    const featuredPapers = papersData.slice(0, 7);

    return (
        <div className="w-full">
            <SectionHeaderRow
                eyebrow="Reading"
                title="Papershelf"
                no="03"
                subtitle="Papers I've read"
                action={
                    <ViewAllLink href="/papershelf" label="View All Papers →" />
                }
            />
            <StaggerContainer className="flex flex-col">
                {featuredPapers.map((paper) => (
                    <StaggerItem key={paper.title}>
                        <PaperLinkRow title={paper.title} link={paper.link} />
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </div>
    );
};

export default Papershelf;
