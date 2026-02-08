import Home from "@/Components/Home";
import Work from "@/Components/Work";
import Projects from "@/Components/Projects";
import Papershelf from "@/Components/Papershelf";
import Timeline from "@/Components/Timeline";
import Skills from "@/Components/Skills";
import Contact from "@/Components/Contact";

export default function HomePage() {
    return (
        <div className="relative transition-colors duration-300">
            <div className="absolute top-0 left-0 right-0 h-[300px] bg-[#DC2626] blur-[150px] opacity-20 pointer-events-none"></div>
            <div className="max-w-3xl mx-auto relative">
                <Home />
                <Work />
                <Projects />
                <Papershelf />
                <Timeline />
                <Skills />
                <Contact />
            </div>
        </div>
    );
}
