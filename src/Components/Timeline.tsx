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
        <div className="flex items-center justify-center flex-col gap-4 my-8 md:my-12 px-4 md:px-0">
            <div className="font-bold text-base md:text-lg text-gray-900 dark:text-white">
                Timeline
            </div>
            <div className="w-full space-y-4">
                {timeLine.map((item, index) => (
                    <div
                        key={index}
                        className="gap-1 md:gap-4 p-3 transition-colors duration-300 bg-white/75 dark:bg-transparent"
                    >
                        <div className="flex justify-between gap-1 md:gap-4">
                            <h3 className="text-[#DC2626] font-semibold text-sm md:text-base">
                                {item.event}
                            </h3>
                            <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-1 md:mb-0 md:pt-0.5">
                                {item.date}
                            </div>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-0.5 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
