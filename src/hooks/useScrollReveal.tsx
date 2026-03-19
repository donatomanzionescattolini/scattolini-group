import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
    const { threshold = 0.01, rootMargin = "0px 0px -20px 0px", triggerOnce = true } = options;
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, isVisible };
}

interface RevealSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right" | "fade";
    threshold?: number;
}

export function RevealSection({ children, className = "", delay = 0, direction = "up", threshold }: RevealSectionProps) {
    const { ref, isVisible } = useScrollReveal(threshold !== undefined ? { threshold } : undefined);

    const directionClass = `reveal-${direction}`;

    return (
        <div
            ref={ref}
            className={`reveal ${directionClass} ${isVisible ? "reveal-visible" : ""} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
