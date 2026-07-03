import Link from "next/link";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import SectionHeaderRow from "@/Components/SectionHeaderRow";
import { PaperLinkRow } from "@/Components/PaperLinkRow";
import FadeIn from "@/Components/animations/FadeIn";
import { papersData } from "@/data";
import { btnGhost } from "@/lib/ui";

export default function PapershelfPage() {
    return (
        <div className="relative transition-colors duration-300 min-h-screen">
            <Navbar />
            <main className="max-w-4xl mx-auto px-6 pt-20 md:pt-24 pb-12 relative z-10">
                <FadeIn>
                    <SectionHeaderRow
                        eyebrow="Reading"
                        title="Papershelf"
                        subtitle="Papers I've read"
                        action={
                            <Link href="/" className={`shrink-0 ${btnGhost}`}>
                                ← Back to Home
                            </Link>
                        }
                    />
                </FadeIn>
                <div className="flex flex-col">
                    {papersData.map((paper, index) => (
                        <FadeIn key={paper.title} delay={index * 0.06}>
                            <PaperLinkRow
                                title={paper.title}
                                link={paper.link}
                            />
                        </FadeIn>
                    ))}
                </div>
                <FadeIn>
                    <div className="mt-16">
                        <Footer />
                    </div>
                </FadeIn>
            </main>
        </div>
    );
}
