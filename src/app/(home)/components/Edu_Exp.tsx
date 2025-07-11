"use client"

import type React from "react"
import Title from "./Tittle"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ExternalLink } from "lucide-react"

interface Experience {
  company: string
  logo: string
  role: string
  startDate: string
  endDate: string
  description: string[]
  technologies?: string[]
  url?: string
}

interface Education {
  institution: string
  logo: string
  degree: string
  startDate: string
  endDate: string
  url?: string
}

const experiences: Experience[] = [
  {
    company: "Cotafer Co., Ltd",
    logo: "/cotafer_logo.jpeg",
    role: "Web Developer",
    startDate: "Mar 2025",
    endDate: "Jun 2025",
    description: [
      "Wrote and tested Vue.js components to ensure correct functionality",
      "Reviewed and debugged code to maintain high code quality and performance",
      "Ensured maintainability by following clean code practices and component reusability",
    ],
    technologies: ["Vue.js", "JavaScript", "CSS", "HTML", "Tailwind CSS"],
    url: "https://www.cotafer.group/",
  },
  {
    company: "Event Appointment",
    logo: "/logoevent.png",
    role: "Web Developer",
    startDate: "Aug 2024",
    endDate: "Dec 2024",
    description: [
      "Developed responsive frontend components using Next.js and Tailwind CSS",
      "Built RESTful APIs with Express.js for event creation, booking, and authentication",
      "Implemented JWT authentication and integrated MySQL for secure data handling",
      "Collaborated in an Agile team, following clean code practices and using Git for version control",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
  },
  {
    company: "ANT Training Center - MPTC",
    logo: "/ant.png",
    role: "Web Development Training (Full Scholarship)",
    startDate: "Jan 2024",
    endDate: "Mar 2025",
    description: [
      "Built real-world Node.js APIs with MySQL and Postman",
      "Applied MVC architecture and followed clean code principles",
      "Gained hands-on experience with Git, version control, and Agile teamwork",
      "Developed reusable modules and participated in code reviews",
      "Integrated frontend applications with backend APIs",
    ],
    technologies: ["Node.js", "MySQL", "Express.js", "Git", "Postman", "MVC Architecture"],
    url: "https://antkh.com/",
  },
]

const education: Education[] = [
  {
    institution: "Royal University of Phnom Penh",
    logo: "/rupp.jpeg",
    degree: "Bachelor of Information Technology Engineering",
    startDate: "Mar 2022",
    endDate: "Present",
    url: "https://www.fe.rupp.edu.kh/",
  },
  {
    institution: "ANT Technology Training Center",
    logo: "/ant.png",
    degree: "Fullstack Web Developer",
    startDate: "Jan 2024",
    endDate: "Mar 2025",
    url: "https://antkh.com/",
  },
]

interface CardWrapperProps {
  children: React.ReactNode
  url?: string
}

const CardWrapper = ({ children, url }: CardWrapperProps) => {
  const content = (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800/50 bg-gradient-to-br from-white via-gray-50/80 to-gray-100/60 dark:from-gray-900/80 dark:via-gray-900/60 dark:to-gray-800/40 p-6 backdrop-blur-md transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_8px_40px_-12px_rgba(59,130,246,0.25)] hover:-translate-y-2 cursor-pointer">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Glow effect */}
      <div className="absolute -inset-1 bg-blue-500/10 dark:bg-blue-500/20 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        {children}
        {url && (
          <div className="mt-6 flex justify-end">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <span>Visit</span>
              <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        )}
      </div>
    </div>
  )

  if (url) {
    return (
      <Link href={url} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </Link>
    )
  }
  return content
}

interface ExperienceCardProps {
  experience: Experience
  index: number
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <CardWrapper url={experience.url}>
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
      <div className="flex items-start gap-5 flex-1">
        {/* Company Logo */}
        <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-gray-300 dark:ring-gray-700/50 group-hover:ring-blue-500/50 transition-all duration-500 hover:scale-110 flex-shrink-0">
          <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Image
            src={experience.logo || "/placeholder.svg?height=56&width=56"}
            alt={`${experience.company} logo`}
            width={56}
            height={56}
            className="object-cover rounded-full relative z-10"
          />
        </div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-blue-600 dark:group-hover:from-blue-400 dark:group-hover:to-blue-500 transition-all duration-500">
                {experience.company}
              </h2>
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-300">
                {experience.role}
              </p>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base font-medium">
              <Calendar className="w-4 h-4" />
              {experience.startDate} - {experience.endDate}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2 mb-4">
            {experience.description.map((desc, descIndex) => (
              <div key={descIndex} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 mt-2 flex-shrink-0 group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors duration-300" />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Technologies */}
          {experience.technologies && (
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800/60 text-blue-700 dark:text-blue-300 rounded-full border border-gray-200 dark:border-gray-700/50 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 group-hover:border-blue-300 dark:group-hover:border-blue-500/30 group-hover:text-blue-800 dark:group-hover:text-blue-200 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </CardWrapper>
)

interface EducationCardProps {
  education: Education
  index: number
}

const EducationCard = ({ education }: EducationCardProps) => (
  <CardWrapper url={education.url}>
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
      <div className="flex items-start gap-5 flex-1">
        {/* Institution Logo */}
        <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-gray-300 dark:ring-gray-700/50 group-hover:ring-blue-500/50 transition-all duration-500 hover:scale-110 flex-shrink-0">
          <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Image
            src={education.logo || "/placeholder.svg?height=56&width=56"}
            alt={`${education.institution} logo`}
            width={56}
            height={56}
            className="object-cover rounded-full relative z-10"
          />
        </div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-blue-600 dark:group-hover:from-blue-400 dark:group-hover:to-blue-500 transition-all duration-500">
                {education.institution}
              </h2>
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-300">
                {education.degree}
              </p>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base font-medium">
              <Calendar className="w-4 h-4" />
              {education.startDate} - {education.endDate}
            </div>
          </div>
        </div>
      </div>
    </div>
  </CardWrapper>
)

export default function Portfolio() {
  return (
    <div className="mx-auto bg-gray-50 dark:bg-black text-gray-900 dark:text-white p-4 sm:p-8 space-y-16 sm:space-y-20 transition-colors duration-300">
      {/* Experience Section */}
      <section className="max-w-6xl mx-auto">
        <Title text="Experience" className="flex flex-col items-center justify-center -rotate-6" />
        <div className="space-y-8 mt-12">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`work-${index}`} experience={experience} index={index} />
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-6xl mx-auto">
        <Title text="Education" className="flex flex-col items-center justify-center" />
        <div className="space-y-8 mt-12">
          {education.map((edu, index) => (
            <EducationCard key={`edu-${index}`} education={edu} index={index} />
          ))}
        </div>
      </section>
    </div>
  )
}