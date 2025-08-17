import React, { useState } from "react";
import Socials from "./Socials";
import toast from "react-hot-toast";

const Contact = (): React.ReactElement => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const accessKey = "5914c77c-09f6-4155-ab85-a2a9a8640c5d";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    access_key: accessKey,
                }),
            });
            toast.success("I'll be in touch soon");
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            toast.error("Failed to send message");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center flex-col gap-6 md:gap-8 my-8 md:my-12 px-4 md:px-0">
            <h2 className="font-bold text-base md:text-lg text-gray-900 dark:text-white">
                Contact
            </h2>
            <div className="w-full flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12">
                <div className="w-full md:w-2/5 space-y-4 md:space-y-6">
                    <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-relaxed">
                        "I believe in creating software that not only works
                        flawlessly but also makes a positive impact. Let's
                        collaborate and build something amazing together."
                    </p>
                    <div className="space-y-3 md:space-y-4">
                        <a
                            href="mailto:pateldivyesh1323@gmail.com"
                            className="block text-xs md:text-sm text-gray-600 dark:text-gray-300 hover:text-[#FFA500] transition-colors duration-300"
                        >
                            pateldivyesh1323@gmail.com
                        </a>
                        <div className="md:mt-4">
                            <Socials />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-3/5">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-3 md:space-y-4"
                    >
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-full px-3 md:px-4 py-1.5 md:py-2 text-sm bg-white dark:bg-neutral-950 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FFA500] transition-all duration-300"
                        />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full px-3 md:px-4 py-1.5 md:py-2 text-sm bg-white dark:bg-neutral-950 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FFA500] transition-all duration-300"
                        />
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows={4}
                            name="message"
                            placeholder="Message"
                            className="w-full px-3 md:px-4 py-1.5 md:py-2 text-sm bg-white dark:bg-neutral-950 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FFA500] transition-all duration-300"
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-1.5 md:py-2 text-sm bg-[#FFA500] text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isLoading ? (
                                <>
                                    <svg
                                        className="animate-spin h-4 w-4 md:h-5 md:w-5 mr-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            fill="none"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        />
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
