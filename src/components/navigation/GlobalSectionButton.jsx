import { useState } from "react";
export const SectionButton = ({ buttons }) => {
    const [activeButton, setActiveButton] = useState(null);
    const [isPressed, setIsPressed] = useState(new Array(buttons.length).fill(false));

    const handleButtonClick = (index) => {
        buttons[index].setOpen((prev) => !prev);
        setActiveButton(index === activeButton ? null : index);
    };

    const handleButtonPress = (index, isPressedValue) => {
        const newIsPressed = [...isPressed];
        newIsPressed[index] = isPressedValue;
        setIsPressed(newIsPressed);
    };

    return (
        <div className="fixed bottom-4 right-4 z-10 flex flex-col justify-center items-center">
            <div className="w-24 space-y-4">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        onMouseDown={() => handleButtonPress(index, true)}
                        onMouseUp={() => handleButtonPress(index, false)}
                        onTouchStart={() => handleButtonPress(index, true)}
                        onTouchEnd={() => handleButtonPress(index, false)}
                        onClick={() => handleButtonClick(index)}
                        className={`font-karla w-24 py-2 border-2 rounded-full shadow-lg relative overflow-hidden focus:outline-none transition-all duration-200 ${isPressed[index]
                            ? "bg-gradientcustom"
                            : buttons[index].isOpen
                                ? "bg-gradientcustom border-white"
                                : "bg-gradientcustom2 border-thisBlack"
                            }`}
                    >
                        {button.name}
                    </button>
                ))}
            </div>
            <style jsx>{`
                button::before {
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

                button:hover::before {
                    width: 100%;
                }

                button:hover {
                    background-color: rgba(236, 199, 255, 0.2); /* Transparent purple fill */
                }
            `}</style>
        </div>
    );
};
