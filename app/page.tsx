import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Home from "@/Components/Home";
import Work from "@/Components/Work";
import Projects from "@/Components/Projects";
import Papershelf from "@/Components/Papershelf";
import Timeline from "@/Components/Timeline";
import Skills from "@/Components/Skills";
import Contact from "@/Components/Contact";
import FadeIn from "@/Components/animations/FadeIn";

export default function HomePage() {
    return (
        <div className="relative transition-colors duration-300 min-h-screen">
            <Navbar />
            <main className="max-w-4xl mx-auto px-6 pt-20 md:pt-24 relative z-10 flex flex-col gap-16 md:gap-20">
                <Home />
                <FadeIn>
                    <section id="work">
                        <Work />
                    </section>
                </FadeIn>
                <FadeIn delay={0.05}>
                    <section id="projects">
                        <Projects />
                    </section>
                </FadeIn>
                <FadeIn delay={0.05}>
                    <section id="papershelf">
                        <Papershelf />
                    </section>
                </FadeIn>
                <FadeIn delay={0.05}>
                    <section id="timeline">
                        <Timeline />
                    </section>
                </FadeIn>
                <FadeIn delay={0.05}>
                    <section id="skills">
                        <Skills />
                    </section>
                </FadeIn>
                <FadeIn delay={0.05}>
                    <section id="contact">
                        <Contact />
                    </section>
                </FadeIn>
                <FadeIn>
                    <Footer />
                </FadeIn>
            </main>
        </div>
    );
}
