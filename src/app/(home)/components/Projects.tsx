// "use client"
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';
// import { SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb , SiNextdotjs , SiMysql } from "react-icons/si";
// import Title from "./Tittle";
// import Link from "next/link";
// import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
// import { cn } from "@/lib/utils";

// export default function Projects() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });

//   const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
//   const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

//   const projects = [
//     {
//       title: "Booking Hotel",
//       tech: [SiHtml5, SiCss3, SiBootstrap, SiJavascript],
//       link: "https://project-bos5.vercel.app/Home.html",
//       cover: "/booking_hotel.png",
//       background: "bg-indigo-500"
//     },
//     {
//       title: "E-commerce",
//       tech: [SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb],
//       link: "https://ecommerce-frontend-lemon-sigma.vercel.app/",
//       cover: "/Ecommerce.png",
//       background: "bg-green-500"
//     },
//     {
//         title: "BookMyEvent",
//         tech: [SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress , SiMysql],
//         link: "https://book-my-event-pink.vercel.app/",
//         cover: "/bookevent.png",
//         background: "bg-blue-500"
//       }
//   ];

//   return (
//     <motion.div 
//       ref={ref}
//       style={{ opacity, scale }}
//       className="py-10 p-5 sm:p-0"
//     >
//       <Title text="Projects" className="flex flex-col items-center justify-center -rotate-6" />
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
//         {projects.map((project, index) => (
//           <Link href={project.link} key={index}>
//             <motion.div 
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               className={cn("p-5 rounded-md", project.background)}
//             >
//               <DirectionAwareHover 
//                 imageUrl={project.cover} 
//                 className="w-full space-y-5 cursor-pointer"
//               >
//                 <div className="space-y-5">
//                   <h1>{project.title}</h1>
//                   <div className="flex items-center gap-5">
//                     {project.tech.map((Icon, techIndex) => (
//                       <Icon className="w-8 h-8" key={techIndex} />
//                     ))}
//                   </div>
//                 </div>
//               </DirectionAwareHover>
//             </motion.div>
//           </Link>
//         ))}
//       </div>
//     </motion.div>
//   );
// }



"use client"

import type React from "react"
import Image from "next/image"
import { Globe, Github } from "lucide-react"
import { useState } from "react"
import Title from "./Tittle"; // Assuming Tittle.tsx exists and works

// Define project data with updated details
const projects = [
  {
    id: "we-soccer",
    title: "We Soccer",
    period: "Jan 2025 - Mar 2025",
    description: "Platform for booking football fields and finding teams. Users can apply to find teams. Admins manage beverage orders, accept/reject bookings with email/Telegram notifications.",
    imageUrl: "/we-soccer.png",
    technologies: ["Node.js", "Express", "MySQL", "EJS"],
    links: [
        { label: "Website", icon: <Globe className="w-4 h-4" />, url: "https://www.wesoccer.publicvm.com/" },
        { label: "Source", icon: <Github className="w-4 h-4" />, url: "https://github.com/LeangengSeak/we_soccer.git" }
    ],
  },
  {
    id: "book-my-event",
    title: "BookMyEvent",
    period: "Oct 2024 - Jan 2025",
    description: "Event booking platform allowing user ratings and service listing by category. Admins manage categories (CRUD). Suppliers manage their bookings and event listings.",
    imageUrl: "/bookevent.png",
    technologies: ["Node.js", "Express", "MySQL", "Next.js", "TypeScript" , "Tailwind CSS"],
    links: [
      { label: "Website", icon: <Globe className="w-4 h-4" />, url: "https://book-my-event-pink.vercel.app/" },
      { label: "Source", icon: <Github className="w-4 h-4" />, url: "https://github.com/Tityapong/BookMyEvent.git" },
    ],
  },
  {
    id: "booking-hotel",
    title: "Booking Hotel",
    period: "March 2024 - April 2024",
    description: "A static hotel booking website prototype. An early team project focusing on front-end implementation.",
    imageUrl: "/booking_hotel.png",
    technologies: ["HTML", "CSS", "Bootstrap"],
    links: [
      // Make sure these URLs are correct or intended placeholders
      { label: "Website", icon: <Globe className="w-4 h-4" />, url: "/" },
      { label: "Source", icon: <Github className="w-4 h-4" />, url: "/" },
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    period: "June 2023 - Sep 2023",
    description: "E-commerce platform featuring product listing, product creation capabilities, and user authentication.",
    imageUrl: "/Ecommerce.png",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    links: [
        { label: "Website", icon: <Globe className="w-4 h-4" />, url: "https://ecommerce-frontend-lemon-sigma.vercel.app/" },
        { label: "Source", icon: <Github className="w-4 h-4" />, url: "https://github.com/Tityapong/Ecommerce-App.git" }
    ],
  },
]

export default function PortfolioShowcase() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8"> {/* Corrected min-h-scree to min-h-screen */}
        <Title text="Projects" className="flex flex-col items-center justify-center -rotate-6" />
      <div className="max-w-5xl pt-12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
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
    <div  className="bg-black border border-zinc-800 rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(120,120,255,0.15)] hover:border-zinc-700">
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
        {!imageLoaded && <div className="absolute inset-0 bg-zinc-900 animate-pulse" />}
      </div>

      {/* Project Details */}
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-0.5">{title}</h2>
        <p className="text-zinc-400 text-sm mb-2">{period}</p>
        <div className="text-zinc-300 text-sm mb-3 line-clamp-3">{description}</div>

        {/* Technology Tags - Displays ALL technologies now */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {technologies.map((tech, index) => ( // <--- FIX applied here
                      <span
                      key={index}
                      className="px-2.5 py-1 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-full text-xs text-zinc-300 border border-transparent transition-all duration-200 hover:from-zinc-700 hover:to-zinc-800 hover:text-white hover:border-zinc-600 hover:shadow-sm"
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
              className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-full text-sm"
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