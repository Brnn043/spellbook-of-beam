import { useState } from "react";

export default function WelcomeModal({ setShowWelcome }) {
    const [sentenceIndex, setSentenceIndex] = useState(0);

    const sentences = [
        "Welcome to my spellbook, or as humans call it, my portfolio.",
        "I am Beam (Raksakul Hiranas), the proud owner of this mansion.",
        "Currently, I'm studying in the 3rd year of Computer Engineering at Chulalongkorn University.",
        "As a passionate creative and inspirational witch, I love conjuring up imaginative creations, just like this very spellbook. 😊",
        'If you\'d like to know more about me, feel free to explore the rooms in my mansion, including "Profile", "Projects", and "Activity".',
        'You can navigate through my magical space by "clicking the buttons" on the screen, or by pressing "A" or "D", or using the "left" and "right" arrow keys.'
    ];

    const character = {
        name: "Beam",
        image: "/mascot.webp"
    };

    const nextSentence = () => {
        if (sentenceIndex < sentences.length - 1) {
            setSentenceIndex((prevIndex) => prevIndex + 1);
        } else {
            setShowWelcome(false);
        }
    };

    // Function to bold text inside double quotes and remove the quotes
    const boldTextInQuotes = (text) => {
        return text.replace(/"([^"]+)"/g, "<strong>$1</strong>");
    };

    return (
        <div className="fixed w-full h-full flex justify-center items-center z-30 bg-black bg-opacity-50">
            <div className="bg-gradientcustom border-2 border-white rounded-xl px-1 py-6 w-3/4 max-w-xl flex flex-col space-y-2 md:flex-row md:space-x-4 relative">
                <button
                    onClick={() => setShowWelcome(false)}
                    className="absolute top-2 right-2 font-karla bg-thisBlack text-white rounded-full h-8 w-8 flex justify-center items-center hover:bg-white hover:text-thisBlack transition"
                >
                    X
                </button>
                <div className="flex flex-col items-center justify-center space-y-2">
                    <img
                        src={character.image}
                        alt={character.name}
                        className="max-w-[100px] font-karla border-2 border-white rounded-md"
                    />
                    <div>
                        <h2 className="text-sm font-semibold font-karla">{character.name}</h2>
                    </div>
                </div>

                <div
                    className="text-lg break-words md:w-8/12 font-karla px-4 md:px-1"
                    dangerouslySetInnerHTML={{ __html: boldTextInQuotes(sentences[sentenceIndex]) }}
                ></div>

                <div className="flex justify-center items-center pt-4 md:absolute md:bottom-4 md:right-4">
                    <button
                        onClick={nextSentence}
                        className={`${sentenceIndex === sentences.length - 1
                            ? "bg-white hover:scale-105 hover:bg-gradient-to-br hover:from-[#ffe0d8] hover:to-[#d8faff] text-thisBlack border-thisBlack"
                            : "bg-thisBlack hover:bg-[#5f4655] text-white border-white"
                            } border-2 px-4 py-1 rounded-lg text-base font-karla`}
                    >
                        {sentenceIndex === sentences.length - 1 ? "Explore" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}
