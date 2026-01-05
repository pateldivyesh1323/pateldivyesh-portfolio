import { experienceData } from "../data";

export default function Work() {
    return (
        <div className="flex items-center justify-center flex-col gap-4 my-8 md:my-12 px-4 md:px-0">
            <h2 className="font-bold text-base md:text-lg text-gray-900 dark:text-white">
                Work
            </h2>
            <div className="w-full">
                {experienceData.map((exp, index) => (
                    <div
                        key={index}
                        className="py-4 md:py-6 transition-colors duration-300"
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
                            <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                {exp.duration}
                            </span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-3 md:mt-4 leading-relaxed text-justify">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
