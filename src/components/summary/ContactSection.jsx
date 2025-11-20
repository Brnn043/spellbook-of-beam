import { WindowCard } from './WindowCard';
import { personalInfo } from '@/data/personal';

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
                        <div className="flex flex-wrap justify-center gap-4">
                            {personalInfo.find(p => p.contacts)?.contacts?.map((contact, index) => (
                                <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer"
                                    className="px-6 py-3 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-white rounded-full font-semibold border-2 border-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-[4px_4px_0px_0px_rgba(236,72,153,0.3)]">
                                    {contact.platform}
                                </a>
                            )) || (
                                    <a href="mailto:your.email@example.com"
                                        className="px-6 py-3 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-white rounded-full font-semibold border-2 border-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-[4px_4px_0px_0px_rgba(236,72,153,0.3)]">
                                        Contact Me
                                    </a>
                                )}
                        </div>
                    </div>
                </WindowCard>
            </div>
        </section>
    );
}
