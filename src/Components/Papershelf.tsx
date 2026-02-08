import React from "react";
import Link from "next/link";
import { papersData } from "@/data";

const Papershelf = (): React.ReactElement => {
    const featuredPapers = papersData.slice(0, 7);

    return (
        <div className="px-4 md:px-0">
            <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                    <h2 className="font-bold text-base md:text-lg text-gray-900 dark:text-white">
                        Papershelf
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Papers I&apos;ve read
                    </p>
                </div>
                <Link
                    href="/papershelf"
                    className="self-start sm:self-auto text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                    View All Papers
                </Link>
            </div>
            <ul className="w-full list-disc list-inside space-y-1 md:space-y-2">
                {featuredPapers.map((paper) => (
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
    );
};

export default Papershelf;
