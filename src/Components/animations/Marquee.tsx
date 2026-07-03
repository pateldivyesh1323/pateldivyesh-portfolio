import React from "react";

type MarqueeProps = {
    items: string[];
    /** Seconds for one full loop. */
    duration?: number;
    /** "solid" = red band with paper text, "outline" = paper band with red text. */
    variant?: "solid" | "outline";
    className?: string;
};

const Star = () => (
    <svg
        viewBox="0 0 24 24"
        className="w-[0.8em] h-[0.8em] shrink-0"
        fill="currentColor"
        aria-hidden
    >
        <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6L12 0z" />
    </svg>
);

/**
 * A concert-poster ticker band: uppercase display text separated by stars,
 * scrolling on an infinite loop between hard ink rules.
 */
const Marquee = ({
    items,
    duration = 22,
    variant = "solid",
    className = "",
}: MarqueeProps): React.ReactElement => {
    const band =
        variant === "solid"
            ? "bg-accent text-accent-foreground"
            : "border-y border-ink/15 text-accent";

    const row = (hidden: boolean) => (
        <div
            className="flex items-center shrink-0"
            aria-hidden={hidden || undefined}
        >
            {items.map((item, i) => (
                <span
                    key={i}
                    className="flex items-center gap-4 px-4 font-display text-lg md:text-xl uppercase tracking-[0.08em] whitespace-nowrap"
                >
                    {item}
                    <Star />
                </span>
            ))}
        </div>
    );

    return (
        <div
            className={`overflow-hidden py-2 select-none ${band} ${className}`}
        >
            <div
                className="flex w-max"
                style={{ animation: `marquee ${duration}s linear infinite` }}
            >
                {row(false)}
                {row(true)}
            </div>
        </div>
    );
};

export default Marquee;
