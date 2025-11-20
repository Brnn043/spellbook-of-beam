'use client';
import { Canvas } from "@react-three/fiber";
import { Suspense, createContext, useState, useContext } from "react";
import Experience from "./Experience";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { personalInfo } from "@/data/personal";
import { educationData } from "@/data/education";
import { skillsData } from "@/data/skills";
import { activityData } from "@/data/activities";
import { websiteProjects, gameProjects, competitiveProjects, otherProjects } from "@/data/projects";

// Create context for camera position
export const CameraContext = createContext({ cameraY: 20, setCameraY: () => { } });

export default function Summary() {
    const [cameraY, setCameraY] = useState(20);

    return (
        <CameraContext.Provider value={{ cameraY, setCameraY }}>
            <div className="min-h-screen bg-transparent">

                {/* Fixed 3D Background */}
                <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
                    <Suspense fallback={<LoadingScreen />}>
                        <Canvas
                            camera={{
                                fov: 45,
                                near: 0.1,
                                far: 200,
                                position: [0, 20, 8],
                            }}
                        >
                            <Experience />
                        </Canvas>
                    </Suspense>
                </div>

                {/* Scrollable Content */}
                <div className="relative z-10">
                    {/* Hero Section */}
                    <ScrollSection targetY={20} setCameraY={setCameraY}>
                        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                            <div className="bg-gradient-to-b from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12 border-[6px] border-white shadow-[0_0_0_4px_#EC4899] max-w-4xl relative">
                                {/* Window top bar */}
                                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-pink-200 to-purple-200 rounded-t-3xl flex items-center justify-between px-4 border-b-4 border-pink-300">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400 border-2 border-green-500"></div>
                                    </div>
                                    <p className="text-xs font-bold text-pink-600">WELCOME.exe</p>
                                    <div className="w-12"></div>
                                </div>
                                <div className="mt-8">
                                    <div className="inline-block bg-gradient-to-r from-pink-200 to-purple-200 rounded-full px-6 py-2 mb-6 border-3 border-pink-400">
                                        <p className="text-sm font-bold text-pink-600">✨ WELCOME ✨</p>
                                    </div>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight" style={{
                                    color: '#FF69B4',
                                    textShadow: '4px 4px 0px #FFB6C1, 6px 6px 0px #DDA0DD'
                                }}>
                                    Beam's Portfolio
                                </h1>
                                <p className="text-xl md:text-2xl text-purple-700 font-semibold mb-6">
                                    スペルブック オブ ビーム ✨
                                </p>
                                <div className="text-base text-gray-700 bg-white/80 rounded-2xl p-6 border-4 border-pink-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]" style={{ borderStyle: 'solid' }}>
                                    {personalInfo.find(p => p.title.includes('Introduction'))?.description}
                                </div>
                            </div>
                        </section>
                    </ScrollSection>

                    {/* Spacer for 3D scroll - Character section */}
                    <ScrollSection targetY={8} setCameraY={setCameraY}>
                        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                            <div className="bg-gradient-to-b from-blue-50 to-cyan-50 rounded-3xl p-10 border-[6px] border-white shadow-[0_0_0_4px_#3B82F6] max-w-2xl relative">
                                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-t-3xl flex items-center justify-between px-4 border-b-4 border-blue-300">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400 border-2 border-green-500"></div>
                                    </div>
                                    <p className="text-xs font-bold text-blue-600">DEVELOPER.exe</p>
                                    <div className="w-12"></div>
                                </div>
                                <div className="mt-6">
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
                                </div>
                            </div>
                        </section>
                    </ScrollSection>

                    {/* Spacer for 3D scroll - PotionRoom section */}
                    <ScrollSection targetY={0} setCameraY={setCameraY}>
                        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                            <div className="bg-gradient-to-b from-orange-50 to-yellow-50 rounded-3xl p-10 border-[6px] border-white shadow-[0_0_0_4px_#FB923C] max-w-2xl relative">
                                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-t-3xl flex items-center justify-between px-4 border-b-4 border-orange-300">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400 border-2 border-green-500"></div>
                                    </div>
                                    <p className="text-xs font-bold text-orange-600">POTION.exe</p>
                                    <div className="w-12"></div>
                                </div>
                                <div className="mt-6">
                                    <div className="text-6xl mb-4">🧪</div>
                                    <h2 className="text-4xl md:text-5xl font-black mb-4" style={{
                                        color: '#FF6347',
                                        textShadow: '3px 3px 0px #FFB347'
                                    }}>
                                        Potion Brewing
                                    </h2>
                                    <p className="text-lg text-orange-700 font-medium">
                                        Where projects are crafted with magic 🎨
                                    </p>
                                </div>
                            </div>
                        </section>
                    </ScrollSection>

                    {/* Spacer for 3D scroll - ExploreRoom section */}
                    <ScrollSection targetY={-10} setCameraY={setCameraY}>
                        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                            <div className="bg-gradient-to-b from-green-50 to-emerald-50 rounded-3xl p-10 border-[6px] border-white shadow-[0_0_0_4px_#22C55E] max-w-2xl relative">
                                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-green-200 to-emerald-200 rounded-t-3xl flex items-center justify-between px-4 border-b-4 border-green-300">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400 border-2 border-green-500"></div>
                                    </div>
                                    <p className="text-xs font-bold text-green-600">ADVENTURE.exe</p>
                                    <div className="w-12"></div>
                                </div>
                                <div className="mt-6">
                                    <div className="text-6xl mb-4">🗺️</div>
                                    <h2 className="text-4xl md:text-5xl font-black mb-4" style={{
                                        color: '#32CD32',
                                        textShadow: '3px 3px 0px #90EE90'
                                    }}>
                                        Adventure Room
                                    </h2>
                                    <p className="text-lg text-green-700 font-medium">
                                        Exploring new horizons 🌟
                                    </p>
                                </div>
                            </div>
                        </section>
                    </ScrollSection>

                    {/* About Me Section */}
                    <section className="py-20 px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <div className="inline-block bg-white/90 backdrop-blur-md rounded-full px-8 py-4 border-4 border-pink-300 shadow-[6px_6px_0px_0px_rgba(236,72,153,0.3)]">
                                    <h2 className="text-4xl md:text-5xl font-black" style={{
                                        color: '#FF69B4',
                                        textShadow: '2px 2px 0px #FFB6C1'
                                    }}>
                                        About Me 🌟
                                    </h2>
                                </div>
                            </div>
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
        </CameraContext.Provider>
    );
}

// ScrollSection component that updates camera position when in view
function ScrollSection({ children, targetY, setCameraY }) {
    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Section in view, setting camera Y to:', targetY);
                setCameraY(targetY);
            }
        });
    };

    const sectionRef = (node) => {
        if (node && typeof IntersectionObserver !== 'undefined') {
            const observer = new IntersectionObserver(handleIntersection, {
                threshold: 0.5 // Trigger when 50% of section is visible
            });
            observer.observe(node);
            return () => observer.disconnect();
        }
    };

    return <div ref={sectionRef}>{children}</div>;
}