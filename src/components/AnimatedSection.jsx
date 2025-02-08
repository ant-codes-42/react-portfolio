// This is not being used anywhere
// It doesn't quite work but I'm keeping it here for the future / to borrow from myself and work on later

import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/sectionAnimations.css';

export default function AnimatedSection({ children, className = '', ...otherProps }) {
    const sectionRef = useRef(null);
    const lastScrollY = useRef(window.scrollY);
    const [scrollingDown, setScrollingDown] = useState(true);

    useEffect(() => {
        function updateScrollDirection() {
            const currentScrollY = window.scrollY;
            setScrollingDown(currentScrollY > lastScrollY.current);
            lastScrollY.current = currentScrollY;
        }

        window.addEventListener('scroll', updateScrollDirection);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {

                        entry.target.classList.add('section-visible');
                        entry.target.classList.add(
                            scrollingDown ? 'scroll-up-animation' : 'scroll-down-animation'
                        );
                    } else {

                        setTimeout(() => {
                            entry.target.classList.remove('section-visible');
                            entry.target.classList.remove('scroll-up-animation');
                            entry.target.classList.remove('scroll-down-animation');
                        }, 300);
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '10px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
            window.removeEventListener('scroll', updateScrollDirection);
        };
    }, [scrollingDown]);

    const combinedClassName = `animated-section ${className}`.trim();

    return (
        <section
            ref={sectionRef}
            className={combinedClassName}
            {...otherProps}
        >
            {children}
        </section>
    );
}