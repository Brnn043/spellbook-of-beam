'use client';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Experience from "./Experience";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { personalInfo } from "@/data/personal";
import { educationData } from "@/data/education";
import { skillsData } from "@/data/skills";
import { activityData } from "@/data/activities";
import { websiteProjects, gameProjects, competitiveProjects, otherProjects } from "@/data/projects";

export default function Summary() {
    return (
        <div className="min-h-screen">
            {/* Fixed 3D Background */}
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <Suspense fallback={<LoadingScreen />}>
                    <Canvas
                        camera={{
                            fov: 45,
                            near: 0.1,
                            far: 200,
                            position: [0, 0, 5],
                        }}
                    >
                        <Experience />
                    </Canvas>
                </Suspense>
            </div>

            {/* Scrollable Content */}
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                    <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-300/30">
                        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text mb-6">
                            Beam's Portfolio
                        </h1>
                        <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-2xl">
                            Welcome to my magical realm of creativity and code ✨
                        </p>
                        <div className="text-lg text-purple-200">
                            {personalInfo.find(p => p.title.includes('Introduction'))?.description}
                        </div>
                    </div>
                </section>

                {/* About Me Section */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-5xl font-bold text-center text-transparent bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text mb-16">
                            About Me 🌟
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            {personalInfo.map((info, index) => (
                                <div key={index} className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/20 transform hover:scale-105 transition-all duration-300">
                                    <h3 className="text-2xl font-semibold text-purple-200 mb-4 flex items-center gap-3">
                                        <span className="text-3xl">{info.title.split(' ')[0]}</span>
                                        {info.title.replace(/^[^\s]+ /, '')}
                                    </h3>
                                    <p className="text-purple-100 leading-relaxed">
                                        {info.description}
                                    </p>
                                    {info.tags && (
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {info.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">
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

                {/* Education Section */}
                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl font-bold text-center text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text mb-16">
                            Education 🎓
                        </h2>
                        <div className="space-y-8">
                            {educationData.map((edu, index) => (
                                <div key={index} className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-300/20 transform hover:scale-105 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-cyan-200">{edu.degree}</h3>
                                            <p className="text-xl text-cyan-100">{edu.school}</p>
                                        </div>
                                        <div className="text-right mt-4 md:mt-0">
                                            <p className="text-lg text-cyan-200 font-semibold">GPA: {edu.gpa}</p>
                                            <p className="text-cyan-300">{edu.graduation}</p>
                                            <span className={`px-3 py-1 rounded-full text-sm ${edu.status === 'current'
                                                ? 'bg-green-500/20 text-green-300'
                                                : 'bg-blue-500/20 text-blue-300'
                                                }`}>
                                                {edu.status === 'current' ? 'Currently Studying' : 'Graduated'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-5xl font-bold text-center text-transparent bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text mb-16">
                            Skills & Expertise 🔮
                        </h2>

                        {/* Technical Skills */}
                        <div className="mb-16">
                            <h3 className="text-3xl font-bold text-green-200 mb-8 text-center">Technical Skills</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {skillsData[0]?.content?.map((skill, index) => (
                                    <div key={index} className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-green-300/20 transform hover:scale-105 transition-all duration-300">
                                        <h4 className="text-xl font-semibold text-green-200 mb-4 flex items-center gap-2">
                                            <span>{skill.icon}</span>
                                            {skill.title}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.content.split(', ').map((skillName, skillIndex) => (
                                                <span key={skillIndex} className="px-3 py-1 bg-green-500/20 text-green-200 rounded-full text-sm">
                                                    {skillName}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Language Skills */}
                        <div>
                            <h3 className="text-3xl font-bold text-teal-200 mb-8 text-center">Languages</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {skillsData[1]?.content?.map((lang, index) => (
                                    <div key={index} className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-teal-300/20 transform hover:scale-105 transition-all duration-300">
                                        <div className="flex justify-between items-center mb-3">
                                            <h4 className="text-xl font-semibold text-teal-200 flex items-center gap-2">
                                                <span>{lang.icon}</span>
                                                {lang.title}
                                            </h4>
                                            <span className="text-teal-300 font-bold">{lang.proficiency}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700/50 rounded-full h-3 mb-3">
                                            <div
                                                className="bg-gradient-to-r from-teal-400 to-cyan-400 h-3 rounded-full transition-all duration-1000"
                                                style={{ width: `${lang.proficiency}%` }}
                                            ></div>
                                        </div>
                                        <p className="text-teal-200 text-sm mb-2 font-semibold">{lang.level}</p>
                                        <p className="text-teal-100 text-sm">{lang.details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-5xl font-bold text-center text-transparent bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text mb-16">
                            Featured Projects 🎨
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[...websiteProjects.slice(0, 2), ...gameProjects.slice(0, 2), ...competitiveProjects.slice(0, 1), ...otherProjects.slice(0, 1)].map((project, index) => (
                                <div key={index} className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-orange-300/20 transform hover:scale-105 transition-all duration-300">
                                    {project.images && project.images[0] && (
                                        <div className="w-full h-40 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl mb-4 overflow-hidden">
                                            <img
                                                src={project.images[0]}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold text-orange-200 mb-2">{project.title}</h3>
                                    <p className="text-orange-100 text-sm mb-4 line-clamp-3">
                                        {Array.isArray(project.description) ? project.description[0] : project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags?.slice(0, 3).map((tag, tagIndex) => (
                                            <span key={tagIndex} className="px-2 py-1 bg-orange-500/20 text-orange-200 rounded text-xs">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    {project.viewMore && project.viewMore[0] && (
                                        <a href={project.viewMore[0].link} target="_blank" rel="noopener noreferrer"
                                            className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300">
                                            View Project
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl font-bold text-center text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text mb-16">
                            Experience 💼
                        </h2>
                        <div className="space-y-8">
                            {activityData.slice(0, 5).map((activity, index) => (
                                <div key={index} className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-300/20 transform hover:scale-105 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-purple-200">{activity.title}</h3>
                                        </div>
                                        <div className="text-right mt-4 md:mt-0">
                                            <div className="flex flex-wrap gap-2">
                                                {activity.tags?.slice(0, 2).map((tag, tagIndex) => (
                                                    <span key={tagIndex} className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-purple-100 leading-relaxed">
                                        {Array.isArray(activity.description) ? activity.description[0] : activity.description}
                                    </p>
                                    {activity.tags && activity.tags.length > 2 && (
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {activity.tags.slice(2).map((skill, skillIndex) => (
                                                <span key={skillIndex} className="px-3 py-1 bg-pink-500/20 text-pink-200 rounded-full text-sm">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    {activity.viewMore && activity.viewMore[0] && (
                                        <div className="mt-4">
                                            <a href={activity.viewMore[0].link} target="_blank" rel="noopener noreferrer"
                                                className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                                                View More
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text mb-8">
                            Let's Create Magic Together ✨
                        </h2>
                        <p className="text-xl text-purple-100 mb-8">
                            Ready to bring your ideas to life? Let's connect and make something amazing!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {personalInfo.find(p => p.contacts)?.contacts?.map((contact, index) => (
                                <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer"
                                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                                    {contact.platform}
                                </a>
                            )) || (
                                    <a href="mailto:your.email@example.com"
                                        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                                        Contact Me
                                    </a>
                                )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}