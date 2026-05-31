"use client";

import React, { useEffect, useState } from "react";

type TypewriterProps = {
    words: string[];
    className?: string;
    typingSpeed?: number;
    deletingSpeed?: number;
    pause?: number;
};

/**
 * Cycles through `words`, typing and deleting each one with a blinking caret.
 */
const Typewriter = ({
    words,
    className = "",
    typingSpeed = 80,
    deletingSpeed = 40,
    pause = 1500,
}: TypewriterProps): React.ReactElement => {
    const [index, setIndex] = useState(0);
    const [sub, setSub] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = words[index] ?? "";

        if (!deleting && sub === current.length) {
            const t = setTimeout(() => setDeleting(true), pause);
            return () => clearTimeout(t);
        }

        if (deleting && sub === 0) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const t = setTimeout(
            () => setSub((prev) => prev + (deleting ? -1 : 1)),
            deleting ? deletingSpeed : typingSpeed,
        );
        return () => clearTimeout(t);
    }, [sub, deleting, index, words, typingSpeed, deletingSpeed, pause]);

    return (
        <span className={className}>
            <span className="text-gradient font-medium">
                {(words[index] ?? "").substring(0, sub)}
            </span>
            <span className="ml-0.5 inline-block w-[2px] h-[1.05em] translate-y-[0.18em] bg-accent animate-pulse" />
        </span>
    );
};

export default Typewriter;
