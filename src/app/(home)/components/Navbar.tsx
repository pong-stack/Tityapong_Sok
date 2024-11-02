import { ModeToggleDarkMode } from "@/components/Darkmode";

import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Navbar() {
    const socials = [
        {
            Link: "https://www.linkedin.com/in/sok-tityapong-2194802b6/",
            label: "Linkedin",
            icon: SiLinkedin
        },
        {
            Link: "https://github.com/Tityapong",
            label: "Github",
            icon: SiGithub
        },
        {
            Link: "https://www.instagram.com/tityapong/",
            label: "Instagram",
            icon: SiInstagram
        }
    ];

    return (
        <nav className="py-10 flex justify-between items-center max-w-[90%] mx-auto md:max-w-full">
            <h1 className="text-xl md:text-2xl font-bold underline underline-offset-8 decoration-indigo-600 -rotate-1">
                Sok_Tityapong
            </h1>
            <div className="flex items-center gap-5">
                {socials.map((social, index) => {
                    const Icon = social.icon;
                    return (
                        <Link key={index} href={social.Link} aria-label={social.label}>
                            <Icon className="w-5 h-5 hover:scale-125 transition-all" />
                        </Link>
                    );
                })}
                <ModeToggleDarkMode />
            </div>
        </nav>
    );
}
