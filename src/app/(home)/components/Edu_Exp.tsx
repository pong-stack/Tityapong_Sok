// "use client"

// import type React from "react"
// import Title from "./Tittle"
// import Link from "next/link"

// // interface Experience {
// //   company: string
// //   logo: string
// //   role: string
// //   startDate: string
// //   endDate: string
// //   description: string
// //   url?: string // Added URL property
// // }

// interface Education {
//   institution: string
//   logo: string
//   degree: string
//   startDate: string
//   endDate: string
//   url?: string // Added URL property
// }

// // const experiences: Experience[] = [
// //   {
// //     company: "Faculty of Engineering, RUPP",
// //     logo: "fe.png",
// //     role: "Volunteer Bussiness Club",
// //     startDate: "July 14, 2023",
// //     endDate: "Mar , 23, 2024",
// //     description: "Worked Organization Events and marketing for Communication with teamwork.",
// //     url: "https://fe.rupp.edu.kh/",
// //   },
// //   // {
// //   //   company: "Giantibis",
// //   //   logo: "gain.jpeg",
// //   //   role: "Frontend Developer / Freelance",
// //   //   startDate: "Jan ,21 , 2025",
// //   //   endDate: "present",
// //   //   description:
// //   //     "Build website using Next js and tailwind css .  A digital bus ticketing platform. ",
// //   //   url: "https://giantibis.com/",
// //   // },
// //   {
// //     company: "RUPP",
// //     logo: "logoevent.png",
// //     role: "Project Assignment / Web Developer",
// //     startDate: "Dec ,02, 2024",
// //     endDate: "Jan , 18 ,2025",
// //     description:
// //       "I'm working with my team. and I am responsible for the design and development of the REST Full API of the website.",
// //     url: "https://www.rupp.edu.kh/",
// //   },
// // ]

// const education: Education[] = [
//   {
//     institution: "Royal University of Phnom Penh",
//     logo: "rupp.png",
//     degree: "Bachelor of Information Technology Engineering",
//     startDate: "Mar 01, 2022",
//     endDate: "Present",
//     url: "https://www.fe.rupp.edu.kh/",
//   },
//   {
//     institution: "ANT Technology Training Center",
//     logo: "ant.png",
//     degree: "Fullstack Web Developer ",
//     startDate: "Jan 20, 2024",
//     endDate: "Mar 31 , 2025",
//     url: "https://antkh.com/",
//   },
// ]

// interface CardWrapperProps {
//   children: React.ReactNode
//   url?: string
// }

// const CardWrapper = ({ children, url }: CardWrapperProps) => {
//   const content = (
//     <div
//       className="group relative rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/90 to-gray-900/50 p-4 sm:p-6 backdrop-blur-sm
//                transition-all duration-300 hover:bg-gray-800/50 hover:shadow-[0_0_30px_2px_rgba(50,50,50,0.4)]
//                hover:border-gray-700 hover:-translate-y-1 cursor-pointer"
//     >
//       <div
//         className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 
//                     blur-xl transition-opacity duration-500 group-hover:opacity-100"
//       />
//       <div className="relative">
//         {children}
//         {url && (
//           <div className="mt-4 flex justify-end">
//             <span className="text-blue-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
//               Visit
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="transform group-hover:translate-x-1 transition-transform duration-300"
//               >
//                 <path d="M7 17l9.2-9.2M17 17V7H7" />
//               </svg>
//             </span>
//           </div>
//         )}
//       </div>
//     </div>
//   )

//   if (url) {
//     return (
//       <Link href={url} target="_blank" rel="noopener noreferrer" className="block">
//         {content}
//       </Link>
//     )
//   }

//   return content
// }

// export default function Portfolio() {
//   return (
//     <div className="max-w-5xl mx-auto bg-black text-white p-4 sm:p-8 space-y-12 sm:space-y-16">
//       {/* <section>
//         <Title text="Experience" className="flex flex-col items-center justify-center -rotate-6" />
//         <div className="space-y-6 mt-10 sm:space-y-8">
//           {experiences.map((experience, index) => (
//             <CardWrapper key={`work-${index}`} url={experience.url}>
//               <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-0">
//                 <div className="flex items-start gap-4">
//                   <div
//                     className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-gray-700 group-hover:ring-gray-500
//                              transition-all duration-300 hover:scale-110"
//                   >
//                     <img
//                       src={experience.logo || "/placeholder.svg"}
//                       alt={`${experience.company} logo`}
//                       width={48}
//                       height={48}
//                       className="object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h2 className="text-xl font-semibold group-hover:text-blue-400 transition-colors duration-300">
//                       {experience.company}
//                     </h2>
//                     <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
//                       {experience.role}
//                     </p>
//                   </div>
//                 </div>
//                 <p className="text-gray-400 group-hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base">
//                   {experience.startDate} - {experience.endDate}
//                 </p>
//               </div>
//               <p className="mt-4 text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base">
//                 {experience.description}
//               </p>
//             </CardWrapper>
//           ))}
//         </div>
//       </section> */}

//       {/* Education Section */}
//       <section className="education-section">
//         <Title text="Education" className="flex flex-col items-center justify-center " />
//         <div className="space-y-6 mt-10 sm:space-y-8">
//           {education.map((edu, index) => (
//             <CardWrapper key={`edu-${index}`} url={edu.url}>
//               <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-0">
//                 <div className="flex items-start gap-4">
//                   <div
//                     className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-gray-700 group-hover:ring-gray-500
//                              transition-all duration-300 hover:scale-110"
//                   >
//                     <img
//                       src={edu.logo || "/placeholder.svg"}
//                       alt={`${edu.institution} logo`}
//                       width={48}
//                       height={48}
//                       className="object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h2 className="text-xl font-semibold group-hover:text-blue-400 transition-colors duration-300">
//                       {edu.institution}
//                     </h2>
//                     <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
//                       {edu.degree}
//                     </p>
//                   </div>
//                 </div>
//                 <p className="text-gray-400 group-hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base">
//                   {edu.startDate} - {edu.endDate}
//                 </p>
//               </div>
//             </CardWrapper>
//           ))}
//         </div>
//       </section>
//     </div>
//   )
// }



"use client"

import React, { useEffect, useState } from "react"
import Title from "./Tittle" // Note: Fixed spelling from "Tittle" to "Title"
import Link from "next/link"
// import { useTheme } from "next-themes"

// Education data interface
interface Education {
  institution: string
  logo: string
  degree: string
  startDate: string
  endDate: string
  url?: string
}

// Education data
const educationData: Education[] = [
  {
    institution: "Royal University of Phnom Penh",
    logo: "rupp.png",
    degree: "Bachelor of Information Technology Engineering",
    startDate: "Mar 01, 2022",
    endDate: "Present",
    url: "https://www.fe.rupp.edu.kh/",
  },
  {
    institution: "ANT Technology Training Center",
    logo: "ant.png",
    degree: "Fullstack Web Developer",
    startDate: "Jan 20, 2024",
    endDate: "Mar 31, 2025",
    url: "https://antkh.com/",
  },
]

// Card wrapper component
interface CardWrapperProps {
  children: React.ReactNode
  url?: string
}

const CardWrapper = ({ children, url }: CardWrapperProps) => {
  const cardContent = (
    <div
      className="group relative rounded-xl border border-gray-200 dark:border-gray-800 
                bg-white dark:bg-black 
                p-4 sm:p-6 backdrop-blur-sm transition-all duration-300 
                hover:bg-gray-50 dark:hover:bg-gray-900 
                hover:shadow-lg dark:hover:shadow-[0_0_30px_2px_rgba(20,20,20,0.4)]
                hover:border-gray-300 dark:hover:border-gray-700 
                hover:-translate-y-1 cursor-pointer"
    >
      <div
        className="absolute inset-0 rounded-xl bg-gradient-to-r 
                  from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 
                  opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative">
        {children}
        {url && (
          <div className="mt-4 flex justify-end">
            <span className="text-blue-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
              Visit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </span>
          </div>
        )}
      </div>
    </div>
  )

  // Wrap with Link if URL is provided
  if (url) {
    return (
      <Link href={url} target="_blank" rel="noopener noreferrer" className="block">
        {cardContent}
      </Link>
    )
  }

  return cardContent
}

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="max-w-5xl mx-auto bg-white dark:bg-black text-gray-900 dark:text-white p-4 sm:p-8 space-y-12 sm:space-y-16">
      {/* Education Section */}
      <section>
        <Title text="Education" className="flex flex-col items-center justify-center" />
        <div className="space-y-6 mt-10 sm:space-y-8">
          {educationData.map((education, index) => (
            <CardWrapper key={`education-${index}`} url={education.url}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-0">
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-gray-300 dark:ring-gray-700 
                                  group-hover:ring-gray-400 dark:group-hover:ring-gray-500 transition-all duration-300 hover:scale-110">
                    <img
                      src={education.logo || "/placeholder.svg"}
                      alt={`${education.institution} logo`}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {education.institution}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {education.degree}
                    </p>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base">
                  {education.startDate} - {education.endDate}
                </p>
              </div>
            </CardWrapper>
          ))}
        </div>
      </section>
    </div>
  )
}
