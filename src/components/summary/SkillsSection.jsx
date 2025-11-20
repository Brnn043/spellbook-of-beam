import { SectionHeader, WindowCard } from './WindowCard';
import { skillsData } from '@/data/skills';

export function SkillsSection() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    title="Skills & Expertise 🔮"
                    color="#10B981"
                    shadowColor="rgba(34,197,94,0.3)"
                    borderColor="green-300"
                />

                {/* Technical Skills */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-green-600 mb-8 text-center">Technical Skills</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillsData[0]?.content?.map((skill, index) => (
                            <WindowCard
                                key={index}
                                title="SKILL.exe"
                                gradientFrom="green-50"
                                gradientTo="emerald-50"
                                shadowColor="#10B981"
                                headerGradientFrom="green-200"
                                headerGradientTo="emerald-200"
                                headerBorderColor="green-300"
                                titleColor="green-700"
                                maxWidth="w-full"
                            >
                                <h4 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
                                    <span>{skill.icon}</span>
                                    {skill.title}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skill.content.split(', ').map((skillName, skillIndex) => (
                                        <span key={skillIndex} className="px-3 py-1 bg-green-200 text-green-700 rounded-full text-sm font-semibold border-2 border-green-400">
                                            {skillName}
                                        </span>
                                    ))}
                                </div>
                            </WindowCard>
                        ))}
                    </div>
                </div>

                {/* Language Skills */}
                <div>
                    <h3 className="text-3xl font-bold text-teal-600 mb-8 text-center">Languages</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {skillsData[1]?.content?.map((lang, index) => (
                            <WindowCard
                                key={index}
                                title="LANGUAGE.exe"
                                gradientFrom="teal-50"
                                gradientTo="cyan-50"
                                shadowColor="#14B8A6"
                                headerGradientFrom="teal-200"
                                headerGradientTo="cyan-200"
                                headerBorderColor="teal-300"
                                titleColor="teal-700"
                                maxWidth="w-full"
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <h4 className="text-xl font-semibold text-teal-700 flex items-center gap-2">
                                        <span>{lang.icon}</span>
                                        {lang.title}
                                    </h4>
                                    <span className="text-teal-600 font-bold">{lang.proficiency}%</span>
                                </div>
                                <div className="w-full bg-teal-200/50 rounded-full h-3 mb-3 border-2 border-teal-300">
                                    <div
                                        className="bg-gradient-to-r from-teal-400 to-cyan-400 h-full rounded-full transition-all duration-1000"
                                        style={{ width: `${lang.proficiency}%` }}
                                    ></div>
                                </div>
                                <p className="text-teal-700 text-sm mb-2 font-semibold">{lang.level}</p>
                                <p className="text-teal-600 text-sm">{lang.details}</p>
                            </WindowCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
