'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { contactLinks } from '@/data/personal';

export default function HomePage() {
  const [hoveredOption, setHoveredOption] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-5xl w-full">
          {/* Header with Mascot */}
          <div className="text-center mb-12">
            {/* Mascot Image */}
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-[8px_8px_0px_0px_rgba(236,72,153,0.4)]">
                <Image
                  src="/mascot.webp"
                  alt="Beam's Mascot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <h1
              className="text-6xl md:text-8xl font-black mb-4"
              style={{
                color: '#FF69B4',
                textShadow: '4px 4px 0px #FFB6C1, 6px 6px 0px #DDA0DD, 8px 8px 0px #87CEEB'
              }}
            >
              Welcome! ✨
            </h1>
            <p className="text-2xl md:text-3xl text-purple-700 font-bold">
              Choose your way to explore my portfolio 👀
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: January 2025
            </p>
          </div>

          {/* Options Container */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto pb-12">
            {/* Quick View Option - Window Style */}
            <Link href="/summary">
              <div
                onMouseEnter={() => setHoveredOption('quick')}
                onMouseLeave={() => setHoveredOption(null)}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                {/* Window Frame */}
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border-4 border-pink-300 shadow-[8px_8px_0px_0px_rgba(236,72,153,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(236,72,153,0.5)] transition-all duration-300 overflow-hidden h-full">
                  {/* Window Title Bar */}
                  <div className="bg-gradient-to-r from-pink-200 to-purple-200 border-b-4 border-pink-300 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400 border-2 border-green-500"></div>
                      </div>
                      <span className="font-bold text-pink-600 text-sm ml-2">QUICK_VIEW.exe</span>
                    </div>
                    <span className="text-pink-500 text-lg">⭐</span>
                  </div>

                  {/* Window Content */}
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                      ⭐ RECOMMENDED
                    </div>

                    {/* Preview Screenshot */}
                    <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden border-4 border-pink-200 shadow-lg">
                      <Image
                        src="/preview-mode/summary.webp"
                        alt="Quick View Preview"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <h2 className="text-3xl font-black mb-2" style={{
                      color: '#FF1493',
                      textShadow: '3px 3px 0px #FFB6C1'
                    }}>
                      Quick View
                    </h2>

                    <p className="text-base text-purple-700 font-semibold mb-4">
                      Simple scrolling portfolio
                    </p>

                    <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-full py-2 px-6 text-center border-3 border-pink-300">
                      <span className="text-pink-600 font-bold group-hover:text-purple-600 transition-colors">
                        Let&apos;s Go! →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Interactive 3D Option - Pixel RPG Style */}
            <Link href="/hallway">
              <div
                onMouseEnter={() => setHoveredOption('3d')}
                onMouseLeave={() => setHoveredOption(null)}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                {/* Pixel Art Frame */}
                <div
                  className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border-4 border-purple-300 shadow-[8px_8px_0px_0px_rgba(147,51,234,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(147,51,234,0.5)] transition-all duration-300 overflow-hidden h-full"
                  style={{
                    fontFamily: 'monospace'
                  }}
                >
                  {/* Pixel Title Bar */}
                  <div className="bg-gradient-to-r from-purple-200 to-blue-200 border-b-4 border-purple-300 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400 border-2 border-green-500"></div>
                      </div>
                      <span className="font-bold text-purple-600 text-sm ml-2">ADVENTURE_MODE.exe</span>
                    </div>
                    <span className="text-purple-500 text-lg">⚔️</span>
                  </div>

                  {/* RPG Content */}
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className="inline-block bg-gradient-to-r from-purple-400 to-blue-400 text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                      🎮 INTERACTIVE MODE
                    </div>

                    <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden border-4 border-purple-200 shadow-lg">
                      <Image
                        src="/preview-mode/hallway.webp"
                        alt="3D Explore Preview"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <h2 className="text-3xl font-black mb-2" style={{
                      color: '#9333EA',
                      textShadow: '3px 3px 0px #C084FC'
                    }}>
                      3D Explore
                    </h2>

                    <p className="text-base text-purple-700 font-semibold mb-4">
                      Interactive 3D experience
                    </p>

                    <div className="bg-gradient-to-r from-purple-200 to-blue-200 rounded-full py-2 px-6 text-center border-3 border-purple-300">
                      <span className="text-purple-600 font-bold group-hover:text-blue-600 transition-colors">
                        START QUEST! →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Contact Section */}
      <footer className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 border-t-4 border-white">
        <div className="max-w-5xl mx-auto px-4 py-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-3" style={{
            color: '#FFFFFF',
            textShadow: '3px 3px 0px rgba(236,72,153,0.5), 5px 5px 0px rgba(147,51,234,0.3)'
          }}>
            Let&apos;s Connect! 💌
          </h2>
          <p className="text-lg md:text-xl text-white font-bold mb-8 drop-shadow-lg">
            Feel free to reach out through any of these channels ✨
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {contactLinks.map((contact, index) => {
              const gradients = [
                'from-red-400 to-orange-400',
                'from-gray-700 to-gray-900',
                'from-blue-500 to-blue-700',
                'from-pink-500 to-purple-500'
              ];
              const hoverGradients = [
                'hover:from-red-500 hover:to-orange-500',
                'hover:from-gray-800 hover:to-black',
                'hover:from-blue-600 hover:to-blue-800',
                'hover:from-pink-600 hover:to-purple-600'
              ];

              return (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-r ${gradients[index]} ${hoverGradients[index]} text-white font-bold py-3 px-6 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-2xl border-4 border-white shadow-lg`}
                >
                  {contact.title}
                </a>
              );
            })}
          </div>

          <p className="text-white text-sm font-semibold drop-shadow">
            © 2025 Raksakul Hiranas (Beam). Made with 💖
          </p>
        </div>
      </footer>
    </div>
  );
}
