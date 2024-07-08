import { Toaster } from "react-hot-toast";
import "./App.css";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";
import { Analytics } from "@vercel/analytics/react";

function App() {
    return (
        <div className="font-mono">
            <Analytics />
            <Toaster />
            <Home />
            <Skills />
            <Projects />
            <Timeline />
            <Contact />
        </div>
    );
}

export default App;
