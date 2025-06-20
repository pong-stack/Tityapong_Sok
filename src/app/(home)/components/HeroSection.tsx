"use client"
import Image from "next/image"
import Link from "next/link"
import { aboutMe } from "@/assets"
import { MovingBorderBtn } from "@/components/ui/moving-border"
import { motion } from "framer-motion"
import { ArrowRight, Download, Mail, MapPin, Code, Sparkles } from "lucide-react"

export default function Hero() {
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Floating Particles */}
      <motion.div
        className="absolute top-20 left-20 w-2 h-2 bg-blue-500/30 rounded-full"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-40 right-32 w-1 h-1 bg-purple-500/40 rounded-full"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-cyan-500/30 rounded-full"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div className="space-y-8 text-center lg:text-left" variants={containerVariants}>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm"
              variants={itemVariants}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Available for opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="block text-white">Hi, I am</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Tityapong
                </span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Phnom Penh, Cambodia</span>
              </div>
            </motion.div>

            {/* Role & Description */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Code className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-200">Full Stack Developer</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                Passionate IT Engineering student at Royal University of Phnom Penh, specializing in modern web
                development. I craft digital experiences using cutting-edge technologies like React, Next.js, and
                Node.js. Always eager to learn and build innovative solutions.
              </p>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div variants={itemVariants} className="space-y-3">
              <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Tech Stack</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {["React", "Next.js", "Node.js", "TypeScript", "MySQL"].map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 text-sm font-medium bg-gray-800/50 text-blue-300 rounded-full border border-gray-700/50 backdrop-blur-sm"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="mailto:tityapong77@gmail.com" className="group">
                <motion.button
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <motion.button
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gray-800/50 text-gray-200 font-semibold rounded-xl border border-gray-700/50 hover:bg-gray-700/50 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div className="relative flex justify-center lg:justify-end" variants={itemVariants}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl scale-110" />

              {/* Main Image Container */}
              <motion.div
                className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]"
                initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Image Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl p-1">
                  <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
                    <Image
                      className="object-cover w-full h-full"
                      src={aboutMe || "/placeholder.svg?height=450&width=450"}
                      alt="Tityapong - Full Stack Developer"
                      fill
                      priority
                    />
                  </div>
                </div>

                {/* Floating Status Badge */}
                <motion.div
                  className="absolute -bottom-6 -left-6 z-10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <MovingBorderBtn
                    borderRadius="1rem"
                    className="bg-gray-900/90 backdrop-blur-sm border-gray-700/50 px-6 py-3"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-gray-200 font-medium">Open to Work</span>
                    </div>
                  </MovingBorderBtn>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-blue-500/30 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Code className="w-8 h-8 text-blue-400" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
