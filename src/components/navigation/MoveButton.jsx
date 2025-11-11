import { useState, useEffect } from 'react';

export default function MoveButton({ setControls }) {
    const [isLeftPressed, setIsLeftPressed] = useState(false);
    const [isRightPressed, setIsRightPressed] = useState(false);

    const handleControl = (action, state) => {
        setControls((prev) => ({ ...prev, [action]: state }));
    };

    useEffect(() => {
        const handleMouseUp = () => {
            if (isLeftPressed) {
                handleControl('backward', false);
                setIsLeftPressed(false);
            }
            if (isRightPressed) {
                handleControl('forward', false);
                setIsRightPressed(false);
            }
        };

        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchend', handleMouseUp);

        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isLeftPressed, isRightPressed]);

    return (
        <div className="fixed bottom-0 left-0 right-0 flex justify-between py-8 px-12 z-10">
            {/* Left Button */}
            <button
                tabIndex={-1}
                onMouseDown={() => {
                    handleControl('backward', true);
                    setIsLeftPressed(true);
                }}
                onTouchStart={() => {
                    handleControl('backward', true);
                    setIsLeftPressed(true);
                }}
                className={`font-karla w-28 h-12 flex items-center justify-center text-center text-lg ${isLeftPressed ? 'bg-gradientcustom border-white' : 'bg-gradientcustom2 border-thisBlack'
                    } text-thisBlack border-2 rounded-full relative overflow-hidden focus:outline-none transition-all duration-200`}
            >
                <span className="select-none relative z-10">Left</span>
            </button>

            {/* Right Button */}
            <button
                tabIndex={-1}
                onMouseDown={() => {
                    handleControl('forward', true);
                    setIsRightPressed(true);
                }}
                onTouchStart={() => {
                    handleControl('forward', true);
                    setIsRightPressed(true);
                }}
                className={`font-karla w-28 h-12 flex items-center justify-center text-center text-lg ${isRightPressed ? 'bg-gradientcustom border-white' : 'bg-gradientcustom2 border-thisBlack'
                    } text-thisBlack border-2 rounded-full relative overflow-hidden focus:outline-none transition-all duration-200`}
            >
                <span className="select-none relative z-10">Right</span>
            </button>

            <style jsx>{`
                button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.1);
                    width: 0%;
                    transition: width 0.5s ease-in-out;
                    z-index: 0;
                }

                button:hover::before {
                    width: 100%;
                }

                button:hover {
                    background-color: rgba(236, 199, 255);
                }
            `}</style>
        </div>
    );
}
