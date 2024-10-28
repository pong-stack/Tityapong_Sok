"use client"
import { SiReact,
    SiNextdotjs,SiTailwindcss,SiMongodb,SiTsnode,SiExpress,SiBootstrap,SiJavascript,SiNodedotjs

} from "react-icons/si"
import Title from "./Tittle";
import { HoverEffect } from "@/components/ui/card-hover-effect";



export default function Skill(){
    const skills=[
        {
            text: "React",
            Icon:SiReact
            
        },
        {
            text:"Next js",
           Icon:SiNextdotjs,

        },
        {
            text: "Tailwindcss",
            Icon:SiTailwindcss,
        },
        {
            text: "MongoDB",
            Icon: SiMongodb,

        }
        ,
        {
            text: "TypeScript",
            Icon: SiTsnode,

        },{
            text: "Express",
            Icon: SiExpress,
        },{
            text: "Bootstrap",
            Icon: SiBootstrap,
        },{
             text: "Javascript",
            Icon: SiJavascript,
        },{
            text: "Node.js",
            Icon: SiNodedotjs,
        }
    ]
    return (
        <div className=" max-w-5xl mx-auto px-8" >
            <Title text="Skills"  className="flex flex-col items-center  justify-center -rotate-6 "  />
            <HoverEffect  items={skills}/>
        </div>
    )
    
}