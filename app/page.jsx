'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { contactLinks } from '@/data/personal';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5e6d3] p-4 md:p-8 xl:flex xl:items-center xl:justify-center xl:py-8">
      {/* Main Container - Cafe Style Card */}
      <div className="max-w-4xl mx-auto xl:max-w-6xl xl:w-full">
        {/* Outer Frame with Rounded Corners */}
        <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-3xl p-1 shadow-2xl">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl overflow-hidden border-4 border-pink-300">

            {/* Decorative Top Border with Scalloped Edge */}
            <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 h-8 relative">
              <div className="absolute -bottom-4 left-0 right-0 flex justify-around">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-16 h-8 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 rounded-t-full"></div>
                ))}
              </div>
            </div>

            {/* Header Section */}
            <div className="pt-6 pb-3 px-6 text-center relative xl:pt-5 xl:pb-3">
              {/* Welcome Badge */}
              <div className="inline-block bg-gradient-to-r from-pink-300 to-purple-300 rounded-full px-8 py-4 border-4 border-white shadow-lg mb-4 xl:px-7 xl:py-3 xl:mb-3">
                <h1 className="text-3xl md:text-4xl font-black text-white xl:text-3xl" style={{
                  textShadow: '2px 2px 0px rgba(147,51,234,0.5)'
                }}>
                  Welcome! ✨
                </h1>
              </div>
            </div>

            {/* Main Content Section */}
            <div className="px-6 pb-6 xl:px-4 xl:pb-4">
              {/* Hero Section with Mascot */}
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl border-4 border-pink-300 p-6 mb-6 shadow-lg xl:p-4 xl:mb-4">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Profile Image */}
                  <div className="relative w-32 h-32 flex-shrink-0 xl:w-24 xl:h-24">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full animate-pulse"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-6 border-white shadow-xl xl:border-4">
                      <Image
                        src="/mascot.webp"
                        alt="Beam's Mascot"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-black mb-2 xl:text-3xl" style={{
                      color: '#FF1493',
                      textShadow: '2px 2px 0px #FFB6C1'
                    }}>
                      Raksakul Hiranas (Beam)
                    </h2>
                    <p className="text-purple-700 font-semibold mb-3 xl:text-base">
                      Have a look around! DM @user for any questions.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start xl:gap-2">
                      <div className="bg-white rounded-full px-4 py-2 border-2 border-pink-200 shadow xl:px-3 xl:py-1">
                        <span className="text-sm font-bold text-pink-600 xl:text-xs">status: UNDER CONSTRUCTION 🔧</span>
                      </div>
                      <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-full px-4 py-2 border-2 border-purple-300 shadow xl:px-3 xl:py-1">
                        <span className="text-sm font-bold text-purple-700 xl:text-xs">last updated: January 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Checkerboard Banner */}
              <div className="relative mb-6 rounded-2xl overflow-hidden border-4 border-pink-300 shadow-lg" style={{
                backgroundImage: `
                  repeating-conic-gradient(
                    #FFE4E1 0% 25%,
                    #E6E6FA 0% 50%
                  )`,
                backgroundSize: '40px 40px',
                backgroundPosition: '0 0, 20px 20px'
              }}>
                <div className="relative bg-white/80 backdrop-blur-sm py-4 px-6">
                  <p className="text-center text-lg md:text-xl font-black" style={{
                    color: '#9333EA',
                    textShadow: '2px 2px 0px rgba(255,255,255,0.8)'
                  }}>
                    Choose your viewing mode below 👇
                  </p>
                </div>
              </div>

              {/* Mode Selection - Two Columns */}
              <div className="grid md:grid-cols-2 gap-6 xl:gap-4">
                {/* Quick View Card */}
                <Link href="/summary">
                  <div className="bg-white rounded-2xl border-4 border-pink-300 p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group xl:p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-gradient-to-br from-pink-400 to-purple-400 rounded-full w-10 h-10 flex items-center justify-center text-2xl border-2 border-white shadow-md flex-shrink-0">
                        ⭐
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-black mb-1 xl:text-lg" style={{
                          color: '#FF1493',
                          textShadow: '1px 1px 0px #FFB6C1'
                        }}>
                          Quick View <span className="text-sm font-normal">RECOMMENDED</span>
                        </h3>
                        <p className="text-sm text-purple-600 font-semibold">
                          📱 Simple scrolling portfolio. Perfect for quick browsing!
                        </p>
                      </div>
                    </div>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border-3 border-pink-200 shadow-md mb-3">
                      <Image
                        src="/preview-mode/summary.webp"
                        alt="Quick View Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-full py-3 px-6 text-center border-3 border-pink-300 shadow-md group-hover:shadow-lg transition-all">
                      <span className="text-pink-600 font-bold group-hover:text-purple-600 transition-colors text-base xl:text-base">
                        Let&apos;s Go! →
                      </span>
                    </div>
                  </div>
                </Link>

                {/* 3D Explore Card */}
                <Link href="/hallway">
                  <div className="bg-white rounded-2xl border-4 border-purple-300 p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group xl:p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-gradient-to-br from-purple-400 to-blue-400 rounded-full w-10 h-10 flex items-center justify-center text-2xl border-2 border-white shadow-md flex-shrink-0">
                        🎮
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-black mb-1 xl:text-lg" style={{
                          color: '#9333EA',
                          textShadow: '1px 1px 0px #C084FC'
                        }}>
                          3D Explore <span className="text-sm font-normal">INTERACTIVE</span>
                        </h3>
                        <p className="text-sm text-purple-600 font-semibold">
                          🗺️ Interactive 3D experience. Explore at your own pace!
                        </p>
                      </div>
                    </div>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden border-3 border-purple-200 shadow-md mb-3">
                      <Image
                        src="/preview-mode/hallway.webp"
                        alt="3D Explore Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-gradient-to-r from-purple-200 to-blue-200 rounded-full py-3 px-6 text-center border-3 border-purple-300 shadow-md group-hover:shadow-lg transition-all">
                      <span className="text-purple-600 font-bold group-hover:text-blue-600 transition-colors text-base xl:text-base">
                        START QUEST! →
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Contact Section */}
              <div className="mt-6 xl:mt-4">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border-4 border-purple-300 p-6 shadow-lg xl:p-4">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-black text-purple-600 xl:text-xl" style={{
                      textShadow: '2px 2px 0px rgba(147,51,234,0.2)'
                    }}>Contact Me 💬</h3>
                    <p className="text-sm text-purple-700 font-semibold mt-1">Let&apos;s connect and collaborate!</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 xl:gap-2">
                    {contactLinks.map((contact, index) => {
                      const colors = [
                        'from-red-200 to-orange-200',
                        'from-gray-300 to-gray-400',
                        'from-blue-200 to-blue-300',
                        'from-pink-200 to-purple-200'
                      ];
                      const textColors = [
                        'text-red-700',
                        'text-gray-700',
                        'text-blue-700',
                        'text-pink-700'
                      ];
                      const icons = ['📧', '🐙', '💼', '📷'];

                      return (
                        <a
                          key={index}
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-r ${colors[index]} ${textColors[index]} font-bold py-4 px-3 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-3 border-white xl:py-3`}
                        >
                          <span className="text-3xl xl:text-2xl">{icons[index]}</span>
                          <span className="text-xs text-center">{contact.title}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 px-6 py-4 text-center border-t-4 border-pink-300 xl:py-2 xl:border-t-3">
              <p className="text-white font-bold text-sm drop-shadow-lg xl:text-xs">
                card by Raksakul Hiranas • Made with 💖
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
