import { WindowCard } from './WindowCard';
import { personalInfo } from '@/data/personal';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export function HeroSection() {
    return (
        <section className="min-h-screen flex items-center justify-end px-4 md:px-8">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <WindowCard
                    title="WELCOME.exe"
                    gradientFrom="pink-50"
                    gradientTo="purple-50"
                    shadowColor="#EC4899"
                    headerGradientFrom="pink-200"
                    headerGradientTo="purple-200"
                    headerBorderColor="pink-300"
                    titleColor="pink-600"
                >
                    <div className="inline-block bg-gradient-to-r from-pink-200 to-purple-200 rounded-full px-6 py-2 mb-6 border-3 border-pink-400">
                        <p className="text-sm font-bold text-pink-600">✨ WELCOME ✨</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight" style={{
                        color: '#FF69B4',
                        textShadow: '4px 4px 0px #FFB6C1, 6px 6px 0px #DDA0DD'
                    }}>
                        Beam's Portfolio
                    </h1>
                    <p className="text-xl md:text-2xl text-purple-700 font-semibold mb-6">
                        スペルブック オブ ビーム ✨
                    </p>
                    <div className="text-base text-gray-700 bg-white/80 rounded-2xl p-6 border-4 border-pink-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
                        {personalInfo.find(p => p.title.includes('Introduction'))?.description}
                    </div>
                </WindowCard>
            </div>
        </section>
    );
}

export function DeveloperSection() {
    const beamPhotos = [
        '/beam-photos/Beam.webp',
        '/beam-photos/Beam2.webp',
        '/beam-photos/Beam3.webp'
    ];
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhotoIndex((prev) => (prev + 1) % beamPhotos.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [beamPhotos.length]);

    return (
        <section className="min-h-screen flex items-center justify-start px-4 md:px-8">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <WindowCard
                    title="DEVELOPER.exe"
                    gradientFrom="blue-50"
                    gradientTo="cyan-50"
                    shadowColor="#3B82F6"
                    headerGradientFrom="blue-200"
                    headerGradientTo="cyan-200"
                    headerBorderColor="blue-300"
                    titleColor="blue-600"
                >
                    {/* Photo Gallery with Multiple Polaroid Frames */}
                    <div className="relative mb-6 flex justify-center items-center gap-4 min-h-[280px]">
                        {/* Left Small Photo */}
                        <div className="relative transform -rotate-6 hover:rotate-0 transition-transform duration-300 scale-75 -mt-8">
                            <div className="bg-white p-2 shadow-[6px_6px_0px_0px_rgba(59,130,246,0.2)] border-4 border-white">
                                <div className="relative w-32 h-32 overflow-hidden bg-gray-100">
                                    <Image
                                        src={beamPhotos[(currentPhotoIndex + 1) % beamPhotos.length]}
                                        alt="Beam"
                                        fill
                                        className="object-cover transition-opacity duration-500"
                                    />
                                </div>
                                <div className="mt-1 text-center">
                                    <p className="text-[10px] text-blue-500">✨</p>
                                </div>
                            </div>
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-5 bg-pink-100 opacity-70 -rotate-12 border border-pink-200"></div>
                        </div>

                        {/* Center Main Photo */}
                        <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-300 z-10">
                            <div className="bg-white p-3 shadow-[8px_8px_0px_0px_rgba(59,130,246,0.3)] border-4 border-white">
                                <div className="relative w-48 h-48 overflow-hidden bg-gray-100">
                                    <Image
                                        src={beamPhotos[currentPhotoIndex]}
                                        alt="Beam"
                                        fill
                                        className="object-cover transition-opacity duration-500"
                                        priority
                                    />
                                </div>
                                <div className="mt-2 text-center">
                                    <p className="text-xs font-handwriting text-blue-600">✨ Beam ✨</p>
                                </div>
                            </div>
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-100 opacity-70 rotate-3 border border-yellow-200"></div>
                        </div>

                        {/* Right Small Photo */}
                        <div className="relative transform rotate-12 hover:rotate-0 transition-transform duration-300 scale-75 mt-8">
                            <div className="bg-white p-2 shadow-[6px_6px_0px_0px_rgba(59,130,246,0.2)] border-4 border-white">
                                <div className="relative w-32 h-32 overflow-hidden bg-gray-100">
                                    <Image
                                        src={beamPhotos[(currentPhotoIndex + 2) % beamPhotos.length]}
                                        alt="Beam"
                                        fill
                                        className="object-cover transition-opacity duration-500"
                                    />
                                </div>
                                <div className="mt-1 text-center">
                                    <p className="text-[10px] text-blue-500">✨</p>
                                </div>
                            </div>
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-5 bg-green-100 opacity-70 rotate-6 border border-green-200"></div>
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black mb-4" style={{
                        color: '#4169E1',
                        textShadow: '3px 3px 0px #87CEEB'
                    }}>
                        Meet the Developer
                    </h2>
                    <p className="text-lg text-blue-700 font-medium">
                        Scroll down to explore my journey ⭐
                    </p>

                    {/* Photo indicator dots */}
                    <div className="flex justify-center gap-2 mt-4">
                        {beamPhotos.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPhotoIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentPhotoIndex
                                    ? 'bg-blue-500 w-6'
                                    : 'bg-blue-200 hover:bg-blue-300'
                                    }`}
                            />
                        ))}
                    </div>
                </WindowCard>
            </div>
        </section>
    );
}

export function PotionSection() {
    const personalityData = personalInfo.find(p => p.title.includes('Personality & Values'));

    return (
        <section className="min-h-screen flex items-center justify-end px-4 md:px-8">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <WindowCard
                    title="PERSONALITY.exe"
                    gradientFrom="orange-50"
                    gradientTo="yellow-50"
                    shadowColor="#FB923C"
                    headerGradientFrom="orange-200"
                    headerGradientTo="yellow-200"
                    headerBorderColor="orange-300"
                    titleColor="orange-600"
                >
                    <div className="inline-block bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full px-6 py-2 mb-6 border-3 border-orange-400">
                        <p className="text-sm font-bold text-orange-600">🚀 PERSONALITY 🚀</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight" style={{
                        color: '#FF6347',
                        textShadow: '4px 4px 0px #FFB347, 6px 6px 0px #FFA500'
                    }}>
                        Personality & Values
                    </h1>
                    <div className="text-base text-gray-700 bg-white/80 rounded-2xl p-6 border-4 border-orange-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] space-y-3">
                        {personalityData?.description.map((desc, index) => (
                            <p key={index}>{desc}</p>
                        ))}
                    </div>
                </WindowCard>
            </div>
        </section>
    );
}

export function AdventureSection() {
    const lifestyleData = personalInfo.find(p => p.title.includes('Lifestyle & Hobbies'));

    return (
        <section className="min-h-screen flex items-center justify-start px-4 md:px-8">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <WindowCard
                    title="LIFESTYLE.exe"
                    gradientFrom="green-50"
                    gradientTo="emerald-50"
                    shadowColor="#22C55E"
                    headerGradientFrom="green-200"
                    headerGradientTo="emerald-200"
                    headerBorderColor="green-300"
                    titleColor="green-600"
                >
                    <div className="inline-block bg-gradient-to-r from-green-200 to-emerald-200 rounded-full px-6 py-2 mb-6 border-3 border-green-400">
                        <p className="text-sm font-bold text-green-600">🎯 LIFESTYLE 🎯</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight" style={{
                        color: '#32CD32',
                        textShadow: '4px 4px 0px #90EE90, 6px 6px 0px #3CB371'
                    }}>
                        Lifestyle & Hobbies
                    </h1>
                    <div className="text-base text-gray-700 bg-white/80 rounded-2xl p-6 border-4 border-green-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] space-y-3">
                        {lifestyleData?.description.map((desc, index) => (
                            <p key={index}>{desc}</p>
                        ))}
                    </div>
                </WindowCard>
            </div>
        </section>
    );
}
