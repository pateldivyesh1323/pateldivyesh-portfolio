export default function Timeline() {

    const timeLine = [
        {
            date: "October, 2023",
            event: "Hacktoberfest"
        },
        {
            date: "November, 2023",
            event: "MLH November long hackathon"
        },
        {
            date: "9th February, 2024",
            event: "Jumble programming by Silver oak university(Runner ups)"
        }
    ]

    return (
        <div className="flex items-center justify-center flex-col gap-8 mx-8 mt-12 md:min-h-screen">
            <div className='font-bold text-lg underline'>
                Timeline
            </div>
            <table className="table-auto border border-spacing-2 border-collapse md:text-lg text-xs">
                <thead>
                    <tr>
                        <th className="border p-4">Date</th>
                        <th className="border p-4">Event</th>
                    </tr>
                </thead>
                <tbody>
                    {timeLine.map((event, index) => {
                        return (
                            <tr key={index}>
                                <td className="border p-4">{event.date}</td>
                                <td className="border p-4">{event.event}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}