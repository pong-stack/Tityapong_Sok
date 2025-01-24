"use client"
import Image from "next/image"
import Link from "next/link"
import { aboutMe } from "@/assets"
import { MovingBorderBtn } from "@/components/ui/moving-border"
import { motion } from "framer-motion"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <motion.div
      className="min-h-[60vh] flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-8 md:py-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Text Content */}
      <motion.div
        className="space-y-6 md:space-y-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        variants={containerVariants}
      >
        <motion.h1
          className="text-xl md:text-4xl lg:text-3xl font-bold underline underline-offset-8 decoration-indigo-500 dark:decoration-indigo-300"
          variants={itemVariants}
        >
          I&apos;m Tityapong 👋😊
        </motion.h1>

        <motion.p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-md" variants={itemVariants}>
          I was born in Cambodia. I&apos;m a third-year IT Engineering student at the Royal University of Phnom Penh. I
          love coding and learning about modern technology. I am a hard-working and level-headed individual with a
          mature outlook on life and a realistic sense of the challenges I face in my studies.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link href={"mailto:tityapong77@gmail.com"} className="inline-block group">
            <div>
              <h1 className="text-xl md:text-xl font-bold text-gray-700 dark:text-gray-200 group-hover:text-indigo-500 dark:group-hover:text-indigo-300 transition-colors">
                Contact Me 📩
              </h1>
              <motion.div
                className="w-full h-2 bg-indigo-500 dark:bg-indigo-300 rounded-full transform origin-left"
                whileHover={{ scaleX: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div className="w-full md:w-1/2 flex justify-center md:justify-end" variants={itemVariants}>
        <motion.div
          className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            className="rounded-lg object-cover"
            src={aboutMe || "/placeholder.svg"}
            alt="Tityapong's profile picture"
            fill
            priority
          />
          <motion.div
            className="absolute bottom-5 sm:bottom-15 left-0 sm:left-5"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <MovingBorderBtn
              borderRadius="0.5rem"
              className="p-3 font-semibold text-gray-700 dark:text-gray-300 dark:border-gray-500"
            >
              <p>Available for Work 💼</p>
            </MovingBorderBtn>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

