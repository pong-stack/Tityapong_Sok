"use client"

import type React from "react"
import Image from "next/image"
import { Globe, Github, ChevronLeft, ChevronRight, Zap } from "lucide-react"
import { useState } from "react"
import Title from "./Tittle" // Assuming Title.tsx exists and works

const projects = [
  {
    id: "ticket-provider-api",
    title: "Ticket Provider API",
    period: "Feb 2025 - May 2025",
    description:
      "Comprehensive ticket management system with API endpoints for event ticketing. Features include ticket creation, booking management, user authentication, and real-time availability tracking.",
    images: ["/ticker-api.png", "/t1.png", "/t2.png", "/t3.png"],
    technologies: ["Next.js", "shadcn/ui", "Tailwind CSS", "PHP", "Laravel"],
    features: [
      "User authentication and authorization",
      "Event creation and management",
      "Ticket booking system",
      "Order management",
      "Admin dashboard",
      "QR code generation",
    ],
    links: [
      {
        label: "Source",
        icon: <Github className="w-4 h-4" />,
        url: "https://github.com/Tityapong/Ticket-Provider.git",
      },
    ],
  },
  {
    id: "we-soccer",
    title: "We Soccer",
    period: "Jan 2025 - Mar 2025",
    description:
      "Platform for booking football fields and finding teams. Users can apply to find teams. Admins manage beverage orders, accept/reject bookings with email/Telegram notifications.",
    images: [
      "/we-soccer.png",
      "/we1.png",
      "/we2.png",
      "/we3.png",
      "/we4.png",
      "/we5.png",
      "/we6.png",
      "/we7.png",
      "/we8.png",
    ],
    technologies: ["Node.js", "Express", "MySQL", "EJS", "JWT", "Socket.io", "nodemailer", "Telegram Bot API"],
    features: [
      "Football field booking system",
      "Team finding and application",
      "real-time chat",
      "Beverage order management",
      "Email notifications",
      "Telegram bot integration",
      "Admin approval system",
      "User profile management",
      "Booking calendar",
    ],
    links: [
      {
        label: "Website",
        icon: <Globe className="w-4 h-4" />,
        url: "https://www.wesoccer.publicvm.com/",
      },
      {
        label: "Source",
        icon: <Github className="w-4 h-4" />,
        url: "https://github.com/Tityapong/we_soccer.git",
      },
    ],
  },
  {
    id: "book-my-event",
    title: "BookMyEvent",
    period: "Oct 2024 - Jan 2025",
    description:
      "Event booking platform allowing user ratings and service listing by category. Admins manage categories (CRUD). Suppliers manage their bookings and event listings.",
    images: [
      "/bookevent.png",
      "/b1.png",
      "/b2.png",
      "/b3.png",
      "/b4.png",
      "/b5.png",
      "/b6.png",
      "/b7.png",
      "/b8.png",
      "/b9.png",
    ],
    technologies: ["Node.js", "Express", "MySQL", "Next.js", "TypeScript", "Tailwind CSS", "JWT"],
    features: [
      "Event service listings",
      "Category management (CRUD)",
      "User rating system",
      "Supplier dashboard",
      "Booking management",
      "Search and filtering",
      "Review system",
      "Admin panel",
      "Service provider profiles",
    ],
    links: [
      {
        label: "Website",
        icon: <Globe className="w-4 h-4" />,
        url: "https://book-my-event-pink.vercel.app/",
      },
      {
        label: "Source",
        icon: <Github className="w-4 h-4" />,
        url: "https://github.com/Tityapong/BookMyEvent.git",
      },
    ],
  },
  {
    id: "booking-hotel",
    title: "Booking Hotel",
    period: "March 2024 - April 2024",
    description:
      "A static hotel booking website prototype. An early team project focusing on front-end implementation.",
    images: ["/booking_hotel.png"],
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    features: [
      "Hotel room listings",
      "Booking interface",
      "Room details view",
      "Responsive design",
      "Image gallery",
      "Contact forms",
    ],
    links: [
      {
        label: "Website",
        icon: <Globe className="w-4 h-4" />,
        url: "http://antstudents.com/WebScholarshipS2/Group-7/ProjectCSS_Booking%26Tour/index.html",
      },
      { label: "Source", icon: <Github className="w-4 h-4" />, url: "/" },
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    period: "June 2023 - Sep 2023",
    description:
      "E-commerce platform featuring product listing, product creation capabilities, and user authentication.",
    images: ["/Ecommerce.png", "/e1.png", "/e2.png", "/e3.png", "/e4.png", "/e5.png", "/e6.png"],
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    features: [
      "Product catalog",
      "Shopping cart",
      "User authentication",
      "Product creation",
      "Order management",
      "Admin dashboard",
      "Search functionality",
      "Responsive design",
    ],
    links: [
      {
        label: "Website",
        icon: <Globe className="w-4 h-4" />,
        url: "https://ecommerce-frontend-lemon-sigma.vercel.app/",
      },
      {
        label: "Source",
        icon: <Github className="w-4 h-4" />,
        url: "https://github.com/Tityapong/Ecommerce-App.git",
      },
    ],
  },
]

export default function PortfolioShowcase() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="relative mb-8">
          <div className="text-center">
            <Title text="Projects Experience" className="inline-block" />
          </div>
        </div>
        <div className="pt-12 space-y-6">
          {projects.map((project) => (
            <ProjectListItem
              key={project.id}
              title={project.title}
              period={project.period}
              description={project.description}
              images={project.images}
              technologies={project.technologies}
              features={project.features}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

interface ProjectProps {
  title: string
  period: string
  description: string
  images: string[]
  technologies: string[]
  features: string[]
  links: {
    label: string
    icon: React.ReactNode
    url: string
  }[]
}

// ProjectListItem component with image on left and content on right (50/50 split)
function ProjectListItem({ title, period, description, images, technologies, features, links }: ProjectProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(120,120,255,0.15)]">
      <div className="flex flex-col md:flex-row min-h-[250px]">
        {/* Image Section - Left Side (50% width, full height) */}
        <div className="md:w-1/2 relative overflow-hidden aspect-[4/2] md:aspect-[16/9]">
          {images.map((imageSrc, index) => (
            <Image
              key={imageSrc} // Unique key for each image
              src={imageSrc || "/placeholder.svg"}
              alt={`${title} screenshot ${index + 1}`}
              fill
              className={`object-contain transition-opacity duration-300 ${
                index === currentImageIndex ? "opacity-100 relative" : "opacity-0 absolute inset-0"
              }`}
              // `priority` can be added to the first image of the first project if it's critical for LCP.
              // For a carousel, it's often better to let next/image lazy load hidden images.
            />
          ))}
          {/* Navigation Controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm shadow-lg z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm shadow-lg z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                      index === currentImageIndex ? "bg-white scale-125 shadow-lg" : "bg-white/60 hover:bg-white/80"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              <div className="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm shadow-lg z-10">
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
        {/* Content Section - Right Side (50% width) */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-muted-foreground text-sm mb-4">{period}</p>
            <p className="text-foreground/80 mb-6 leading-relaxed">{description}</p>
            {/* Features - Clean List Style */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-sm">Key Features</h3>
              </div>
              <div className="bg-muted/20 rounded-md p-3 border border-border/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {/* Removed max-h-32 and overflow-y-auto */}
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm py-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-foreground/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Technologies */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-sm">Technologies:</h3>
              <div className="flex flex-wrap gap-1.5">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 rounded-full text-xs border border-transparent transition-all duration-200                dark:bg-gradient-to-r dark:from-zinc-800 dark:to-zinc-900 dark:text-zinc-300                bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Links - Bottom of content */}
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
    </div>
  )
}
