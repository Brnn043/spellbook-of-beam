'use client';

import Link from 'next/link';

export default function Visit({ name, setOpen }) {
    const handleClick = () => {
        setOpen(false);
    };

    return (
        <div className="fixed w-full h-full flex justify-center items-center z-30 bg-black bg-opacity-50">
            <div className="bg-gradientcustom shadow-lg flex flex-col justify-center items-center p-8 border-2 border-thisBlack rounded-xl space-y-6">
                <p className="text-lg font-karla text-thisBlack">
                    Want to visit <span className="font-bold">{name}</span>?
                </p>
                <div className="flex space-x-6">
                    <Link
                        href={`/${name}`}
                    >
                        <button
                            className="relative overflow-hidden bg-white text-thisBlack font-karla border-2 border-thisBlack rounded-lg px-6 py-2 transition-transform duration-200 hover:scale-105 hover:bg-gradient-to-br hover:from-[#ffe0d8] hover:to-[#d8faff]"
                            onClick={handleClick}
                        >
                            <span className="absolute inset-0 w-full h-full transition-opacity duration-300"></span>
                            Yes
                        </button>
                    </Link>
                    <button
                        className="relative overflow-hidden bg-white text-thisBlack font-karla border-2 border-thisBlack rounded-lg px-6 py-2 transition-transform duration-200 hover:scale-105 hover:bg-gradient-to-br hover:from-[#ffe0d8] hover:to-[#d8faff]"
                        onClick={handleClick}
                    >
                        <span className="absolute inset-0 w-full h-full transition-opacity duration-300"></span>
                        Not yet
                    </button>
                </div>
            </div>
        </div>
    );
}
