import Link from "next/link";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import SectionHeaderRow from "@/Components/SectionHeaderRow";
import { PaperLinkRow } from "@/Components/PaperLinkRow";
import { papersData } from "@/data";
import { btnGhost } from "@/lib/ui";

export default function PapershelfPage() {
    return (
        <div className="relative transition-colors duration-300 min-h-screen">
            <Navbar />
            <main className="max-w-5xl mx-auto px-6 pt-20 md:pt-24 pb-12 relative z-10">
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
                <div className="flex flex-col gap-2">
                    {papersData.map((paper) => (
                        <PaperLinkRow
                            key={paper.title}
                            title={paper.title}
                            link={paper.link}
                        />
                    ))}
                </div>
                <div className="mt-16">
                    <Footer />
                </div>
            </main>
        </div>
    );
}
