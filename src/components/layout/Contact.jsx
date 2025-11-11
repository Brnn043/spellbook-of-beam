import { useState } from "react";

const ContactModal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
            <div className="bg-gradientcustom2 border-2 border-thisBlack p-6 rounded-2xl text-center space-y-4">
                <h2 className="font-payToneOne text-thisBlack text-2xl">Contact</h2>
                <div className="font-karla text-left">
                    <p>Email: raksakul.hiranas@gmail.com</p>
                    <p>
                        GitHub:{" "}
                        <a
                            href="https://github.com/Brnn043"
                            className="text-pink-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Brnn043
                        </a>
                    </p>
                    <p>
                        LinkedIn:{" "}
                        <a
                            href="https://linkedin.com/in/raksakul-hiranas"
                            className="text-pink-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Raksakul Hiranas
                        </a>
                    </p>
                    <p>
                        Instagram:{" "}
                        <a
                            href="https://instagram.com/brnnbm"
                            className="text-pink-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            brnnbm
                        </a>
                    </p>
                </div>
                <button
                    onClick={closeModal}
                    className="mt-4 py-1 px-4 rounded-full bg-gradientcustom border-2 border-white font-karla transition-transform duration-200 hover:scale-105"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export const ContactButton = () => {
    const [isPressedVisit, setIsPressedVisit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);

    return (
        <div className="fixed top-4 right-32 z-10 flex flex-col justify-center items-center">
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
                        } animate-slideIn`}
                >
                    Contact
                </button>
            </div>

            <ContactModal isOpen={isOpen} closeModal={closeModal} />

            <style jsx>{`

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