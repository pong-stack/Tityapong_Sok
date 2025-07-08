"use client"

import type React from "react"
import Image from "next/image"
import { Globe, Github } from "lucide-react"
import { useState } from "react"
import Title from "./Tittle" // Assuming Tittle.tsx exists and works

// Define project data with updated details
const projects = [
  {
    id: "ticket-provider-api",
    title: "Ticket Provider API",
    period: "Feb 2025 - May 2025",
    description:
      "Comprehensive ticket management system with API endpoints for event ticketing. Features include ticket creation, booking management, user authentication, and real-time availability tracking.",
    imageUrl: "/ticker-api.png",
    technologies: ["Next.js", "shadcn/ui", "Tailwind CSS", "PHP", "Laravel"],
    links: [
   
      { label: "Source", icon: <Github className="w-4 h-4" />, url: "https://github.com/Tityapong/Ticket-Provider.git" },
    ],
  },
  {
    id: "we-soccer",
    title: "We Soccer",
    period: "Jan 2025 - Mar 2025",
    description:
      "Platform for booking football fields and finding teams. Users can apply to find teams. Admins manage beverage orders, accept/reject bookings with email/Telegram notifications.",
    imageUrl: "/we-soccer.png",
    technologies: ["Node.js", "Express", "MySQL", "EJS"],
    links: [
      { label: "Website", icon: <Globe className="w-4 h-4" />, url: "https://www.wesoccer.publicvm.com/" },
      { label: "Source", icon: <Github className="w-4 h-4" />, url: "https://github.com/Tityapong/we_soccer.git" },
    ],
  },
  {
    id: "book-my-event",
    title: "BookMyEvent",
    period: "Oct 2024 - Jan 2025",
    description:
      "Event booking platform allowing user ratings and service listing by category. Admins manage categories (CRUD). Suppliers manage their bookings and event listings.",
    imageUrl: "/bookevent.png",
    technologies: ["Node.js", "Express", "MySQL", "Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Website", icon: <Globe className="w-4 h-4" />, url: "https://book-my-event-pink.vercel.app/" },
      { label: "Source", icon: <Github className="w-4 h-4" />, url: "https://github.com/Tityapong/BookMyEvent.git" },
    ],
  },
  {
    id: "booking-hotel",
    title: "Booking Hotel",
    period: "March 2024 - April 2024",
    description:
      "A static hotel booking website prototype. An early team project focusing on front-end implementation.",
    imageUrl: "/booking_hotel.png",
    technologies: ["HTML", "CSS", "Bootstrap"],
    links: [
      { label: "Website", icon: <Globe className="w-4 h-4" />, url: "http://antstudents.com/WebScholarshipS2/Group-7/ProjectCSS_Booking%26Tour/index.html" },
      { label: "Source", icon: <Github className="w-4 h-4" />, url: "/" },
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    period: "June 2023 - Sep 2023",
    description:
      "E-commerce platform featuring product listing, product creation capabilities, and user authentication.",
    imageUrl: "/Ecommerce.png",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    links: [
      {
        label: "Website",
        icon: <Globe className="w-4 h-4" />,
        url: "https://ecommerce-frontend-lemon-sigma.vercel.app/",
      },
      { label: "Source", icon: <Github className="w-4 h-4" />, url: "https://github.com/Tityapong/Ecommerce-App.git" },
    ],
  },
]

export default function PortfolioShowcase() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="relative mb-8">
          <div className="text-center">
            <Title text="Projects Experience" className="inline-block" />
          </div>
        </div>

        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              period={project.period}
              description={project.description}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  title: string
  period: string
  description: string
  imageUrl: string
  technologies: string[]
  links: {
    label: string
    icon: React.ReactNode
    url: string
  }[]
}

// ProjectCard component with the fix included
function ProjectCard({ title, period, description, imageUrl, technologies, links }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(120,120,255,0.15)] hover:border-muted-foreground">
      {/* Project Screenshot */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`${title} screenshot`}
          fill
          className={`object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
          priority
        />
        {!imageLoaded && <div className="absolute inset-0 bg-muted animate-pulse" />}
      </div>

      {/* Project Details */}
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-0.5">{title}</h2>
        <p className="text-muted-foreground text-sm mb-2">{period}</p>
        <div className="text-foreground/80 text-sm mb-3 line-clamp-3">{description}</div>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 rounded-full text-xs border border-transparent transition-all duration-200 hover:text-white hover:shadow-sm
                dark:bg-gradient-to-r dark:from-zinc-800 dark:to-zinc-900 dark:text-zinc-300 dark:hover:from-zinc-700 dark:hover:to-zinc-800 dark:hover:border-zinc-600
                bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 hover:border-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 transition-colors rounded-full text-sm text-primary"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
