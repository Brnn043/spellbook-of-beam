// ScrollSection component that updates camera position when in view
export function ScrollSection({ children, targetY, setCameraY }) {
    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setCameraY(targetY);
            }
        });
    };

    const sectionRef = (node) => {
        if (node && typeof IntersectionObserver !== 'undefined') {
            const observer = new IntersectionObserver(handleIntersection, {
                threshold: 0.5
            });
            observer.observe(node);
            return () => observer.disconnect();
        }
    };

    return <div ref={sectionRef} style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }} className="min-h-screen">{children}</div>;
}
