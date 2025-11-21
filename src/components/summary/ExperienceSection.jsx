import { SectionHeader, WindowCard } from './WindowCard';
import { activityData } from '@/data/activities';

export function ExperienceSection() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <SectionHeader
                    title="Experience 💼"
                    color="#A855F7"
                    shadowColor="rgba(168,85,247,0.3)"
                    borderColor="purple-300"
                />
                <div className="space-y-8">
                    {activityData.slice(0, 5).map((activity, index) => (
                        <WindowCard
                            key={index}
                            title="EXPERIENCE.exe"
                            gradientFrom="purple-50"
                            gradientTo="pink-50"
                            shadowColor="#A855F7"
                            headerGradientFrom="purple-200"
                            headerGradientTo="pink-200"
                            headerBorderColor="purple-300"
                            titleColor="purple-700"
                            maxWidth="w-full"
                            className="hover:scale-105"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-purple-700">{activity.title}</h3>
                                </div>
                                <div className="text-right mt-4 md:mt-0">
                                    <div className="flex flex-wrap gap-2">
                                        {activity.tags?.slice(0, 2).map((tag, tagIndex) => (
                                            <span key={tagIndex} className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-sm font-semibold border-2 border-purple-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-purple-600 leading-relaxed">
                                {Array.isArray(activity.description) ? activity.description[0] : activity.description}
                            </p>
                            {activity.tags && activity.tags.length > 2 && (
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {activity.tags.slice(2).map((skill, skillIndex) => (
                                        <span key={skillIndex} className="px-3 py-1 bg-pink-200 text-pink-700 rounded-full text-sm font-semibold border-2 border-pink-400">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {activity.viewMore && activity.viewMore[0] && (
                                <div className="mt-4">
                                    <a href={activity.viewMore[0].link} target="_blank" rel="noopener noreferrer"
                                        className="inline-block px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full font-semibold border-2 border-purple-500 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(168,85,247,0.3)]">
                                        View More
                                    </a>
                                </div>
                            )}
                        </WindowCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
