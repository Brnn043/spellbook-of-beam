import { SectionHeader, WindowCard } from './WindowCard';
import { websiteProjects, gameProjects, competitiveProjects, otherProjects } from '@/data/projects';

export function ProjectsSection() {
    const featuredProjects = [
        ...websiteProjects.slice(0, 2),
        ...gameProjects.slice(0, 2),
        ...competitiveProjects.slice(0, 1),
        ...otherProjects.slice(0, 1)
    ];

    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    title="Featured Projects 🎨"
                    color="#F97316"
                    shadowColor="rgba(251,146,60,0.3)"
                    borderColor="orange-300"
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => (
                        <WindowCard
                            key={index}
                            title="PROJECT.exe"
                            gradientFrom="orange-50"
                            gradientTo="red-50"
                            shadowColor="#FB923C"
                            headerGradientFrom="orange-200"
                            headerGradientTo="red-200"
                            headerBorderColor="orange-300"
                            titleColor="orange-700"
                            maxWidth="w-full"
                            className="p-6"
                        >
                            {project.images && project.images[0] && (
                                <div className="w-full h-40 bg-white rounded-xl mb-4 overflow-hidden border-4 border-orange-200">
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-orange-700 mb-2">{project.title}</h3>
                            <p className="text-orange-600 text-sm mb-4 line-clamp-3">
                                {Array.isArray(project.description) ? project.description[0] : project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags?.slice(0, 3).map((tag, tagIndex) => (
                                    <span key={tagIndex} className="px-2 py-1 bg-orange-200 text-orange-700 rounded text-xs font-semibold border-2 border-orange-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            {project.viewMore && project.viewMore[0] && (
                                <a href={project.viewMore[0].link} target="_blank" rel="noopener noreferrer"
                                    className="inline-block px-4 py-2 bg-gradient-to-r from-orange-400 to-red-400 text-white rounded-full font-semibold border-2 border-orange-500 hover:from-orange-500 hover:to-red-500 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(251,146,60,0.3)]">
                                    View Project
                                </a>
                            )}
                        </WindowCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
