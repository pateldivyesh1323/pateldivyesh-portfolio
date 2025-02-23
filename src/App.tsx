import { Toaster } from "react-hot-toast";
import "./App.css";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Work from "./Components/Work";

function App() {
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 right-0 h-[300px] bg-[#FFA500] blur-[150px] opacity-20 pointer-events-none"></div>
            <div className="max-w-3xl mx-auto relative">
                <SpeedInsights />
                <Analytics />
                <Toaster />
                <Home />
                <Work />
                <Skills />
                <Projects />
                <Timeline />
                <Contact />
            </div>
        </div>
    );
}

export default App;
