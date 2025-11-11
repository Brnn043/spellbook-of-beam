import { useState } from "react";

export const NavigateButton = () => {
    const [isPressedVisit, setIsPressedVisit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-4 right-4 z-10 flex flex-col justify-center items-center">
            <div className="w-24 space-y-4">
                <button
                    onMouseDown={() => setIsPressedVisit(true)}
                    onMouseUp={() => setIsPressedVisit(false)}
                    onTouchStart={() => setIsPressedVisit(true)}
                    onTouchEnd={() => setIsPressedVisit(false)}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`font-karla w-24 py-2 border-2 rounded-full shadow-lg relative overflow-hidden focus:outline-none transition-all duration-200 ${isPressedVisit
                        ? "bg-gradientcustom"
                        : isOpen
                            ? "bg-gradientcustom border-white"
                            : "bg-gradientcustom2 border-thisBlack"
                        }`}
                >
                    Visit
                </button>

                {isOpen && (
                    <div className="shadow-lg rounded-lg flex flex-col space-y-2 justify-center items-center">
                        <a
                            href="/Profile"
                            onClick={() => setIsOpen(false)}
                            className={`w-24 py-2 border-2 border-thisBlack text-thisBlack bg-gradientcustom2 text-center rounded-full relative overflow-hidden transition-all`}
                            style={{
                                animation: isOpen ? "slideIn 0.3s ease-out forwards" : "none",
                                animationDelay: "0s",
                            }}
                        >
                            Profile
                        </a>

                        <a
                            href="/Project"
                            onClick={() => setIsOpen(false)}
                            className={`w-24 py-2 border-2 border-thisBlack text-thisBlack bg-gradientcustom2 text-center rounded-full relative overflow-hidden transition-all`}
                            style={{
                                animation: isOpen ? "slideIn 0.3s ease-out forwards" : "none",
                                animationDelay: "0.05s",
                            }}
                        >
                            Project
                        </a>
                        <a
                            href="/Activity"
                            onClick={() => setIsOpen(false)}
                            className={`w-24 py-2 border-2 border-thisBlack text-thisBlack bg-gradientcustom2 text-center rounded-full relative overflow-hidden transition-all`}
                            style={{
                                animation: isOpen ? "slideIn 0.3s ease-out forwards" : "none",
                                animationDelay: "0.1s",
                            }}
                        >
                            Activity
                        </a>
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    0% {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                button::before,
                a::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.1); /* Set the fill color */
                    width: 0%;
                    transition: width 0.5s ease-in-out;
                    z-index: 0;
                }

                button:hover::before,
                a:hover::before {
                    width: 100%;
                }

                button:hover,
                a:hover {
                    background-color: rgba(236, 199, 255, 0.2); /* Transparent purple fill */
                }
            `}</style>
        </div>
    );
};

export const BackButton = () => {
    return (
        <div className="fixed top-10 md:top-7 z-10 left-7">
            <a
                href="/"
                className="text-thisBlack font-karla text-lg md:text-base border-2 px-4 py-2 rounded-2xl relative overflow-hidden transition-all duration-200 bg-gradientcustom2 border-thisBlack hover:bg-gradientcustom hover:border-white"
            >
                Back to hallway
            </a>
        </div>
    );
};
