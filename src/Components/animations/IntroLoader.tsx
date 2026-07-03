"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const greetings = [
    "Hello",
    "નમસ્તે",
    "नमस्ते",
    "Bonjour",
    "こんにちは",
    "Hola",
];

const EXIT_EASE = [0.76, 0, 0.24, 1] as const;

type Phase = "words" | "exit" | "done";

const IntroLoader = (): React.ReactElement | null => {
    const [phase, setPhase] = useState<Phase>("words");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (
            sessionStorage.getItem("intro-seen") ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            setPhase("done");
        }
    }, []);

    useEffect(() => {
        if (phase !== "words") return;
        if (index === greetings.length - 1) {
            const t = setTimeout(() => setPhase("exit"), 520);
            return () => clearTimeout(t);
        }
        const t = setTimeout(
            () => setIndex((i) => i + 1),
            index === 0 ? 500 : 320,
        );
        return () => clearTimeout(t);
    }, [phase, index]);

    useEffect(() => {
        if (phase === "done") return;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, [phase]);

    if (phase === "done") return null;

    return (
        <>
            <motion.div
                aria-hidden
                className="intro-overlay fixed inset-0 z-190 bg-accent"
                initial={false}
                animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
                transition={{ duration: 0.65, delay: 0.14, ease: EXIT_EASE }}
                onAnimationComplete={() => {
                    if (phase === "exit") {
                        sessionStorage.setItem("intro-seen", "1");
                        setPhase("done");
                    }
                }}
            />

            <motion.div
                className="intro-overlay fixed inset-0 z-200 bg-bg flex items-center justify-center"
                initial={false}
                animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
                transition={{ duration: 0.65, ease: EXIT_EASE }}
            >
                <div className="flex items-baseline gap-1">
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={index}
                            className="font-display uppercase tracking-tight text-5xl md:text-7xl text-text leading-none"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.12, ease: "easeOut" },
                            }}
                            exit={{
                                opacity: 0,
                                y: -8,
                                transition: { duration: 0.08, ease: "easeIn" },
                            }}
                        >
                            {greetings[index]}
                        </motion.span>
                    </AnimatePresence>
                    <span className="text-accent font-display text-5xl md:text-7xl leading-none">
                        .
                    </span>
                </div>
            </motion.div>
        </>
    );
};

export default IntroLoader;
