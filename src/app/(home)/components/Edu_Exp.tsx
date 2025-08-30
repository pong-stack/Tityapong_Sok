'use client';

import type React from 'react';
import Title from './Tittle';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ExternalLink } from 'lucide-react';

interface Experience {
  company: string;
  logo: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  url?: string;
}

interface Education {
  institution: string;
  logo: string;
  degree: string;
  startDate: string;
  endDate: string;
  url?: string;
}

const experiences: Experience[] = [
  {
    company: 'Cotafer Co., Ltd',
    logo: '/cotafer_logo.jpeg',
    role: 'Web Developer',
    startDate: 'Mar 2025',
    endDate: 'Jun 2025',
    description: [
      'Wrote and tested Vue.js components to ensure correct functionality',
      'Reviewed and debugged code to maintain high code quality and performance',
      'Ensured maintainability by following clean code practices and component reusability',
    ],
    url: 'https://www.cotafer.group/',
  },
  {
    company: 'Event Appointment',
    logo: '/logoevent.png',
    role: 'Web Developer',
    startDate: 'Aug 2024',
    endDate: 'Dec 2024',
    description: [
      'Developed responsive frontend components using Next.js and Tailwind CSS',
      'Built RESTful APIs with Express.js for event creation, booking, and authentication',
      'Implemented JWT authentication and integrated MySQL for secure data handling',
      'Collaborated in an Agile team, following clean code practices and using Git for version control',
    ],
  },
  {
    company: 'ANT Training Center - MPTC',
    logo: '/ant.png',
    role: 'Web Development Training (Full Scholarship)',
    startDate: 'Jan 2024',
    endDate: 'Mar 2025',
    description: [
      'Built real-world Node.js APIs with MySQL and Postman',
      'Applied MVC architecture and followed clean code principles',
      'Gained hands-on experience with Git, version control, and Agile teamwork',
      'Developed reusable modules and participated in code reviews',
      'Integrated frontend applications with backend APIs',
    ],
    url: 'https://antkh.com/',
  },
];

const education: Education[] = [
  {
    institution: 'Royal University of Phnom Penh',
    logo: '/rupp.jpeg',
    degree: 'Bachelor of Information Technology Engineering',
    startDate: 'Mar 2022',
    endDate: 'Present',
    url: 'https://www.fe.rupp.edu.kh/',
  },
  {
    institution: 'ANT Technology Training Center',
    logo: '/ant.png',
    degree: 'Fullstack Web Developer',
    startDate: 'Jan 2024',
    endDate: 'Mar 2025',
    url: 'https://antkh.com/',
  },
];

interface CardWrapperProps {
  children: React.ReactNode;
  url?: string;
}

const CardWrapper = ({ children, url }: CardWrapperProps) => {
  const content = (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      <div className="relative z-10">
        {children}
        {url && (
          <div className="mt-6 flex justify-end">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span>Visit Website</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        )}
      </div>
    </div>
  );

  if (url) {
    return (
      <Link href={url} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </Link>
    );
  }
  return content;
};

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <CardWrapper url={experience.url}>
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
      <div className="flex items-start gap-4 flex-1">
        <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600 flex-shrink-0">
          <Image
            src={experience.logo || '/placeholder.svg?height=48&width=48'}
            alt={`${experience.company} logo`}
            width={48}
            height={48}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {experience.company}
              </h2>
              <p className="text-blue-600 dark:text-blue-400 font-medium">{experience.role}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-md">
              <Calendar className="w-4 h-4" />
              <span>
                {experience.startDate} - {experience.endDate}
              </span>
            </div>
          </div>
          <div className="space-y-2">
            {experience.description.map((desc, descIndex) => (
              <div key={descIndex} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </CardWrapper>
);

interface EducationCardProps {
  education: Education;
  index: number;
}

const EducationCard = ({ education }: EducationCardProps) => (
  <CardWrapper url={education.url}>
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
      <div className="flex items-start gap-4 flex-1">
        <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600 flex-shrink-0">
          <Image
            src={education.logo || '/placeholder.svg?height=48&width=48'}
            alt={`${education.institution} logo`}
            width={48}
            height={48}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {education.institution}
              </h2>
              <p className="text-blue-600 dark:text-blue-400 font-medium">{education.degree}</p>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-md">
              <Calendar className="w-4 h-4" />
              <span>
                {education.startDate} - {education.endDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </CardWrapper>
);

export default function Portfolio() {
  return (
    <div className="mx-auto bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white p-6 sm:p-12 space-y-16">
      <section className="max-w-4xl mx-auto">
        <Title text="Experience" className="flex flex-col items-center justify-center -rotate-6" />
        <div className="space-y-8 mt-12">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`work-${index}`} experience={experience} index={index} />
          ))}
        </div>
      </section>
      <section className="max-w-4xl mx-auto">
        <Title text="Education" className="flex flex-col items-center justify-center" />
        <div className="space-y-8 mt-12">
          {education.map((edu, index) => (
            <EducationCard key={`edu-${index}`} education={edu} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
