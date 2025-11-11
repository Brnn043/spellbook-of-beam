import { useState, useEffect } from "react";

// this modal has multiple pages and images, also in the description will have description,tag,link
export const ProjectModal = ({ title, setOpen, data }) => {
    const [currentPage, setCurrentPage] = useState(0)
    const [currentImage, setCurrentImage] = useState(0);
    const [fullImageSrc, setFullImageSrc] = useState(null);

    // Image auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            if (!data[currentPage].images) return;
            setCurrentImage((prev) =>
                (prev + 1) % data[currentPage].images.length
            );
        }, 10000); // Auto-slide every 10 seconds
        return () => clearInterval(interval);
    }, [currentPage]);

    const handleNextGame = () => {
        setCurrentPage((prev) => (prev + 1) % data.length);
        setCurrentImage(0); // Reset the slider when switching games
    };

    const handlePrevGame = () => {
        setCurrentPage((prev) =>
            prev === 0 ? data.length - 1 : prev - 1
        );
        setCurrentImage(0);
    };

    return (
        <div className="fixed w-full h-full flex justify-center items-center z-30 bg-black bg-opacity-50">
            <div className="bg-white border-2 border-thisBlack rounded-xl overflow-hidden w-3/4 max-w-xl flex flex-col md:flex-col relative">
                {/* Header */}
                <div className="bg-gradientcustom text-thisBlack border-b-2 border-thisBlack h-16 text-center flex justify-center items-center font-payToneOne text-2xl relative">
                    {title}
                    {/* Close Button */}
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-2 right-2 font-karla bg-thisBlack text-white rounded-full h-8 w-8 flex justify-center items-center hover:bg-white hover:text-thisBlack transition"
                    >
                        X
                    </button>
                </div>

                {/* Game Content */}
                <div className="p-4">
                    {/* Navigation Buttons */}
                    <div className={`flex ${data.length > 1 ? 'justify-between' : 'justify-center'} items-center mb-4 font-karla text-thisBlack text-xl`}>
                        {data.length > 1 && <button
                            onClick={handlePrevGame}
                            className="px-4 py-2 bg-[#f3bfe1] hover:bg-[#ef9ad2] text-white rounded-full"
                        >
                            &lt;
                        </button>}
                        <h3 className="font-karla text-lg text-center">{data[currentPage].title}</h3>
                        {data.length > 1 && <button
                            onClick={handleNextGame}
                            className="px-4 py-2 bg-lightPink hover:bg-[#ef9ad2] text-white rounded-full"
                        >
                            &gt;
                        </button>}
                    </div>

                    {/* Image Slider */}
                    <div className="flex flex-col md:flex-row justify-center items-center space-x-3">
                        {data[currentPage].images && <div className="relative mb-4 flex justify-center items-center max-h-44 md:max-h-80 md:h-auto md:min-h-60 overflow-y-auto md:overflow-hidden bg-slate-200 rounded-xl overflow-hidden">
                            <img
                                src={data[currentPage].images[currentImage]}
                                alt="Game Image"
                                className="w-60 h-auto object-cover rounded"
                                onClick={() => setFullImageSrc(data[currentPage].images[currentImage])}
                            />
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {data[currentPage].images.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`h-3 w-3 rounded-full ${currentImage === index
                                            ? 'bg-[#fc8bd6]'
                                            : 'bg-white'
                                            }`}
                                        onClick={() => setCurrentImage(index)}
                                    ></button>
                                ))}
                            </div>
                        </div>}

                        {/* Game Description */}
                        <div className="scrollable text-thisBlack rounded text-base font-karla flex-1 overflow-y-scroll max-h-48 md:max-h-96 md:h-auto">
                            {/* <p>{data[currentPage].description}</p> */}

                            <div>
                                {Array.isArray(data[currentPage].description) ? (
                                    data[currentPage].description.map((desc, index) => (
                                        <li key={index} className="list-inside my-2" style={{ listStyleType: 'none' }}>
                                            <span className="text-thisBlack mr-2">★</span> {desc}
                                        </li>
                                    ))
                                ) : (
                                    <p>{data[currentPage].description}</p>
                                )}
                            </div>

                            {/* Tags Section */}
                            <div className="my-3 flex flex-wrap gap-2">
                                {data[currentPage].tags.map((tag, index) => (
                                    <span key={index} className="text-sm text-gray-600 mr-2 bg-[#ffeaf8] p-0.5 rounded-sm">#{tag}</span>
                                ))}
                            </div>

                            {/* View More Section */}
                            {data[currentPage].viewMore && (
                                <div className="flex flex-col">
                                    {data[currentPage].viewMore.map((linkData, index) => (
                                        <div key={index} className="my-2 flex flex-row space-x-1">
                                            <p>{linkData.title} :</p>
                                            <a
                                                href={linkData.link}
                                                className="text-[#c455e8] hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {linkData.linkTitle}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Image Modal */}
            {fullImageSrc && (
                <div className="fixed w-full h-full flex justify-center items-center z-40 bg-black bg-opacity-75">
                    <div className="relative">
                        <img src={fullImageSrc} alt="image" className="max-w-96 max-h-96 rounded-lg" />
                        <button
                            onClick={() => setFullImageSrc(null)} // Close modal
                            className="absolute top-4 right-4 font-karla bg-white text-thisBlack rounded-full h-8 w-8 flex justify-center items-center hover:bg-thisBlack hover:text-white transition"
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

// this modal show text in a list 
export const InfoModal = ({ title, setOpen, data }) => {
    return (
        <div className="fixed w-full h-full flex justify-center items-center z-30 bg-black bg-opacity-50">
            <div className="bg-white border-2 border-thisBlack rounded-xl overflow-hidden w-3/4 max-w-xl flex flex-col md:flex-col md:space-x-4 relative">
                {/* Header */}
                <div className="bg-gradientcustom text-thisBlack border-b-2 border-thisBlack h-16 text-center flex justify-center items-center font-payToneOne text-2xl relative">
                    {title}
                    {/* Close Button */}
                    <button
                        onClick={() => setOpen(false)} // Closes modal
                        className="absolute top-2 right-2 font-karla bg-thisBlack text-white rounded-full h-8 w-8 flex justify-center items-center hover:bg-white hover:text-thisBlack transition"
                    >
                        X
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-4">
                    <div className="font-karla text-thisBlack text-lg">
                        <div className="p-4 rounded-lg text-thisBlack">
                            <ul>
                                {data.map((item, index) => (
                                    <li key={index} className="list-inside" style={{ listStyleType: 'none' }}>
                                        <span className="text-thisBlack mr-2">★</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
