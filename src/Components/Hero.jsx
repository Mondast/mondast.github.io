"use client"
import { PiHandWaving } from "react-icons/pi";
import { Link } from "react-scroll";

export default function Hero() {
    return (
        <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-20">
            <h1 className="mx-auto flex items-center max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
                Hello! Welcome <PiHandWaving className="ml-2"/>
            </h1>
            <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
                Hello, I'm Fr3zy. I'm a Full-Stack developer living in Turkey and working on various projects. I have experience in both front-end and back-end development and am interested in different types of projects.
            </p>
            <Link
                className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
                to="projects"
                spy={true}
                smooth={true}
                duration={800} // Animasyon süresini burada belirleyebilirsiniz
            >
                Projects
            </Link>
        </main>
    );
}
 