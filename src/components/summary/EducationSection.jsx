import { SectionHeader, WindowCard } from './WindowCard';
import { educationData } from '@/data/education';

export function EducationSection() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <SectionHeader
                    title="Education 🎓"
                    color="#06B6D4"
                    shadowColor="rgba(34,211,238,0.3)"
                    borderColor="cyan-300"
                />
                <div className="space-y-8">
                    {educationData.map((edu, index) => (
                        <WindowCard
                            key={index}
                            title="EDUCATION.exe"
                            gradientFrom="cyan-50"
                            gradientTo="blue-50"
                            shadowColor="#3B82F6"
                            headerGradientFrom="cyan-200"
                            headerGradientTo="blue-200"
                            headerBorderColor="cyan-300"
                            titleColor="cyan-700"
                            maxWidth="w-full"
                            className="hover:scale-105"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-cyan-700">{edu.degree}</h3>
                                    <p className="text-xl text-cyan-600">{edu.school}</p>
                                </div>
                                <div className="text-right mt-4 md:mt-0">
                                    <p className="text-lg text-cyan-700 font-semibold">GPA: {edu.gpa}</p>
                                    <p className="text-cyan-600">{edu.graduation}</p>
                                    <span className={`px-3 py-1 rounded-full text-sm font-semibold border-2 ${edu.status === 'current'
                                            ? 'bg-green-100 text-green-700 border-green-400'
                                            : 'bg-blue-100 text-blue-700 border-blue-400'
                                        }`}>
                                        {edu.status === 'current' ? 'Currently Studying' : 'Graduated'}
                                    </span>
                                </div>
                            </div>
                        </WindowCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
