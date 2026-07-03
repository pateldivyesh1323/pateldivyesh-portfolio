"use client";

import React, { useState } from "react";
import Socials from "./Socials";
import toast from "react-hot-toast";
import SectionHeader from "./SectionHeader";
import { btnPrimary, inputField } from "@/lib/ui";

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
        <div className="w-full pb-4">
            <SectionHeader
                eyebrow="Get in touch"
                title="Contact"
                no="06"
                subtitle="Let's collaborate and build something amazing together."
            />
            <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
                <div className="w-full lg:w-2/5 space-y-6">
                    <p className="text-sm text-muted leading-relaxed border-l-2 border-accent pl-4">
                        &quot;I believe in creating software that not only works
                        flawlessly but also makes a positive impact. Let&apos;s
                        collaborate and build something amazing together.&quot;
                    </p>
                    <div className="space-y-4">
                        <a
                            href="mailto:pateldivyesh1323@gmail.com"
                            className="block font-mono text-sm text-text underline decoration-2 underline-offset-4 decoration-accent/40 hover:text-accent hover:decoration-accent transition-colors"
                        >
                            pateldivyesh1323@gmail.com
                        </a>
                        <Socials />
                    </div>
                </div>
                <div className="w-full lg:w-3/5">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            type="text"
                            name="name"
                            placeholder="Name"
                            className={inputField}
                        />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={inputField}
                        />
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows={4}
                            name="message"
                            placeholder="Message"
                            className={`${inputField} resize-none`}
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full ${btnPrimary}`}
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
