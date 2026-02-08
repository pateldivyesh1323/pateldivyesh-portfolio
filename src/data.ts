interface Project {
    name: string;
    techStack: string;
    description: string;
    link?: string;
    github?: string;
    image: string;
}

const projectsData: Project[] = [
    {
        name: "Parlo",
        techStack:
            "React, MongoDB, NodeJS, ExpressJS, Firebase, Redis, GeminiAI, GrokAI",
        description:
            "Parlo is an AI-powered platform that breaks language barriers through real-time text and voice translation, enabling seamless global communication with intelligent, context-aware translations.",
        github: "https://github.com/pateldivyesh1323/parlo",
        image: "/Images/Projects/Parlo.png",
    },
    {
        name: "EscalateConvo",
        techStack:
            "React, MongoDB, NodeJS, ExpressJS, Firebase, GeminiAI, ElevenLabs",
        description:
            "EscalateConvo is an AI-powered platform that helps you escalate your conversations with your customers by using GeminiAI to generate responses and ElevenLabs to generate voice responses.",
        github: "https://github.com/orgs/EscalateConvo/repositories",
        image: "/Images/Projects/EscalateConvo.png",
    },
    {
        name: "ThreatIQ",
        techStack:
            "React, MongoDB, NodeJS, ExpressJS, Clerk, GroqAI, RTSP stream",
        description:
            "ThreatIQ is an AI-powered platform that helps you detect and respond to threats in real-time by using CCTV feeds. It uses GroqAI to analyze the stream and detect threats like fire, robbery, violence, suspicious activities, etc.",
        github: "https://github.com/hackventuresorg/threatiq",
        image: "/Images/Projects/ThreatIQ.png",
    },
    {
        name: "FAQSmith",
        techStack:
            "React, Python, FastAPI, GeminiAI, Vector Embedding, Clustering",
        description:
            "FAQSmith is an AI-powered platform that helps you generate frequently asked questions from your customer support data.",
        github: "https://github.com/pateldivyesh1323/FAQSmith",
        image: "/Images/Projects/FAQSmith.png",
        link: "https://faqsmith.vercel.app",
    },
    {
        name: "Futflare",
        techStack: "ReactJS, TailwindCSS, ShadcnUI, Auth0, Golang, MongoDB",
        description:
            "Futflare is a digital time capsule that lets you capture moments, memories, and media to be revealed at a future date of your choosing.",
        github: "https://github.com/pateldivyesh1323/futflare",
        image: "/Images/Projects/Futflare.png",
    },
    {
        name: "Edittube",
        techStack:
            "React.JS, TailwindCSS, NodeJS, ExpressJs, MongoDB, Cloudinary, Auth0",
        description:
            "Upload vidoes directly from editor to your youtube channel saving your time and internet bandwidth.",
        link: "https://edittube.vercel.app",
        github: "https://github.com/InnoSource-Labs/edittube",
        image: "/Images/Projects/Edittube.png",
    },
    {
        name: "Mockinter",
        techStack: "NextJS, TailwindCSS, MongoDB",
        description:
            "This platform helps in job seekers in preparing for their upcoming interview. Mockinter connects interviewer and interviewee on the basis of their role they are seeking and give mock interviews.",
        link: "https://mockinter.vercel.app",
        github: "https://github.com/pateldivyesh1323/mockinter",
        image: "/Images/Projects/Mockinter.png",
    },
    {
        name: "Passvault",
        techStack: "ReactJS, TailwindCSS, MongoDB, Auth0, NodeJs, ExpressJS",
        description:
            "A password manager with both client and server side encryption. Save and encrypt your password with your own key.",
        link: "https://passvault.vercel.app",
        github: "https://github.com/pateldivyesh1323/passvault",
        image: "/Images/Projects/Passvault.png",
    },
    {
        name: "Enjoymovies",
        techStack: "React.JS",
        description:
            "Get all information about favourite upcoming, trending and popular movies all gathered in one place. You can also search for your favourite movies. Powered by TMBD API.",
        link: "https://enjoymovies.netlify.app",
        github: "https://github.com/pateldivyesh1323/enjoymovies",
        image: "/Images/Projects/Enjoymovies.png",
    },
    {
        name: "Heatlevels",
        techStack: "React.JS",
        description:
            "Weather website powered by openweathermap api. Search weather based on your location or any city along with weather forecast.",
        link: "https://heatlevels.netlify.app",
        github: "https://github.com/pateldivyesh1323/heatlevels",
        image: "/Images/Projects/Heatlevels.png",
    },
    {
        name: "Wonders of world",
        techStack: "HTML, CSS, Javascript",
        description:
            "Get all information about new seven wonders of world gathered in one place.",
        link: "https://wondersof-world.web.app/",
        github: "https://github.com/pateldivyesh1323/Wonders-of-World",
        image: "/Images/Projects/Wondersofworld.png",
    },
];

const timeLineData = [
    {
        date: "October, 2023/2024",
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
        event: "Jumbled Programming by Silver oak university",
        description:
            "Secured runner-up position in competitive programming contest",
    },
    {
        date: "11th April, 2025 - 27th April, 2025",
        event: "Hackhazards'2025 - The Namespace Community",
        description:
            "Participated in hackathon organized by The Namespace Community",
    },
    {
        date: "20th September, 2025",
        event: "Devhacks S2",
        description:
            "Participated in hackathon organized but the devlabs team at ASU",
    },
    {
        date: "December, 2025",
        event: "AI Partner Catalyst: Accelerate Innovation Hackathon",
        description: "Participated in hackathon organized by google cloud",
    },
];

const experienceData = [
    {
        role: "Full-Stack Developer Intern",
        company: "RealList AI",
        location: "Remote",
        duration: "December 2024 - June 2025",
        description:
            "Developed over 15 core features for property management using the MERN stack and AWS, including a marketplace and an AI support bot. I also updated database queries and added caching to improve system speed and handle higher traffic.",
    },
    {
        role: "Software Engineer Intern",
        company: "Caring Click",
        location: "Ahmedabad, India",
        duration: "March 2024 - August 2024",
        description:
            "Built the company’s main platform using NextJS and Firebase to support financial guidance for over 500 monthly users. I also integrated the payment system and managed cloud deployment to keep the site stable and available.",
    },
    {
        role: "Project Mentor",
        company: "Software development association at ASU",
        location: "Tempe, AZ, USA",
        duration: "October 2025 - November 2025",
        description:
            "Guided students in building an AI-powered document assistant that summarizes academic papers and explains complex concepts. I provided technical direction on integrating AI models for text analysis and structuring the React-based frontend for a responsive user experience.",
    },
];

interface Paper {
    title: string;
    link: string;
}

const papersData: Paper[] = [
    {
        title: "Attention Is All You Need",
        link: "https://arxiv.org/abs/1706.03762",
    },
    {
        title: "BERT: Pre-training of Deep Bidirectional Transformers",
        link: "https://arxiv.org/abs/1810.04805",
    },
    {
        title: "Language Models are Unsupervised Multitask Learners",
        link: "https://openai.com/index/better-language-models/",
    },
];

export {
    projectsData,
    timeLineData,
    type Project,
    experienceData,
    papersData,
    type Paper,
};
