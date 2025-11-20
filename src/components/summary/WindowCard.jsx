// Reusable Window-style Card Component
export function WindowCard({
    title,
    children,
    gradientFrom,
    gradientTo,
    borderColor,
    shadowColor,
    className = "",
    headerGradientFrom,
    headerGradientTo,
    headerBorderColor,
    titleColor,
    maxWidth = "max-w-xl"
}) {
    return (
        <div className={`bg-gradient-to-b from-${gradientFrom} to-${gradientTo} rounded-3xl p-8 md:p-10 border-[6px] border-white shadow-[0_0_0_4px_${shadowColor}] ${maxWidth} relative ${className}`}>
            <div className={`absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-${headerGradientFrom} to-${headerGradientTo} rounded-t-3xl flex items-center justify-between px-4 border-b-4 border-${headerBorderColor}`}>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 border-2 border-green-500"></div>
                </div>
                <p className={`text-xs font-bold text-${titleColor}`}>{title}</p>
                <div className="w-12"></div>
            </div>
            <div className="mt-8">
                {children}
            </div>
        </div>
    );
}

// Simple Window Card without top bar
export function SimpleWindowCard({
    children,
    gradientFrom,
    gradientTo,
    shadowColor,
    className = ""
}) {
    return (
        <div className={`bg-gradient-to-b from-${gradientFrom} to-${gradientTo} rounded-3xl p-6 border-[6px] border-white shadow-[0_0_0_4px_${shadowColor}] transform hover:scale-105 transition-all duration-300 relative ${className}`}>
            {children}
        </div>
    );
}

// Section Header
export function SectionHeader({ title, color, shadowColor, borderColor }) {
    return (
        <div className="text-center mb-12">
            <div className={`inline-block bg-white/90 backdrop-blur-md rounded-full px-8 py-4 border-4 border-${borderColor} shadow-[6px_6px_0px_0px_${shadowColor}]`}>
                <h2 className="text-4xl md:text-5xl font-black" style={{
                    color: color,
                    textShadow: `2px 2px 0px ${shadowColor}`
                }}>
                    {title}
                </h2>
            </div>
        </div>
    );
}
