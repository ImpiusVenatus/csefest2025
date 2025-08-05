'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current!;
        const circle = circleRef.current!;
        let mouseX = 0,
            mouseY = 0;
        let circleX = 0,
            circleY = 0;

        const setDotX = gsap.quickSetter(dot, 'x', 'px');
        const setDotY = gsap.quickSetter(dot, 'y', 'px');
        const setCircleX = gsap.quickSetter(circle, 'x', 'px');
        const setCircleY = gsap.quickSetter(circle, 'y', 'px');

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            setDotX(mouseX);
            setDotY(mouseY);

            circleX += (mouseX - circleX) * 0.08;
            circleY += (mouseY - circleY) * 0.08;

            setCircleX(circleX);
            setCircleY(circleY);

            requestAnimationFrame(animate);
        };

        const handleMouseDown = () => {
            gsap.to(circle, {
                scale: 1.5,
                duration: 0.15,
                ease: 'power2.out',
            });
        };

        const handleMouseUp = () => {
            gsap.to(circle, {
                scale: 1,
                duration: 0.2,
                ease: 'power2.out',
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
                style={{
                    backgroundColor: '#616161',
                    transform: 'translate(-50%, -50%)',
                }}
            />
            <div
                ref={circleRef}
                className="fixed top-0 left-0 w-8 h-8 border rounded-full pointer-events-none z-[9998]"
                style={{
                    borderColor: '#616161',
                    transform: 'translate(-50%, -50%) scale(1)',
                }}
            />
        </>
    );
}
