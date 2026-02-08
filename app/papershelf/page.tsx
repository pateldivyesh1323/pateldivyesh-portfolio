import Link from "next/link";
import { papersData } from "@/data";

export default function PapershelfPage() {
    return (
        <div className="relative transition-colors duration-300">
            <div className="max-w-3xl mx-auto relative py-8 md:py-12 px-4 md:px-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div>
                        <h1 className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white">
                            Papershelf
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Papers I&apos;ve read
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm w-fit"
                    >
                        Back to Home
                    </Link>
                </div>
                <ul className="w-full list-disc list-inside space-y-1 md:space-y-2">
                    {papersData.map((paper) => (
                        <li key={paper.title}>
                            <a
                                href={paper.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:underline text-sm md:text-base"
                            >
                                {paper.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
