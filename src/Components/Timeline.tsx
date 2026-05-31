import { timeLineData } from "@/data";
import SectionHeader from "./SectionHeader";

export default function Timeline() {
    const items = timeLineData.filter((item) => item.date);

    return (
        <div className="w-full">
            <SectionHeader eyebrow="Journey" title="Timeline" />
            <div className="relative pl-6 md:pl-8">
                <div
                    className="absolute left-[5px] md:left-[7px] top-2 bottom-2 w-px bg-border"
                    aria-hidden
                />
                <div className="flex flex-col gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="relative">
                            <div
                                className="absolute -left-6 md:-left-8 top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-bg"
                                aria-hidden
                            />
                            <div className="pl-4 md:pl-6">
                                <p className="text-xs text-muted mb-1">
                                    {item.date}
                                </p>
                                <p className="font-display font-semibold text-sm md:text-base text-text mb-1">
                                    {item.event}
                                </p>
                                <p className="text-sm text-muted leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
