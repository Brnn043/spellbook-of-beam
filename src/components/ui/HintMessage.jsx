import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

export default function HintMessage({ sentences }) {
    const [sentenceIndex, setSentenceIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        }, 10000);

        return () => clearTimeout(timer);
    }, [sentenceIndex]);

    return (
        <div className="fixed top-28 md:top-7 left-1/2 transform -translate-x-1/2 z-10">
            <div className="text-lg text-white px-4 py-2 rounded-lg font-karla bg-thisBlack bg-opacity-75">
                <Typewriter
                    key={sentenceIndex}
                    options={{
                        strings: [sentences[sentenceIndex]],
                        autoStart: true,
                        loop: false,
                        delay: 20,
                        deleteSpeed: 20,
                        cursor: '',
                    }}
                />
            </div>
        </div>
    );
}
