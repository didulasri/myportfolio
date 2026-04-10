'use client';

import { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    z: number; // Depth layer (0-1, closer to 1 is closer to viewer)
    size: number;
    baseSize: number;
    blinkSpeed: number;
    blinkOffset: number;
    color: string;
    nextBlinkTime: number;
    isBlinking: boolean;
    blinkProgress: number;
    velocityX: number;
    velocityY: number;
}

export default function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Create stars with light grey color and 3D depth
        const stars: Star[] = [];
        const starCount = 200;
        const lightGreyColor = '#D1D5DB'; // light grey

        for (let i = 0; i < starCount; i++) {
            const z = Math.random(); // Depth: 0 (far) to 1 (near)
            const baseSize = Math.random() * 0.8 + 0.3;

            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: z,
                size: baseSize * (0.3 + z * 0.7), // Size based on depth
                baseSize: baseSize,
                blinkSpeed: Math.random() * 0.08 + 0.04,
                blinkOffset: Math.random() * Math.PI * 2,
                color: lightGreyColor,
                nextBlinkTime: Math.random() * 100,
                isBlinking: false,
                blinkProgress: 0,
                // Slower movement for far stars (parallax effect)
                velocityX: (Math.random() - 0.5) * 0.3 * z,
                velocityY: (Math.random() - 0.5) * 0.3 * z,
            });
        }

        // Animation
        let animationFrameId: number;
        let time = 0;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 1;

            stars.forEach((star) => {
                // Move stars slowly (parallax effect)
                star.x += star.velocityX;
                star.y += star.velocityY;

                // Wrap around screen edges
                if (star.x < -20) star.x = canvas.width + 20;
                if (star.x > canvas.width + 20) star.x = -20;
                if (star.y < -20) star.y = canvas.height + 20;
                if (star.y > canvas.height + 20) star.y = -20;

                // Random blinking pattern
                if (!star.isBlinking && time >= star.nextBlinkTime) {
                    star.isBlinking = true;
                    star.blinkProgress = 0;
                }

                let opacity = 1;

                if (star.isBlinking) {
                    star.blinkProgress += star.blinkSpeed;

                    if (star.blinkProgress < 0.5) {
                        opacity = 1 - (star.blinkProgress * 2);
                    } else if (star.blinkProgress < 1) {
                        opacity = (star.blinkProgress - 0.5) * 2;
                    } else {
                        star.isBlinking = false;
                        star.blinkProgress = 0;
                        star.nextBlinkTime = time + (Math.random() * 180 + 60);
                        opacity = 1;
                    }
                }

                // Subtle continuous twinkle
                const twinkle = Math.sin(time * 0.02 + star.blinkOffset);
                const twinkleOpacity = 0.7 + (twinkle * 0.3);
                opacity *= twinkleOpacity;

                // Opacity based on depth (far stars are dimmer)
                const depthOpacity = 0.3 + (star.z * 0.7);
                opacity *= depthOpacity;

                // Calculate color brightness based on depth
                const brightness = Math.floor(209 + (star.z * 46)); // Range: 209-255

                // Draw glow effect (larger for closer stars)
                const glowSize = star.size * (4 + star.z * 2);
                const gradient = ctx.createRadialGradient(
                    star.x,
                    star.y,
                    0,
                    star.x,
                    star.y,
                    glowSize
                );

                gradient.addColorStop(0, `rgba(${brightness}, ${brightness}, ${brightness}, ${opacity})`);
                gradient.addColorStop(0.4, `rgba(${brightness}, ${brightness}, ${brightness}, ${opacity * 0.5})`);
                gradient.addColorStop(1, 'transparent');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(star.x, star.y, glowSize, 0, Math.PI * 2);
                ctx.fill();

                // Draw star core
                ctx.fillStyle = `rgba(${brightness}, ${brightness}, ${brightness}, ${opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: 0.8 }}
        />
    );
}
