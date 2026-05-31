export const btnPrimary =
    "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-full text-accent-foreground bg-gradient-to-r from-highlight via-accent to-accent-muted bg-[length:200%_auto] shadow-sm shadow-accent/25 hover:shadow-md hover:shadow-accent/30 hover:bg-[position:100%_center] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed";

export const btnSecondary =
    "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-full border border-accent/25 text-text bg-surface/50 backdrop-blur-sm hover:border-accent/50 hover:bg-accent-soft hover:text-accent transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent";

export const btnGhost =
    "inline-flex items-center gap-1 text-sm font-medium text-text hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full";

export const cardSurface =
    "rounded-2xl border border-border bg-surface/80 backdrop-blur-sm hover:border-accent/30 transition-colors duration-300";

export const inputField =
    "w-full px-4 py-2.5 text-sm rounded-xl bg-bg/60 text-text border border-border focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/50 transition-all duration-300";

export const listRow =
    "group flex items-center justify-between gap-4 px-5 py-4 rounded-2xl border border-border bg-surface/80 backdrop-blur-sm hover:bg-accent-soft hover:border-accent/30 transition-all duration-300";

export const pillTag =
    "px-2.5 py-1 rounded-full text-xs font-medium text-accent bg-accent-soft border border-accent/20 hover:border-accent/40 transition-colors duration-200";

export const pillFilterBase =
    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent";

export const pillFilterActive = `${pillFilterBase} text-accent-foreground bg-gradient-to-r from-highlight via-accent to-accent-muted shadow-md shadow-accent/30`;

export const pillFilterInactive = `${pillFilterBase} bg-surface/70 text-muted border border-border hover:text-accent hover:border-accent/40`;

export const iconButton =
    "flex items-center justify-center rounded-full border border-border text-text hover:border-accent/40 hover:bg-accent-soft hover:text-accent transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent";

export const linkAccent =
    "text-xs text-muted hover:text-accent transition-colors duration-300";
