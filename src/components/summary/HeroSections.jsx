import { WindowCard } from './WindowCard';
import { personalInfo } from '@/data/personal';

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
                    <div className="text-6xl mb-4">🧙‍♀️</div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4" style={{
                        color: '#4169E1',
                        textShadow: '3px 3px 0px #87CEEB'
                    }}>
                        Meet the Developer
                    </h2>
                    <p className="text-lg text-blue-700 font-medium">
                        Scroll down to explore my journey ⭐
                    </p>
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
                    <p className="text-xl md:text-2xl text-orange-700 font-semibold mb-6">
                        私の性格と価値観 ✨
                    </p>
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
                    <p className="text-xl md:text-2xl text-green-700 font-semibold mb-6">
                        私の趣味とライフスタイル ✨
                    </p>
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
