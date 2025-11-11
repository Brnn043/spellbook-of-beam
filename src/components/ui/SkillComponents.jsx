// Reusable Technical Skill Card Component
export const TechnicalSkillCard = ({ skill, index }) => {
    return (
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
    );
};

// Reusable Language Skill Card Component
export const LanguageSkillCard = ({ language, index }) => {
    return (
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
    );
};

// Navigation Component for Skills Modal
export const SkillsNavigation = ({ currentPage, onPrev, onNext, data }) => {
    return (
        <div className="flex justify-between items-center mb-6">
            <button
                onClick={onPrev}
                className="px-6 py-3 bg-gradient-to-r from-[#f3bfe1] to-[#ef9ad2] hover:from-[#ef9ad2] hover:to-[#e879c7] text-white rounded-full font-karla font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
                ← Previous
            </button>
            <h3 className="font-karla text-xl font-bold text-thisBlack flex items-center">
                {data[currentPage].title}
            </h3>
            <button
                onClick={onNext}
                className="px-6 py-3 bg-gradient-to-r from-[#c455e8] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#7c3aed] text-white rounded-full font-karla font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
                Next →
            </button>
        </div>
    );
};

// Page Indicators Component
export const PageIndicators = ({ data, currentPage, onPageChange }) => {
    return (
        <div className="flex justify-center mt-6 space-x-2">
            {data.map((_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentPage === index
                        ? 'bg-[#c455e8] scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                ></button>
            ))}
        </div>
    );
};