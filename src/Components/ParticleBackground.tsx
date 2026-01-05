import React, { useRef, useEffect } from "react";

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size to match window
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);

        // Star class
        class Star {
            x: number;
            y: number;
            size: number;
            baseSize: number;
            opacity: number;
            twinkleSpeed: number;
            twinkleDirection: number;
            color: string;

            constructor() {
                this.x = Math.random() * (canvas?.width || 0);
                this.y = Math.random() * (canvas?.height || 0);
                this.baseSize = Math.random() * 2 + 0.5; // Base size between 0.5 and 2.5
                this.size = this.baseSize;
                this.opacity = Math.random() * 0.5 + 0.5; // Opacity between 0.5 and 1
                this.twinkleSpeed = Math.random() * 0.01 + 0.005; // Reduced twinkling speed (was 0.03 + 0.01)
                this.twinkleDirection = Math.random() > 0.5 ? 1 : -1; // Random initial direction

                // Random star colors - mostly white with hints of blue
                const colors = [
                    "#ffffff", // White
                    "#f8f8ff", // Ghost White
                    "#f0f8ff", // Alice Blue
                    "#e6e6fa", // Lavender
                    "#fffafa", // Snow
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                // Make the star twinkle by changing its opacity and size slightly
                this.opacity += this.twinkleSpeed * this.twinkleDirection;

                // Change direction when reaching opacity thresholds
                if (this.opacity > 1) {
                    this.opacity = 1;
                    this.twinkleDirection = -1;
                } else if (this.opacity < 0.2) {
                    this.opacity = 0.2;
                    this.twinkleDirection = 1;
                }

                // Size variations based on opacity
                this.size = this.baseSize * (0.8 + this.opacity * 0.4);
            }

            draw() {
                if (!ctx) return;

                // Draw star glow effect using gradient
                const gradient = ctx.createRadialGradient(
                    this.x,
                    this.y,
                    0,
                    this.x,
                    this.y,
                    this.size * 2
                );

                gradient.addColorStop(
                    0,
                    `rgba(255, 255, 255, ${this.opacity})`
                );
                gradient.addColorStop(
                    0.5,
                    `rgba(255, 255, 255, ${this.opacity * 0.5})`
                );
                gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
                ctx.fill();

                // Draw star with points instead of just a circle
                const spikes = 5; // Number of star points
                const outerRadius = this.size;
                const innerRadius = this.size * 0.4;

                ctx.beginPath();
                ctx.fillStyle = this.color;

                // Draw the star shape
                for (let i = 0; i < spikes * 2; i++) {
                    // Calculate points of the star
                    const radius = i % 2 === 0 ? outerRadius : innerRadius;
                    const angle = (Math.PI / spikes) * i;
                    const x = this.x + Math.cos(angle) * radius;
                    const y = this.y + Math.sin(angle) * radius;

                    if (i === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }

                ctx.closePath();
                ctx.fill();
            }
        }

        // Create star array
        const stars: Star[] = [];
        const starCount = 20;

        for (let i = 0; i < starCount; i++) {
            stars.push(new Star());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < stars.length; i++) {
                stars[i].update();
                stars[i].draw();
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", setCanvasSize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 opacity-40 dark:opacity-20"
        />
    );
};

export default ParticleBackground;
