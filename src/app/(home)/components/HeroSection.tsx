"use client"


import { motion, AnimatePresence } from "framer-motion"
import {  MapPin, Code, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const roles = ["Front-end", "Back-end", "Full Stack"]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 3000) // Change role every 3 seconds
    return () => clearInterval(interval)
  }, [roles.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const roleVariants = {
    enter: { opacity: 0, y: -20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Background Elements */}
      {/* Floating Particles - Hidden on mobile for performance */}
      <motion.div
        className="absolute top-16 left-4 sm:top-20 sm:left-20 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500/20 dark:bg-blue-600/30 rounded-full hidden sm:block"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-32 right-8 sm:top-40 sm:right-32 w-1 h-1 bg-blue-500/30 dark:bg-blue-600/40 rounded-full hidden sm:block"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute bottom-24 left-8 sm:bottom-32 sm:left-40 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500/20 dark:bg-blue-600/30 rounded-full hidden sm:block"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:gap-16 items-center justify-center">
          {/* Text Content */}
          <motion.div className="order-2 lg:order-1 space-y-6 sm:space-y-8 text-center" variants={containerVariants}>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 dark:border-blue-600/20 backdrop-blur-sm"
              variants={itemVariants}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 dark:text-blue-400" />
              <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-300 hidden sm:block">
                Available for opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-gray-900 dark:text-white">Hi, I am</span>
                <span className="block bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent">
                  Tityapong
                </span>
              </h1>
              <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-sm sm:text-base">Phnom Penh, Cambodia</span>
              </div>
            </motion.div>

            {/* Role & Description */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-center gap-2">
                <Code className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 dark:text-blue-400" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 h-8 flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentRoleIndex}
                      variants={roleVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        y: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                    >
                      {roles[currentRoleIndex]} Web Developer
                    </motion.span>
                  </AnimatePresence>
                </h2>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Passionate IT Engineering student at Royal University of Phnom Penh, specializing in modern web
                development. I craft digital experiences using cutting-edge technologies like React, Next.js, and
                Node.js. Always eager to learn and build innovative solutions.
              </p>
            </motion.div>

          
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
