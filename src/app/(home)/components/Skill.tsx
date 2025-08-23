"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,

  SiPostman,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiRender,
  SiRailway,
  SiPhp, // Add this
  SiLaravel, // Add this
} from "react-icons/si"
import { TbApi } from "react-icons/tb"
import Title from "./Tittle"

export default function Skill() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1])

  const skillCategories = [
    {
      category: "Front-End",
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" }, // Changed to white for visibility
        { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "shadcn UI", icon: SiReact, color: "#FFFFFF" }, // Changed to white
        { name: "Material UI", icon: SiMui, color: "#007FFF" },
      ],
    },
    {
      category: "Back-End",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" }, // Add this
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" }, // Add this
      ],
    },
    {
      category: "API & Testing",
      skills: [
        { name: "RESTful APIs", icon: TbApi, color: "#FF6B35" },
 
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      ],
    },
    {
      category: "Database",
      skills: [{ name: "MySQL", icon: SiMysql, color: "#4479A1" }], // Changed to MySQL
    },
    {
      category: "Version Control",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#FFFFFF" }, // Changed to white for visibility
      ],
    },
    {
      category: "Design & Deployment",
      skills: [
        { name: "Figma", icon: SiFigma, color: "#9747FF" },
        { name: "Vercel", icon: SiVercel, color: "#FFFFFF" }, // Changed to white for visibility
        { name: "Render", icon: SiRender, color: "#46E3B7" },
        { name: "Railway", icon: SiRailway, color: "#FFFFFF" }, // Changed to white for visibility
      ],
    },
  ]

  return (
    <motion.div ref={ref} style={{ opacity, scale }} className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
      <Title text="Skills" className="flex flex-col items-center justify-center mb-16" />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: categoryIndex * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-800/50 border border-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/50 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.8)]">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-white mb-6 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                  {category.category}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      className="group/skill"
                    >
                      <div className="relative flex flex-col items-center p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 transition-all duration-300 hover:bg-gray-700/40 hover:border-gray-600/50 hover:shadow-lg cursor-pointer">
                        {/* Skill icon glow effect */}
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300 blur-xl"
                          style={{ backgroundColor: skill.color }}
                        />

                        <div className="relative z-10 flex flex-col items-center">
                          <div
                            className="mb-3 p-3 rounded-lg transition-all duration-300 group-hover/skill:scale-110"
                            style={{
                              backgroundColor: `${skill.color}15`,
                              border: `1px solid ${skill.color}30`,
                            }}
                          >
                            <skill.icon
                              className="text-2xl transition-colors duration-300"
                              style={{
                                color: skill.color,
                                filter: "brightness(1.2)",
                              }}
                            />
                          </div>

                          <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors duration-300 text-center leading-tight">
                            {skill.name}
                          </span>
                        </div>

                        {/* Hover indicator */}
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover/skill:w-8 transition-all duration-300 rounded-full" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/20 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-500/30 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-cyan-500/20 rounded-full animate-pulse delay-500" />
      </div>
    </motion.div>
  )
}
