import Link from "next/link";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import SectionHeader from "@/Components/SectionHeader";
import { papersData } from "@/data";

export default function PapershelfPage() {
    return (
        <div className="relative transition-colors duration-300 min-h-screen">
            <Navbar />
            <main className="max-w-5xl mx-auto px-6 pt-20 md:pt-24 pb-12">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 md:mb-10">
                    <SectionHeader
                        eyebrow="Reading"
                        title="Papershelf"
                        subtitle="Papers I've read"
                    />
                    <Link
                        href="/"
                        className="shrink-0 text-sm font-medium text-[var(--color-text)] hover:opacity-70 transition-opacity sm:mb-2"
                    >
                        ← Back to Home
                    </Link>
                </div>
                <div className="flex flex-col gap-2">
                    {papersData.map((paper) => (
                        <a
                            key={paper.title}
                            href={paper.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-4 px-5 py-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-bg)] transition-all duration-300"
                        >
                            <span className="text-sm md:text-base text-[var(--color-text)] group-hover:opacity-80 transition-opacity">
                                {paper.title}
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 shrink-0 text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                            </svg>
                        </a>
                    ))}
                </div>
                <div className="mt-16">
                    <Footer />
                </div>
            </main>
        </div>
    );
}
