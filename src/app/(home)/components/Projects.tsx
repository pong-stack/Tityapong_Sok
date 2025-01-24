"use client"
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb , SiNextdotjs , SiMysql } from "react-icons/si";
import Title from "./Tittle";
import Link from "next/link";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { cn } from "@/lib/utils";

export default function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const projects = [
    {
      title: "Booking Hotel",
      tech: [SiHtml5, SiCss3, SiBootstrap, SiJavascript],
      link: "https://project-bos5.vercel.app/Home.html",
      cover: "/booking_hotel.png",
      background: "bg-indigo-500"
    },
    {
      title: "E-commerce",
      tech: [SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb],
      link: "https://ecommerce-frontend-lemon-sigma.vercel.app/",
      cover: "/Ecommerce.png",
      background: "bg-green-500"
    },
    {
        title: "BookMyEvent",
        tech: [SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress , SiMysql],
        link: "https://book-my-event-pink.vercel.app/",
        cover: "/bookevent.png",
        background: "bg-blue-500"
      }
  ];

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale }}
      className="py-10 p-5 sm:p-0"
    >
      <Title text="Projects" className="flex flex-col items-center justify-center -rotate-6" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => (
          <Link href={project.link} key={index}>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={cn("p-5 rounded-md", project.background)}
            >
              <DirectionAwareHover 
                imageUrl={project.cover} 
                className="w-full space-y-5 cursor-pointer"
              >
                <div className="space-y-5">
                  <h1>{project.title}</h1>
                  <div className="flex items-center gap-5">
                    {project.tech.map((Icon, techIndex) => (
                      <Icon className="w-8 h-8" key={techIndex} />
                    ))}
                  </div>
                </div>
              </DirectionAwareHover>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}