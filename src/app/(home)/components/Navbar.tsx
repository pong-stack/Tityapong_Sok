"use client" 
import { ModeToggleDarkMode } from "@/components/Darkmode"
import Link from "next/link"
import { SiGithub, SiTelegram, SiLinkedin } from "react-icons/si"
import { motion } from "framer-motion"

export default function Navbar() {
  const socials = [
    {
      Link: "https://www.linkedin.com/in/sok-tityapong-2194802b6/",
      label: "Linkedin",
      icon: SiLinkedin,
    },
    {
      Link: "https://github.com/Tityapong",
      label: "Github",
      icon: SiGithub,
    },
    {
      Link: "https://t.me/Tityapong",
      label: "Instagram",
      icon: SiTelegram,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  }

  return (
    <motion.nav
      className="py-10 flex justify-between items-center max-w-[90%] mx-auto md:max-w-full"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-xl md:text-2xl font-bold underline underline-offset-8 decoration-indigo-600 -rotate-1"
        whileHover={{ scale: 1.05, rotate: 0 }}
        whileTap={{ scale: 0.95 }}
      >
        Sok_Tityapong
      </motion.h1>
      <motion.div className="flex items-center gap-5" variants={containerVariants} initial="hidden" animate="visible">
        {socials.map((social, index) => {
          const Icon = social.icon
          return (
            <motion.div key={index} variants={itemVariants}>
              <Link href={social.Link} aria-label={social.label}>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <Icon className="w-5 h-5 transition-all" />
                </motion.div>
              </Link>
            </motion.div>
          )
        })}
        <motion.div variants={itemVariants}>
          <ModeToggleDarkMode />
        </motion.div>
      </motion.div>
    </motion.nav>
  )
}

