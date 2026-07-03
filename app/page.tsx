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
import Reveal from "@/Components/animations/Reveal";
import Marquee from "@/Components/animations/Marquee";
import HeroBackdrop from "@/Components/HeroBackdrop";

export default function HomePage() {
    return (
        <div className="relative transition-colors duration-300 min-h-screen overflow-x-clip">
            <HeroBackdrop />
            <Navbar />
            <main className="max-w-4xl mx-auto px-6 pt-20 md:pt-24 relative z-10 flex flex-col gap-16 md:gap-20">
                <Home />
                <Marquee
                    items={[
                        "Full-Stack Apps",
                        "ML-Powered Tools",
                        "Delightful UIs",
                        "Open Source",
                        "Cool Stuff",
                    ]}
                    className="-mx-6 md:mx-0"
                />
                <Reveal>
                    <section id="work">
                        <Work />
                    </section>
                </Reveal>
                <Reveal>
                    <section id="projects">
                        <Projects />
                    </section>
                </Reveal>
                <Reveal>
                    <section id="papershelf">
                        <Papershelf />
                    </section>
                </Reveal>
                <Reveal>
                    <section id="timeline">
                        <Timeline />
                    </section>
                </Reveal>
                <Reveal>
                    <section id="skills">
                        <Skills />
                    </section>
                </Reveal>
                <Marquee
                    items={[
                        "Let's Work Together",
                        "Say Hello",
                        "Let's Work Together",
                        "Say Hello",
                    ]}
                    variant="outline"
                    duration={26}
                    className="-mx-6 md:mx-0"
                />
                <Reveal>
                    <section id="contact">
                        <Contact />
                    </section>
                </Reveal>
                <FadeIn>
                    <Footer />
                </FadeIn>
            </main>
        </div>
    );
}
