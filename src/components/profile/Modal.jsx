import { useState } from "react";
import { InfoModal, ProjectModal } from "../GlobalModal";

export const KnowMe = ({ setOpen }) => {
    const data = [
        {
            title: '👋 Introduction',
            images: ['/Beam.webp', '/Beam2.webp', '/Beam3.webp'],
            description: [
                'Hello! I\'m Raksakul Hiranas, but everyone calls me Beam! 🌟',
                'Born on July 2nd, 2005 🎂 Currently pursuing my passion in Computer Engineering at Chulalongkorn University as a 3rd-year student.',
                'I\'m a tech enthusiast who loves bringing creative ideas to life through code! 💻✨'
            ],
            tags: ['Student', 'Computer Engineering', 'Tech Enthusiast', 'Born 2005'],
            viewMore: [
                {
                    title: 'Email',
                    link: 'mailto:raksakul.hiranas@gmail.com',
                    linkTitle: 'raksakul.hiranas@gmail.com'
                },
                {
                    title: 'Github',
                    link: 'https://github.com/Brnn043',
                    linkTitle: 'Brnn043'
                },
                {
                    title: 'LinkedIn',
                    link: 'https://linkedin.com/in/raksakul-hiranas',
                    linkTitle: 'Raksakul Hiranas'
                },
            ]
        },
        {
            title: '🚀 Personality & Values',
            images: ['/Beam.webp', '/Beam2.webp', '/Beam3.webp'],
            description: [
                'I\'m an enthusiastic and hardworking individual with an unquenchable thirst for creativity! 🎨',
                'Learning new things excites me, and I embrace challenges as opportunities to grow and excel. 📈',
                'Driven by innovation and creativity, I believe in turning obstacles into stepping stones for success. 💡',
                'My dedication to continuous growth fuels both my personal development and academic excellence. 🌱'
            ],
            tags: ['Enthusiastic', 'Creative', 'Hardworking', 'Innovative', 'Growth Mindset'],
            viewMore: null
        },
        {
            title: '🎯 Lifestyle & Hobbies',
            images: ['/Beam.webp', '/Beam2.webp', '/Beam3.webp'],
            description: [
                'When challenges arise, my determination and commitment help me push through to achieve my goals! 💪',
                'In my free time, I dive into various creative pursuits that keep me inspired and energized:',
                '💻 Coding new projects and experimenting with technologies',
                '🎨 Drawing and visual arts to express my creativity',
                '💃 Dancing to stay active and have fun',
                '✨ Exploring other creative outlets that spark my imagination!'
            ],
            tags: ['Coding', 'Drawing', 'Dancing', 'Creative Arts', 'Determined'],
            viewMore: [
                {
                    title: 'Email',
                    link: 'mailto:raksakul.hiranas@gmail.com',
                    linkTitle: 'raksakul.hiranas@gmail.com'
                },
                {
                    title: 'Github',
                    link: 'https://github.com/Brnn043',
                    linkTitle: 'Brnn043'
                },
                {
                    title: 'LinkedIn',
                    link: 'https://linkedin.com/in/raksakul-hiranas',
                    linkTitle: 'Raksakul Hiranas'
                },
            ]
        }
    ]

    return <ProjectModal title={'About Me'} data={data} setOpen={setOpen} />
};


export const Education = ({ setOpen }) => {
    const data = [
        {
            degree: "Computer Engineering",
            school: "Chulalongkorn University",
            gpa: "3.95",
            graduation: "Expected Graduation: 2027",
            status: "current"
        },
        {
            degree: "Sci-Math Program",
            school: "Saint Joseph Convent School",
            gpa: "4.00",
            graduation: "Graduated: 2023",
            status: "completed"
        }
    ];

    return (
        <div className="fixed w-full h-full flex justify-center items-center z-30 bg-black bg-opacity-50">
            <div className="bg-white border-2 border-thisBlack rounded-xl overflow-hidden w-3/4 max-w-xl flex flex-col relative">
                {/* Header */}
                <div className="bg-gradientcustom text-thisBlack border-b-2 border-thisBlack h-16 text-center flex justify-center items-center font-payToneOne text-2xl relative">
                    Education
                    {/* Close Button */}
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-2 right-2 font-karla bg-thisBlack text-white rounded-full h-8 w-8 flex justify-center items-center hover:bg-white hover:text-thisBlack transition"
                    >
                        X
                    </button>
                </div>

                {/* Education Content */}
                <div className="p-6 space-y-6">
                    {data.map((education, index) => (
                        <div key={index} className="bg-gradient-to-r from-[#ffeaf8] to-[#f8f4ff] border border-[#e1bee7] rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex flex-col space-y-3">
                                {/* Degree/Program */}
                                <div className="flex items-center space-x-2">
                                    <span className="text-[#c455e8] text-lg">🎓</span>
                                    <h3 className="font-karla text-lg font-bold text-thisBlack">
                                        {education.degree}
                                    </h3>
                                    {education.status === "current" && (
                                        <span className="bg-[#c455e8] text-white text-xs px-2 py-1 rounded-full font-karla">
                                            Current
                                        </span>
                                    )}
                                </div>

                                {/* School */}
                                <div className="flex items-center space-x-2 ml-6">
                                    <span className="text-[#8b5cf6] text-sm">🏫</span>
                                    <p className="font-karla text-base text-gray-700 font-medium">
                                        {education.school}
                                    </p>
                                </div>

                                {/* GPA and Graduation Info */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center ml-6 space-y-2 sm:space-y-0">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-[#10b981] text-sm">📊</span>
                                        <span className="font-karla text-sm font-semibold text-gray-600">
                                            GPA:
                                        </span>
                                        <span className="font-karla text-base font-bold text-[#10b981]">
                                            {education.gpa}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-[#f59e0b] text-sm">📅</span>
                                        <span className="font-karla text-sm text-gray-600">
                                            {education.graduation}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export const Interest = ({ setOpen }) => {
    const data = [
        "Digital Transformation",
        "Generative AI",
        "Business Analytics",
        "Computer Graphic"
    ]
    return <InfoModal title={'Interests'} setOpen={setOpen} data={data} />
}


export const Skills = ({ setOpen }) => {
    const data = [
        {
            title: '💻 Technical Skills',
            content: [
                {
                    title: '🔥 Programming Languages',
                    content: 'C, C++, C#, Python, Java, SQL',
                    icon: '⚡',
                    color: 'from-blue-100 to-blue-200'
                },
                {
                    title: '🧠 Data, Analytics & AI',
                    content: 'Business Analytics, Data Visualization (Power BI), Generative AI, Python (Data Processing), SQL',
                    icon: '📊',
                    color: 'from-teal-100 to-teal-200'
                },
                {
                    title: '🖌️ Design & Prototyping',
                    content: 'Figma (UX/UI), ERD (Database Design)',
                    icon: '🖌️',
                    color: 'from-yellow-100 to-yellow-200'
                },
                {
                    title: '🌐 Web Technologies',
                    content: 'HTML, CSS, JavaScript, TypeScript',
                    icon: '🚀',
                    color: 'from-green-100 to-green-200'
                },
                {
                    title: '⚛️ Frameworks & Libraries',
                    content: 'React, Next.js, Three.js, React-Three-Fiber, Astro, Vue.js',
                    icon: '🎯',
                    color: 'from-purple-100 to-purple-200'
                },
                {
                    title: '🎨 UI Frameworks',
                    content: 'Tailwind CSS',
                    icon: '✨',
                    color: 'from-pink-100 to-pink-200'
                },
                {
                    title: '🎮 Game Development & 3D',
                    content: 'Unity, Blender',
                    icon: '🎲',
                    color: 'from-orange-100 to-orange-200'
                },
                {
                    title: '📊 Version Control',
                    content: 'Git, GitHub',
                    icon: '🔄',
                    color: 'from-gray-100 to-gray-200'
                }
            ]
        },
        {
            title: '🗣️ Language Skills',
            content: [
                {
                    title: '🇬🇧 English',
                    level: 'Advanced (C1)',
                    details: '3-month immersive study at Stafford House, UK (Mar-May 2023). Confident in daily multicultural communication.',
                    icon: '🏆',
                    proficiency: 90
                },
                {
                    title: '🇯🇵 Japanese',
                    level: 'Elementary',
                    details: '2-month VR Developer Internship in Tokyo (Jun-Jul 2025). Applied practical speaking & listening skills daily.',
                    icon: '🌸',
                    proficiency: 30
                },
                {
                    title: '🇹🇭 Thai',
                    level: 'Native Speaker',
                    details: 'Mother tongue',
                    icon: '🏠',
                    proficiency: 100
                }
            ]
        }
    ];

    const [currentPage, setCurrentPage] = useState(0);

    const handlePrevGame = () => {
        setCurrentPage(currentPage === 0 ? 1 : 0);
    };

    const handleNextGame = () => {
        setCurrentPage(currentPage === 0 ? 1 : 0);
    };

    return (
        <div className="fixed w-full h-full flex justify-center items-center z-30 bg-black bg-opacity-50">
            <div className="bg-white border-2 border-thisBlack rounded-xl overflow-hidden w-3/4 max-w-2xl flex flex-col relative">
                {/* Header */}
                <div className="bg-gradientcustom text-thisBlack border-b-2 border-thisBlack h-16 text-center flex justify-center items-center font-payToneOne text-2xl relative">
                    Skills & Expertise
                    {/* Close Button */}
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-2 right-2 font-karla bg-thisBlack text-white rounded-full h-8 w-8 flex justify-center items-center hover:bg-white hover:text-thisBlack transition"
                    >
                        X
                    </button>
                </div>

                <div className="p-6">
                    {/* Navigation */}
                    <div className="flex justify-between items-center mb-6">
                        <button
                            onClick={handlePrevGame}
                            className="px-6 py-3 bg-gradient-to-r from-[#f3bfe1] to-[#ef9ad2] hover:from-[#ef9ad2] hover:to-[#e879c7] text-white rounded-full font-karla font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            ← Previous
                        </button>
                        <h3 className="font-karla text-xl font-bold text-thisBlack flex items-center">
                            {data[currentPage].title}
                        </h3>
                        <button
                            onClick={handleNextGame}
                            className="px-6 py-3 bg-gradient-to-r from-[#c455e8] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#7c3aed] text-white rounded-full font-karla font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Next →
                        </button>
                    </div>

                    {/* Content */}
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                        {currentPage === 0 ? (
                            // Technical Skills
                            <div className="grid gap-4">
                                {data[currentPage].content.map((skill, index) => (
                                    <div key={index} className={`bg-gradient-to-r ${skill.color} border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105`}>
                                        <div className="flex items-start space-x-3">
                                            <span className="text-2xl">{skill.icon}</span>
                                            <div className="flex-1">
                                                <h4 className="font-karla font-bold text-thisBlack text-lg mb-2">
                                                    {skill.title}
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {skill.content.split(', ').map((tech, techIndex) => (
                                                        <span key={techIndex} className="bg-white bg-opacity-80 px-3 py-1 rounded-full text-sm font-karla font-medium text-gray-700 shadow-sm">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            // Language Skills
                            <div className="space-y-4">
                                {data[currentPage].content.map((language, index) => (
                                    <div key={index} className="bg-gradient-to-r from-[#ffeaf8] to-[#f8f4ff] border border-[#e1bee7] rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-start space-x-3 flex-1">
                                                <span className="text-3xl mt-1">{language.icon}</span>
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-3 mb-2">
                                                        <h4 className="font-karla font-bold text-thisBlack text-lg">
                                                            {language.title}
                                                        </h4>
                                                        <span className="bg-[#c455e8] text-white px-3 py-1 rounded-full text-sm font-karla font-semibold">
                                                            {language.level}
                                                        </span>
                                                    </div>

                                                    {/* Detailed Description */}
                                                    <div className="bg-white bg-opacity-60 rounded-lg p-3 mb-3">
                                                        <p className="font-karla text-sm text-gray-700 leading-relaxed">
                                                            {language.details}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Proficiency Section */}
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="font-karla text-sm font-semibold text-gray-600">
                                                    Proficiency Level
                                                </span>
                                                <span className="font-karla text-sm font-bold text-[#c455e8]">
                                                    {language.proficiency}%
                                                </span>
                                            </div>

                                            {/* Proficiency Bar */}
                                            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                                                <div
                                                    className="bg-gradient-to-r from-[#c455e8] to-[#8b5cf6] h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
                                                    style={{ width: `${language.proficiency}%` }}
                                                >
                                                    {language.proficiency >= 20 && (
                                                        <span className="text-white text-xs font-bold">
                                                            {language.proficiency}%
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Page Indicator */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {data.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentPage === index
                                    ? 'bg-[#c455e8] scale-125'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};