import React from "react"

const Navbar = (): React.ReactElement => {
    return (
        <div className="fixed top-0 w-full h-20 bg-[#041421] text-[#E4E4E4] flex items-center justify-between px-8 sm:px-16 shadow-2xl">
            <div className="font-bold text-lg"><a href="/">Divyesh Patel</a></div>
            <div>
                <ul className="lg:flex flex-row gap-10 hidden">
                    <li className="hover:text-[#86b9b0] transition duration-300"><a href="#">Home</a></li>
                    <li className="hover:text-[#86b9b0] transition duration-300"><a href="#">Skills</a></li>
                    <li className="hover:text-[#86b9b0] transition duration-300"><a href="#">Projects</a></li>
                    <li className="hover:text-[#86b9b0] transition duration-300"><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
