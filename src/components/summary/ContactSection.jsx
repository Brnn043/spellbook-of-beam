import { WindowCard } from './WindowCard';
import { contactInfo } from '@/data/contact';

export function ContactSection() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <WindowCard
                    title="CONTACT.exe"
                    gradientFrom="pink-50"
                    gradientTo="cyan-50"
                    shadowColor="#EC4899"
                    headerGradientFrom="pink-200"
                    headerGradientTo="cyan-200"
                    headerBorderColor="pink-300"
                    titleColor="pink-700"
                    maxWidth="w-full"
                    className="p-12"
                >
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-black mb-6" style={{
                            color: '#EC4899',
                            textShadow: '3px 3px 0px #F9A8D4'
                        }}>
                            Let's Create Magic Together ✨
                        </h2>
                        <p className="text-xl text-purple-600 mb-8 font-medium">
                            Ready to bring your ideas to life? Let's connect and make something amazing!
                        </p>

                        {/* Contact Links - All as buttons for consistency */}
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href={`mailto:${contactInfo.email.address}`}
                                className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-semibold border-2 border-red-600 hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-[4px_4px_0px_0px_rgba(239,68,68,0.3)] flex items-center gap-2"
                            >
                                <span className="text-xl">{contactInfo.email.icon}</span>
                                <span>{contactInfo.email.address}</span>
                            </a>
                            <a
                                href={contactInfo.github.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full font-semibold border-2 border-gray-800 hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] flex items-center gap-2"
                            >
                                <span className="text-xl">{contactInfo.github.icon}</span>
                                <span>GitHub: {contactInfo.github.username}</span>
                            </a>
                            <a
                                href={contactInfo.linkedin.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-semibold border-2 border-blue-600 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-[4px_4px_0px_0px_rgba(59,130,246,0.3)] flex items-center gap-2"
                            >
                                <span className="text-xl">{contactInfo.linkedin.icon}</span>
                                <span>LinkedIn: {contactInfo.linkedin.name}</span>
                            </a>
                            <a
                                href={contactInfo.instagram.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold border-2 border-pink-500 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-[4px_4px_0px_0px_rgba(236,72,153,0.3)] flex items-center gap-2"
                            >
                                <span className="text-xl">{contactInfo.instagram.icon}</span>
                                <span>Instagram: @{contactInfo.instagram.username}</span>
                            </a>
                        </div>
                    </div>
                </WindowCard>
            </div>
        </section>
    );
}
