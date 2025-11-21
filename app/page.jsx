'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [hoveredOption, setHoveredOption] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-6xl md:text-8xl font-black mb-4 animate-bounce"
            style={{
              color: '#FF69B4',
              textShadow: '4px 4px 0px #FFB6C1, 6px 6px 0px #DDA0DD, 8px 8px 0px #87CEEB'
            }}
          >
            Welcome! ✨
          </h1>
          <p className="text-2xl md:text-3xl text-purple-700 font-bold">
            Choose your adventure 🎮
          </p>
        </div>

        {/* Options Container */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Quick View Option - Primary */}
          <Link href="/summary">
            <div
              onMouseEnter={() => setHoveredOption('quick')}
              onMouseLeave={() => setHoveredOption(null)}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl p-8 border-8 border-pink-300 shadow-[12px_12px_0px_0px_rgba(236,72,153,0.5)] hover:shadow-[16px_16px_0px_0px_rgba(236,72,153,0.7)] transition-all duration-300">
                {/* Primary Badge */}
                <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                  ⭐ RECOMMENDED
                </div>

                <div className="text-6xl mb-4 group-hover:animate-bounce">📱</div>

                <h2 className="text-4xl font-black mb-4" style={{
                  color: '#FF1493',
                  textShadow: '3px 3px 0px #FFB6C1'
                }}>
                  Quick View
                </h2>

                <p className="text-lg text-purple-700 font-semibold mb-4">
                  รวดเร็ว ใช้งานง่าย
                </p>

                <ul className="text-left space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500 text-xl">✓</span>
                    <span>ดูข้อมูลแบบรวดเร็ว</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500 text-xl">✓</span>
                    <span>Scroll ง่าย ๆ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-500 text-xl">✓</span>
                    <span>เหมาะกับมือถือ</span>
                  </li>
                </ul>

                <div className="mt-6 bg-white/80 rounded-full py-3 px-6 text-center">
                  <span className="text-pink-600 font-bold text-lg group-hover:text-purple-600 transition-colors">
                    เริ่มเลย! →
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Interactive 3D Option - Secondary */}
          <Link href="/hallway">
            <div
              onMouseEnter={() => setHoveredOption('3d')}
              onMouseLeave={() => setHoveredOption(null)}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gradient-to-br from-blue-200 to-cyan-200 rounded-3xl p-8 border-8 border-blue-300 shadow-[12px_12px_0px_0px_rgba(59,130,246,0.5)] hover:shadow-[16px_16px_0px_0px_rgba(59,130,246,0.7)] transition-all duration-300">
                {/* Secondary Badge */}
                <div className="inline-block bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                  🎮 INTERACTIVE
                </div>

                <div className="text-6xl mb-4 group-hover:animate-spin">🎨</div>

                <h2 className="text-4xl font-black mb-4" style={{
                  color: '#4169E1',
                  textShadow: '3px 3px 0px #87CEEB'
                }}>
                  3D Explore
                </h2>

                <p className="text-lg text-blue-700 font-semibold mb-4">
                  สนุก มีปฏิสัมพันธ์
                </p>

                <ul className="text-left space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500 text-xl">✓</span>
                    <span>สำรวจโลก 3D</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500 text-xl">✓</span>
                    <span>เดินไปรอบๆ ได้</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500 text-xl">✓</span>
                    <span>ประสบการณ์แบบเกม</span>
                  </li>
                </ul>

                <div className="mt-6 bg-white/80 rounded-full py-3 px-6 text-center">
                  <span className="text-blue-600 font-bold text-lg group-hover:text-cyan-600 transition-colors">
                    สำรวจเลย! →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            💡 คุณสามารถเปลี่ยนโหมดได้ตลอดเวลา
          </p>
        </div>
      </div>
    </div>
  );
}
