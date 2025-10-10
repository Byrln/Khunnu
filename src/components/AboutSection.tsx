"use client";

import React from "react";
import Image from "next/image";

interface AboutSectionProps {
  isFullPage?: boolean;
}

export function AboutSection({ isFullPage = false }: AboutSectionProps) {
  const containerClass = isFullPage ? "min-h-screen pt-24 pb-16" : "py-16 lg:py-24";

  return (
    <section 
      id="about" 
      className={`${containerClass} bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900"></div>
      </div>

      <div className="animate-on-scroll py-6 md:py-2 lg:py-3 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Khunnu Palace Hotel
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-slate-700/50">
              <h3 className="text-xl lg:text-2xl font-semibold text-amber-400 mb-4">
                Our Heritage & Excellence
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                Established in 2012, <strong className="text-white">Khunnu Palace Hotel</strong> represents 
                the evolution of hospitality excellence, built upon the prestigious foundation of the 
                long-established Khunnu Hotel under the renowned Khunnu Group. For over a decade, we have 
                been dedicated to providing exceptional services at competitive rates, setting new standards 
                in modern comfort and traditional Mongolian hospitality.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-slate-700/50">
              <h3 className="text-xl lg:text-2xl font-semibold text-amber-400 mb-4">
                Three-Star Luxury & Convenience
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm lg:text-base mb-4">
                As a distinguished three-star hotel, we offer an exquisite range of accommodations including 
                <strong className="text-white"> Standard, Semi-Deluxe, and Deluxe Rooms</strong>, each 
                meticulously designed to provide the perfect blend of comfort, style, and modern amenities.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-700/30 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-amber-400 font-medium text-sm">Airport Access</span>
                  </div>
                  <p className="text-gray-300 text-xs lg:text-sm">
                    30 minutes from Chinggis Khaan International Airport
                  </p>
                </div>
                
                <div className="bg-slate-700/30 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-amber-400 font-medium text-sm">Train Station</span>
                  </div>
                  <p className="text-gray-300 text-xs lg:text-sm">
                    10 minutes from Central Train Station
                  </p>
                </div>
                
                <div className="bg-slate-700/30 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-amber-400 font-medium text-sm">City Center</span>
                  </div>
                  <p className="text-gray-300 text-xs lg:text-sm">
                    20-minute walk to Sukhbaatar Square
                  </p>
                </div>
                
                <div className="bg-slate-700/30 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-amber-400 font-medium text-sm">Attractions</span>
                  </div>
                  <p className="text-gray-300 text-xs lg:text-sm">
                    Walking distance to museums & galleries
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-slate-700/50">
              <h3 className="text-xl lg:text-2xl font-semibold text-amber-400 mb-4">
                Multilingual Excellence
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm lg:text-base mb-4">
                Our dedicated team consists of highly experienced and professionally trained staff members 
                who are fluent in multiple international languages including 
                <strong className="text-white"> English, Japanese, Chinese, and Russian</strong>. 
                This linguistic diversity ensures that every guest feels welcomed and understood, 
                creating a truly international hospitality experience.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {["English", "Japanese", "Chinese", "Russian", "Mongolian"].map((language) => (
                  <span 
                    key={language}
                    className="px-3 py-1 bg-amber-400/10 text-amber-400 rounded-full text-xs font-medium border border-amber-400/20"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-400/10 to-amber-600/10 rounded-2xl p-6 lg:p-8 border border-amber-400/20">
              <h3 className="text-xl lg:text-2xl font-semibold text-amber-400 mb-3">
                Feel at Home Away from Home
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                At Khunnu Palace Hotel, we believe that exceptional hospitality goes beyond comfortable 
                accommodations. Our friendly, professional staff is committed to making your stay 
                memorable, ensuring you feel at home while experiencing the best of Mongolian culture 
                and modern comfort.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Lobby/0-02-05-935f43fccd18129cbd315300c1f69d69973dad544eafbff962623c82658149eb_9fe8d1c0feffcbac.jpg"
                  alt="Khunnu Palace Hotel Lobby"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold text-lg">Elegant Lobby</h4>
                  <p className="text-sm text-gray-200">Modern comfort meets traditional design</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-32 lg:h-40 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/Deluxe king/0-02-08-630b920112191806aa14f6791161f4e2040511d70637622ed2a7d596f7ebf0a0_216a9a4e22c6dbc9.jpg"
                  alt="Deluxe Room"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-xs font-medium">Deluxe Rooms</p>
                </div>
              </div>
              
              <div className="relative h-32 lg:h-40 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/Restraunt, Meeting/0-02-08-8cc57440b41674862e9e192278b8ee1fcca729c8299880118bd5207afa86ab33_38f4dd188c96becc.jpg"
                  alt="Restaurant"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-xs font-medium">Restaurant</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center bg-slate-800/30 rounded-xl p-4">
                <div className="text-2xl lg:text-3xl font-bold text-amber-400">12+</div>
                <div className="text-xs lg:text-sm text-gray-400">Years of Excellence</div>
              </div>
              <div className="text-center bg-slate-800/30 rounded-xl p-4">
                <div className="text-2xl lg:text-3xl font-bold text-amber-400">5</div>
                <div className="text-xs lg:text-sm text-gray-400">Languages Spoken</div>
              </div>
              <div className="text-center bg-slate-800/30 rounded-xl p-4">
                <div className="text-2xl lg:text-3xl font-bold text-amber-400">★★★</div>
                <div className="text-xs lg:text-sm text-gray-400">Star Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}