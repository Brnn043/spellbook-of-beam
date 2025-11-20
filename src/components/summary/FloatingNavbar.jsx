'use client';
import { useState, useEffect } from 'react';

export function FloatingNavbar() {
    const [activeSection, setActiveSection] = useState('hero');

    const sections = [
        { id: 'hero', label: '🏠', name: 'Home' },
        { id: 'about', label: '🌟', name: 'About' },
        { id: 'education', label: '🎓', name: 'Education' },
        { id: 'skills', label: '🔮', name: 'Skills' },
        { id: 'projects', label: '🎨', name: 'Projects' },
        { id: 'experience', label: '💼', name: 'Experience' },
        { id: 'contact', label: '✨', name: 'Contact' },
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Desktop Sidebar */}
            <nav className="hidden md:block fixed left-0 top-0 h-screen w-20 bg-gradient-to-b from-pink-100 via-purple-100 to-cyan-100 border-r-4 border-white shadow-[4px_0_0_0_rgba(236,72,153,0.3)] z-50">
                <div className="flex flex-col items-center h-full py-8">
                    {/* Logo/Brand */}
                    <div className="mb-8 pb-6 border-b-2 border-pink-300 w-16">
                        <div className="text-3xl text-center animate-bounce">✨</div>
                        <div className="text-xs font-bold text-purple-600 text-center mt-2">BEAM</div>
                    </div>

                    {/* Navigation Items */}
                    <div className="flex flex-col items-center gap-3 flex-1">
                        {sections.map(({ id, label, name }) => (
                            <button
                                key={id}
                                onClick={() => scrollToSection(id)}
                                className={`relative group w-14 h-14 rounded-2xl transition-all duration-300 flex items-center justify-center ${activeSection === id
                                        ? 'bg-gradient-to-br from-pink-400 to-purple-400 text-white scale-110 shadow-[4px_4px_0px_0px_rgba(236,72,153,0.5)]'
                                        : 'bg-white/60 hover:bg-white text-gray-700 hover:scale-105 border-2 border-pink-200'
                                    }`}
                                title={name}
                            >
                                <span className="text-2xl">{label}</span>

                                {/* Tooltip */}
                                <span className="absolute left-full ml-4 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border-2 border-white">
                                    {name}
                                    <span className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-pink-500"></span>
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Bottom Decoration */}
                    <div className="mt-auto pt-6 border-t-2 border-pink-300 w-16">
                        <div className="text-2xl text-center animate-pulse">🎀</div>
                    </div>
                </div>
            </nav>

            {/* Mobile Top Navbar */}
            <nav className="md:hidden fixed top-0 left-0 right-0 bg-gradient-to-r from-pink-100 via-purple-100 to-cyan-100 border-b-4 border-white shadow-[0_4px_0_0_rgba(236,72,153,0.3)] z-50">
                <div className="flex items-center justify-between px-4 py-3">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">✨</span>
                        <span className="text-sm font-black text-purple-600">BEAM</span>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-2">
                        {sections.map(({ id, label, name }) => (
                            <button
                                key={id}
                                onClick={() => scrollToSection(id)}
                                className={`w-10 h-10 rounded-xl transition-all duration-300 flex items-center justify-center ${activeSection === id
                                        ? 'bg-gradient-to-br from-pink-400 to-purple-400 text-white scale-110 shadow-[2px_2px_0px_0px_rgba(236,72,153,0.5)]'
                                        : 'bg-white/60 hover:bg-white text-gray-700 border-2 border-pink-200'
                                    }`}
                                title={name}
                            >
                                <span className="text-lg">{label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}
