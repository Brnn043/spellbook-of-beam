import { SectionHeader } from './WindowCard';
import { personalInfo } from '@/data/personal';

export function AboutSection() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    title="About Me 🌟"
                    color="#FF69B4"
                    shadowColor="rgba(236,72,153,0.3)"
                    borderColor="pink-300"
                />
                <div className="grid md:grid-cols-2 gap-8">
                    {personalInfo.map((info, index) => (
                        <div key={index} className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border-3 border-purple-200 shadow-[4px_4px_0px_0px_rgba(147,51,234,0.2)] transform hover:scale-105 hover:shadow-[6px_6px_0px_0px_rgba(147,51,234,0.3)] transition-all duration-300">
                            <h3 className="text-2xl font-bold text-purple-600 mb-3 flex items-center gap-3">
                                <span className="text-3xl">{info.title.split(' ')[0]}</span>
                                {info.title.replace(/^[^\s]+ /, '')}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {info.description}
                            </p>
                            {info.tags && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {info.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold border-2 border-purple-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
