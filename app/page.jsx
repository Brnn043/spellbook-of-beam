'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function HomePage() {
  const [hoveredOption, setHoveredOption] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-4">
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
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                    ⭐ RECOMMENDED
                  </div>

                  <div className="text-7xl mb-4 group-hover:animate-bounce">📱</div>

                  <h2 className="text-4xl font-black mb-3" style={{
                    color: '#FF1493',
                    textShadow: '3px 3px 0px #FFB6C1'
                  }}>
                    Quick View
                  </h2>

                  <p className="text-lg text-purple-700 font-semibold mb-6">
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
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="inline-block bg-gradient-to-r from-purple-400 to-blue-400 text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                    🎮 INTERACTIVE MODE
                  </div>

                  <div className="text-7xl mb-4 group-hover:animate-bounce">🗺️</div>

                  <h2 className="text-4xl font-black mb-3" style={{
                    color: '#9333EA',
                    textShadow: '3px 3px 0px #C084FC'
                  }}>
                    3D Explore
                  </h2>

                  <p className="text-lg text-purple-700 font-semibold mb-6">
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
  );
}
