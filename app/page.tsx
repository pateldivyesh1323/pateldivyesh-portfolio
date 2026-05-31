import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Home from "@/Components/Home";
import Work from "@/Components/Work";
import Projects from "@/Components/Projects";
import Papershelf from "@/Components/Papershelf";
import Timeline from "@/Components/Timeline";
import Skills from "@/Components/Skills";
import Contact from "@/Components/Contact";

export default function HomePage() {
    return (
        <div className="relative transition-colors duration-300 min-h-screen">
            <Navbar />
            <main className="max-w-5xl mx-auto px-6 pt-20 md:pt-24 relative z-10 flex flex-col gap-24 md:gap-32">
                <Home />
                <section id="work">
                    <Work />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="papershelf">
                    <Papershelf />
                </section>
                <section id="timeline">
                    <Timeline />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="contact">
                    <Contact />
                </section>
                <Footer />
            </main>
        </div>
    );
}
