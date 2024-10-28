
import {SiHtml5,
    SiCss3,SiBootstrap,SiJavascript,SiReact,SiTailwindcss,SiNodedotjs,SiExpress,SiMongodb} from "react-icons/si"
import Title from "./Tittle";
import Link from "next/link";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { cn } from "@/lib/utils";


export default function Projects(){
    const projects=[
        {
            title:"Booking Hotel",
            tech:[SiHtml5,SiCss3,SiBootstrap,SiJavascript],
            link:"https://project-bos5.vercel.app/Home.html",
            cover:"/booking_hotel.png",
            background:"bg-indigo-500"
        },
        {
            title:"E-commerce",
            tech:[SiReact,SiTailwindcss,SiNodedotjs,SiExpress,SiMongodb],
            link:"https://ecommerce-frontend-lemon-sigma.vercel.app/",
            cover:"/Ecommerce.png",
            background:"bg-green-500"
        }
    ]
    
    return <div className=" py-10 p-5 sm:p-0">
            <Title text="Projects"  className="flex flex-col items-center  justify-center -rotate-6 "  />
            <div className=" grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
                {
                    projects.map((project,index)=>{
                        return <Link href={project.link} key={index}>
                            <div className={cn("p-5 rounded-md", project.background)}>
                                <DirectionAwareHover imageUrl={project.cover}  className=" w-full  space-y-5 cursor-pointer"   >
                               <div className=" space-y-5">
                               <h1>{project.title}</h1>
                                    <div  className=" flex items-center gap-5">
                                        { project.tech.map((Icon,index)=>{
                                            return <Icon className=" w-8 h-8 " key={index}/>

                                        })
                                        
                                        }
                                    </div>
                               </div>
                                  
                                </DirectionAwareHover>


                            </div>
                        </Link>


                    })
                }

            </div>


    </div>
}