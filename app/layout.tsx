import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
    title: "Divyesh Patel",
    description:
        "Divyesh Patel, a software developer based in Arizona, USA. Currently pursuing master's in computer science.",
    keywords: [
        "Divyesh Patel",
        "software developer",
        "Ahmedabad",
        "Arizona",
        "USA",
        "Computer Engineering",
        "Computer Science",
        "Full-stack developer",
    ],
    authors: [{ name: "Divyesh Patel" }],
    robots: "index, follow",
    openGraph: {
        title: "Divyesh Patel - Software Developer",
        description:
            "Divyesh Patel, a software developer based in Arizona, USA. Currently pursuing master's in computer science.",
        images: [
            {
                url: "https://pateldivyesh.com/Images/website-glimpse.png",
            },
        ],
        url: "https://pateldivyesh.com",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@divyesh1323",
        creator: "@divyesh1323",
        title: "Divyesh Patel - Software Developer",
        description:
            "Software developer and ML enthusiast building cool stuff.",
        images: {
            url: "https://pateldivyesh.com/Images/website-glimpse.png",
            alt: "Divyesh Patel - Software Developer Portfolio",
        },
    },
    icons: {
        icon: [
            { url: "/Images/favicon.svg", sizes: "32x32", type: "image/svg+xml" },
            { url: "/Images/favicon.svg", sizes: "16x16", type: "image/svg+xml" },
        ],
        apple: "/Images/favicon.svg",
    },
    manifest: "/Images/site.webmanifest",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Divyesh Patel",
                            jobTitle: "Software Developer",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Arizona",
                                addressCountry: "USA",
                            },
                            url: "https://pateldivyesh.com",
                            sameAs: [
                                "https://www.linkedin.com/in/divyeshdeveloper",
                                "https://github.com/pateldivyesh1323",
                            ],
                        }),
                    }}
                />
            </head>
            <body>
                <Providers>
                    <Analytics />
                    <SpeedInsights />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
