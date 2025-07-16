"use client";

import { MapPin, Code, Briefcase } from "lucide-react";
import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Hero() {
  const roles = ["Front-end", "Back-end", "Full Stack"];
  const [currentRoleIndex] = useState(0); // Static role, no animation

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Background Elements */}
      <div
        className="absolute top-32 right-8 sm:top-40 sm:right-32 w-1 h-1 bg-blue-500/30 dark:bg-blue-600/40 rounded-full hidden sm:block"
      />
      <div
        className="absolute bottom-24 left-8 sm:bottom-32 sm:left-40 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500/20 dark:bg-blue-600/30 rounded-full hidden sm:block"
      />

      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div
            className="order-2 lg:order-1 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green-500/10 border border-green-500/20 dark:border-green-600/20 backdrop-blur-sm"
            >
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 dark:text-green-400" />
              <span className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-300">
                Available for opportunities
              </span>
            </div>

            {/* Main Heading */}
            <div
              className="space-y-3 sm:space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-gray-900 dark:text-white">
                  Hi, I am
                </span>
                <span className="block bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent">
                  Tityapong
                </span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-sm sm:text-base">
                  Phnom Penh, Cambodia
                </span>
              </div>
            </div>

            {/* Role & Description */}
            <div
              className="space-y-4 sm:space-y-6"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Code className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 dark:text-blue-400" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 h-8 flex items-center">
                  <span>
                    {roles[currentRoleIndex]} Web Developer
                  </span>
                </h2>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Passionate IT Engineering student at Royal University of Phnom
                Penh, specializing in modern web development. I craft digital
                experiences using cutting-edge technologies like React, Next.js,
                and Node.js. Always eager to learn and build innovative
                solutions.
              </p>
            </div>
          </div>

          <div
            className="order-1 lg:order-2 flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="rounded-lg overflow-hidden w-full h-full mt-6 md:mt-0">
                <DotLottieReact
                  src="/Isometric data analysis.lottie"
                  loop
                  autoplay
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}