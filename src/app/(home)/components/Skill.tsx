"use client"
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiMongodb, SiTsnode, SiExpress, SiBootstrap, SiJavascript, SiNodedotjs } from "react-icons/si";
import Title from "./Tittle";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Skill() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const skills = [
    { text: "React", Icon: SiReact },
    { text: "Next js", Icon: SiNextdotjs },
    { text: "Tailwindcss", Icon: SiTailwindcss },
    { text: "MongoDB", Icon: SiMongodb },
    { text: "TypeScript", Icon: SiTsnode },
    { text: "Express", Icon: SiExpress },
    { text: "Bootstrap", Icon: SiBootstrap },
    { text: "Javascript", Icon: SiJavascript },
    { text: "Node.js", Icon: SiNodedotjs }
  ];

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale }}
      className="max-w-5xl mx-auto px-8"
    >
      <Title text="Skills" className="flex flex-col items-center justify-center " />
      
      <HoverEffect 
        items={skills.map(skill => ({
          ...skill,
          content: (
            <div className="flex flex-col items-center justify-center">
              <skill.Icon className="text-4xl mb-2" />
              <span>{skill.text}</span>
            </div>
          )
        }))}
      />
    </motion.div>
  );
}