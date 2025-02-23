const timeLine = [
    {
        date: "October, 2023",
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
];

export default function Timeline() {
    return (
        <div className="flex items-center justify-center flex-col gap-4 my-8 md:my-12 px-4 md:px-0">
            <div className="font-bold text-base md:text-lg">Timeline</div>
            <div className="w-full space-y-4">
                {timeLine.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-start gap-1 md:gap-4 p-3 rounded-lg border border-gray-700 hover:border-[#FFA500] transition-colors duration-300"
                    >
                        <div className="text-xs md:text-sm text-gray-400 mb-1 md:mb-0 md:pt-0.5">
                            {item.date}
                        </div>
                        <div>
                            <h3 className="text-[#FFA500] font-semibold text-sm md:text-base">
                                {item.event}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-300 mt-0.5 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
