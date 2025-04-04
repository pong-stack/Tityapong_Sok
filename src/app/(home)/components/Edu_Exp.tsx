"use client";

import type React from "react";
import Title from "./Tittle";

interface Experience {
  company: string;
  logo: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  institution: string;
  logo: string;
  degree: string;
  startDate: string;
  endDate: string;
}

const experiences: Experience[] = [
  {
    company: "Faculty of Engineering, RUPP",
    logo: "fe.png",
    role: "Volunteer Bussiness Club",
    startDate: "July 14, 2023",
    endDate: "Mar , 23, 2024",
    description:
      "Worked Organization Events and marketing for Communication with teamwork .  ",
  },
  // {
  //   company: "Giantibis",
  //   logo: "gain.jpeg",
  //   role: "Frontend Developer / Freelance",
  //   startDate: "Jan ,21 , 2025",
  //   endDate: "present",
  //   description:
  //     "Build website using Next js and tailwind css .  A digital bus ticketing platform. ",
  // },
  {
    company: "RUPP",
    logo: "logoevent.png",
    role: "Project Assignment / Web Developer",
    startDate: "Dec ,02, 2024",
    endDate: "Jan , 18 ,2025",
    description:
      "I'm working with my team. and I am responsible for the design and development of the REST Full API of the website.",
  },
];

const education: Education[] = [
  {
    institution: "Royal University of Phnom Penh",
    logo: "rupp.png",
    degree: "Bachelor of Information Technology Engineering",
    startDate: "Mar 01, 2022",
    endDate: "Present",
  },
  {
    institution: "ANT Technology Training Center",
    logo: "ant.png",
    degree: "Fullstack Web Developer ",
    startDate: "Jan 20, 2024",
    endDate: "Mar 31 , 2025",
  },
];

const CardWrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    className="group relative rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/90 to-gray-900/50 p-4 sm:p-6 backdrop-blur-sm
               transition-all duration-300 hover:bg-gray-800/50 hover:shadow-[0_0_30px_2px_rgba(50,50,50,0.4)]
               hover:border-gray-700 hover:-translate-y-1"
  >
    <div
      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 
                    blur-xl transition-opacity duration-500 group-hover:opacity-100"
    />
    <div className="relative">{children}</div>
  </div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8 space-y-12 sm:space-y-16">
      {/* Work Experience Section */}
      <section>
      <Title text="Experience" className="flex flex-col  items-center justify-center -rotate-6" />
       

        <div className="space-y-6 mt-10 sm:space-y-8">
          {experiences.map((experience, index) => (
            <CardWrapper key={`work-${index}`}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-0">
                <div className="flex items-start gap-4">
                  <div
                    className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-gray-700 group-hover:ring-gray-500
                             transition-all duration-300 hover:scale-110"
                  >
                    <img
                      src={experience.logo || "/placeholder.svg"}
                      alt={`${experience.company} logo`}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold group-hover:text-blue-400 transition-colors duration-300">
                      {experience.company}
                    </h2>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {experience.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 group-hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base">
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
              <p className="mt-4 text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base">
                {experience.description}
              </p>
            </CardWrapper>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
      <Title text="Education" className="flex flex-col  items-center justify-center -rotate-6" />
       
        <div className="space-y-6 mt-10 sm:space-y-8">
          {education.map((edu, index) => (
            <CardWrapper key={`edu-${index}`}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-0">
                <div className="flex items-start gap-4">
                  <div
                    className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-gray-700 group-hover:ring-gray-500
                             transition-all duration-300 hover:scale-110"
                  >
                    <img
                      src={edu.logo || "/placeholder.svg"}
                      alt={`${edu.institution} logo`}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold group-hover:text-blue-400 transition-colors duration-300">
                      {edu.institution}
                    </h2>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {edu.degree}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 group-hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            </CardWrapper>
          ))}
        </div>
      </section>
    </div>
  );
}
