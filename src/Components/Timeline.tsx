import { timeLineData } from "@/data";
import SectionHeader from "./SectionHeader";

export default function Timeline() {
    const items = timeLineData.filter((item) => item.date);

    return (
        <div className="w-full">
            <SectionHeader eyebrow="Journey" title="Timeline" no="04" />
            <div className="relative">
                <div
                    className="absolute left-[7px] top-2 bottom-2 w-px bg-accent/40"
                    aria-hidden
                />
                <div className="flex flex-col gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="group relative pl-8">
                            <div
                                className="absolute left-[3px] top-2 w-2.5 h-2.5 rotate-45 bg-accent transition-transform duration-200 group-hover:rotate-135 group-hover:scale-110"
                                aria-hidden
                            />
                            <div className="transition-transform duration-300 group-hover:translate-x-1">
                                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent font-medium mb-1">
                                    {item.date}
                                </p>
                                <p className="font-display uppercase text-lg md:text-xl tracking-tight text-text leading-none mb-1">
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
