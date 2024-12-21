import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Work() {
    return (
        <div className="flex items-center justify-center flex-col min-h-screen gap-8 w-[95%] mx-auto">
            <div className="font-bold text-lg underline">Work</div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "#4c7273",
                        color: "#fff",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="March,2024 - August,2024"
                    iconStyle={{
                        background: "#fff",
                        color: "#fff",
                    }}
                    icon={
                        <img
                            src="/Images/caringclick.jpeg"
                            className="rounded-full"
                        />
                    }
                >
                    <h3 className="vertical-timeline-element-title">
                        Software Engineer Intern
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Caring Click, Ahmedabad, India
                    </h4>
                    <p className="text-sm">
                        Sole developer responsible for designing and
                        implementing the company’s website using Next.js and
                        Firebase, ensuring alignment with best practices.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{
                        background: "#fff",
                        color: "#fff",
                    }}
                    icon={
                        <div className="flex items-center justify-center h-full text-2xl">
                            ⭐
                        </div>
                    }
                />
            </VerticalTimeline>
        </div>
    );
}
