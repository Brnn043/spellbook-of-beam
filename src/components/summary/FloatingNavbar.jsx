'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export function FloatingNavbar() {
    const [activeSection, setActiveSection] = useState('hero');

    const sections = [
        { id: 'hero', label: '🏠', name: 'Home' },
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
            <nav className="hidden md:block fixed left-0 top-0 h-screen w-32 bg-gradient-to-b from-pink-100 via-purple-100 to-cyan-100 border-r-4 border-white shadow-[4px_0_0_0_rgba(236,72,153,0.3)] z-50">
                <div className="flex flex-col items-center h-full py-8">
                    {/* Logo/Brand */}
                    <div className="mb-8 pb-6 border-b-2 border-pink-300 w-28">
                        <div className="relative w-16 h-16 mx-auto mb-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full animate-pulse"></div>
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <Image
                                    src="/mascot.webp"
                                    alt="Beam's Mascot"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="text-xs font-bold text-purple-600 text-center">BEAM</div>
                    </div>

                    {/* Navigation Items */}
                    <div className="flex flex-col flex-1 w-full relative">
                        {/* Floating decorative stickers */}
                        <div className="absolute -left-3 top-16 text-xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>⭐</div>
                        <div className="absolute -right-3 top-40 text-lg animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}>💫</div>
                        <div className="absolute -left-2 bottom-32 text-xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}>🌟</div>
                        <div className="absolute -right-2 bottom-16 text-lg animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}>✨</div>

                        {sections.map(({ id, label, name }) => (
                            <button
                                key={id}
                                onClick={() => scrollToSection(id)}
                                className={`relative flex-1 w-full transition-all duration-500 flex flex-col items-center justify-center gap-1 group border-l-4 ${activeSection === id
                                    ? 'bg-gradient-to-r from-pink-300/80 via-purple-300/80 to-transparent border-pink-500 shadow-[inset_4px_0_8px_rgba(236,72,153,0.3)]'
                                    : 'bg-transparent border-transparent hover:bg-white/30 hover:border-pink-200'
                                    }`}
                                title={name}
                            >
                                <span className={`text-2xl relative z-10 transition-all duration-300 ${activeSection === id ? 'scale-125 drop-shadow-lg' : 'scale-100'
                                    }`}>
                                    {label}
                                </span>
                                <span className={`text-xs font-bold whitespace-nowrap relative z-10 transition-all duration-300 ${activeSection === id
                                    ? 'text-pink-600 scale-110 font-black'
                                    : 'text-gray-600 group-hover:text-pink-500'
                                    }`}>
                                    {name}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Bottom Decoration */}
                    <div className="mt-auto pt-6 border-t-2 border-pink-300 w-28 relative">
                        <div className="text-2xl text-center animate-pulse">🎀</div>
                        <div className="absolute -top-3 -right-2 text-lg animate-bounce">💝</div>
                        <div className="absolute -top-2 -left-2 text-sm animate-bounce" style={{ animationDelay: '0.5s' }}>🌸</div>
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
