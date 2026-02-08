import { timeLineData } from "@/data";

export default function Timeline() {
    return (
        <div className="flex items-center justify-center flex-col gap-3 px-4 md:px-0">
            <div className="font-bold text-base md:text-lg text-gray-900 dark:text-white">
                Timeline
            </div>
            <div className="w-full overflow-x-auto">
                <div className="block md:hidden">
                    {timeLineData.map(
                        (item, index) =>
                            item.date && (
                                <div
                                    key={index}
                                    className="border-b border-gray-200 dark:border-gray-800 py-3 px-2 hover:bg-white/50 dark:hover:bg-gray-800/30 transition-colors duration-300"
                                >
                                    <div className="flex flex-col gap-1">
                                        <div className="flex flex-wrap items-baseline gap-2">
                                            <span className="text-[10px] text-gray-500 dark:text-gray-400">
                                                {item.date}
                                            </span>
                                            <span className="text-[10px] text-[#DC2626] font-semibold">
                                                {item.event}
                                            </span>
                                        </div>
                                        <div className="text-[10px] text-gray-600 dark:text-gray-300 mt-1">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            ),
                    )}
                </div>
                <table className="hidden md:table w-full border-collapse">
                    <thead>
                        <tr className="border-b border-gray-300 dark:border-gray-700">
                            <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700 dark:text-gray-300">
                                Date
                            </th>
                            <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700 dark:text-gray-300">
                                Event
                            </th>
                            <th className="text-left py-2 px-3 text-xs font-semibold text-gray-700 dark:text-gray-300">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {timeLineData.map(
                            (item, index) =>
                                item.date && (
                                    <tr
                                        key={index}
                                        className="border-b border-gray-200 dark:border-gray-800 hover:bg-white/50 dark:hover:bg-gray-800/30 transition-colors duration-300"
                                    >
                                        <td className="py-2 px-3 text-xs text-gray-500 dark:text-gray-400 align-middle">
                                            {item.date}
                                        </td>
                                        <td className="py-2 px-3 text-xs text-[#DC2626] font-semibold align-middle">
                                            {item.event}
                                        </td>
                                        <td className="py-2 px-3 text-xs text-gray-600 dark:text-gray-300 align-middle">
                                            {item.description}
                                        </td>
                                    </tr>
                                ),
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
