const experiences = [
    {
        role: "Software Engineer Intern",
        company: "Caring Click",
        location: "Ahmedabad, India",
        duration: "March 2024 - August 2024",
        description:
            "Sole developer responsible for designing and implementing the company's website using Next.js and Firebase, ensuring alignment with best practices.",
    },
];

export default function Work() {
    return (
        <div className="flex items-center justify-center flex-col gap-4 my-8 md:my-12 px-4 md:px-0">
            <h2 className="text-lg md:text-xl font-semibold">Work</h2>
            <div className="w-full space-y-4 md:space-y-6">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="border border-gray-700 rounded-lg p-4 md:p-6 hover:border-[#FFA500] transition-colors duration-300"
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-0 mb-2">
                            <div>
                                <h3 className="text-[#FFA500] font-semibold text-base md:text-lg">
                                    {exp.role}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-300">
                                    {exp.company} • {exp.location}
                                </p>
                            </div>
                            <span className="text-xs md:text-sm text-gray-400 order-first md:order-none">
                                {exp.duration}
                            </span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-300 mt-3 md:mt-4 leading-relaxed">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
