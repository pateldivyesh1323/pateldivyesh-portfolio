import { timeLineData } from "@/data";
import SectionHeader from "./SectionHeader";

export default function Timeline() {
    const items = timeLineData.filter((item) => item.date);

    return (
        <div className="w-full">
            <SectionHeader eyebrow="Journey" title="Timeline" />
            <div className="relative">
                <div
                    className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-highlight via-accent-muted to-accent-2"
                    aria-hidden
                />
                <div className="flex flex-col gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="group relative pl-8">
                            <div
                                className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-gradient-to-tr from-highlight to-accent-2 ring-4 ring-bg shadow-sm shadow-accent/30 transition-transform duration-300 group-hover:scale-110"
                                aria-hidden
                            />
                            <div className="transition-transform duration-300 group-hover:translate-x-1">
                                <p className="text-xs text-accent font-medium mb-1">
                                    {item.date}
                                </p>
                                <p className="font-display font-medium text-sm md:text-base text-text mb-1">
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
