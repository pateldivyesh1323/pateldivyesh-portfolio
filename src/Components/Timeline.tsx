const timeLine = [
    {
        date: "October, 2023/2024",
        event: "Hacktoberfest",
        description: "Participated in open source contributions",
    },
    {
        date: "November, 2023",
        event: "MLH November long hackathon",
        description:
            "Participated in month-long hackathon building innovative projects",
    },
    {
        date: "9th February, 2024",
        event: "Jumble programming by Silver oak university",
        description:
            "Secured runner-up position in competitive programming contest",
    },
    {
        date: "11th April, 2025 - 27th April, 2025",
        event: "Hackhazards'2025 - The Namespace Community",
        description:
            "Participated in hackathon organized by The Namespace Community",
    },
    {
        date: "20th September, 2025",
        event: "Devhacks S2",
        description:
            "Participated in hackathon organized but the devlabs team at ASU",
    },
];

export default function Timeline() {
    return (
        <div className="flex items-center justify-center flex-col gap-3 my-6 md:my-8 px-4 md:px-0">
            <div className="font-bold text-base md:text-lg text-gray-900 dark:text-white">
                Timeline
            </div>
            <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead className="hidden md:table-header-group">
                        <tr className="border-b border-gray-300 dark:border-gray-700">
                            <th className="text-left py-2 px-3 text-[10px] md:text-xs font-semibold text-gray-700 dark:text-gray-300">
                                Date
                            </th>
                            <th className="text-left py-2 px-3 text-[10px] md:text-xs font-semibold text-gray-700 dark:text-gray-300">
                                Event
                            </th>
                            <th className="text-left py-2 px-3 text-[10px] md:text-xs font-semibold text-gray-700 dark:text-gray-300">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {timeLine.map((item, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-200 dark:border-gray-800 hover:bg-white/50 dark:hover:bg-gray-800/30 transition-colors duration-300"
                            >
                                <td className="py-2 px-3 text-[10px] md:text-xs text-gray-500 dark:text-gray-400 align-top md:align-middle whitespace-nowrap">
                                    {item.date}
                                </td>
                                <td className="py-2 px-3 text-[10px] md:text-xs text-[#DC2626] font-semibold align-top md:align-middle">
                                    {item.event}
                                </td>
                                <td className="py-2 px-3 text-[10px] md:text-xs text-gray-600 dark:text-gray-300 align-top md:align-middle">
                                    {item.description}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
