import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
    const lenisOptions = {
        lerp: 0.1,
        duration: 1,
        smoothTouch: true,
        smooth: true,
    };

    return (
        <ReactLenis root options={lenisOptions}>
            {children}
        </ReactLenis>
    );
}
export default SmoothScrolling;
