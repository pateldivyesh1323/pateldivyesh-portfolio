const experiences = [
    {
        role: "Full-Stack Developer Intern",
        company: "RealList AI",
        location: "Remote",
        duration: "December 2024 - June 2025",
        description:
            "Developed and enhanced features such as Construction Management, CRM, and Listings for a Real Estate platform.",
    },
    {
        role: "Software Engineer Intern",
        company: "Caring Click",
        location: "Ahmedabad, India",
        duration: "March 2024 - August 2024",
        description:
            "Sole developer responsible for designing and implementing the financial advisory services company's online presence.",
    },
];

export default function Work() {
    return (
        <div className="flex items-center justify-center flex-col gap-4 my-8 md:my-12 px-4 md:px-0">
            <h2 className="font-bold text-base md:text-lg text-gray-900 dark:text-white">
                Work
            </h2>
            <div className="w-full">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="p-4 md:p-6 transition-colors duration-300"
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-0 mb-2">
                            <div>
                                <h3 className="text-[#DC2626] font-semibold text-base md:text-lg">
                                    {exp.role}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                                    {exp.company} • {exp.location}
                                </p>
                            </div>
                            <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 order-first md:order-0">
                                {exp.duration}
                            </span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-3 md:mt-4 leading-relaxed">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
