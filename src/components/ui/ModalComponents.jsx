// Reusable Education Card Component
export const EducationCard = ({ education, index }) => {
    return (
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
    );
};

// Reusable Modal Header Component
export const ModalHeader = ({ title, onClose }) => {
    return (
        <div className="bg-gradientcustom text-thisBlack border-b-2 border-thisBlack h-16 text-center flex justify-center items-center font-payToneOne text-2xl relative">
            {title}
            <button
                onClick={onClose}
                className="absolute top-2 right-2 font-karla bg-thisBlack text-white rounded-full h-8 w-8 flex justify-center items-center hover:bg-white hover:text-thisBlack transition"
            >
                X
            </button>
        </div>
    );
};

// Reusable Modal Container Component
export const ModalContainer = ({ children, maxWidth = 'max-w-xl' }) => {
    return (
        <div className="fixed w-full h-full flex justify-center items-center z-30 bg-black bg-opacity-50">
            <div className={`bg-white border-2 border-thisBlack rounded-xl overflow-hidden w-3/4 ${maxWidth} flex flex-col relative`}>
                {children}
            </div>
        </div>
    );
};