import Image from "next/image";

import Cards from "./components/cards"
import Logos from "./components/toolsLogos"
import Atom from "./components/atom"
import Experiences from "./components/experiences"
import Cursor from "./components/cursor"
import CourseWork from "./components/courseWork"

import React from "react";

export default function Home() {

    return (
        <>
            <div
                className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    <div className="w-full text-center mb-28">
                        <p className="text-6xl text-gray-300 tracking-tight">
                            Hodaka Nakamura
                        </p>
                    </div>

                    <Atom width={1000} height={1000}/>

                    <Cards/>

                    <div className="w-full text-center mt-24">
                        <p className="text-4xl text-gray-400">
                            My Toolbox
                        </p>
                    </div>

                    <Logos/>

                    <div className="w-full text-center mt-16">
                        <p className="text-4xl text-gray-400">
                            Experience
                        </p>
                    </div>

                    <Experiences/>

                    <div className="w-full text-center mt-16">
                        <p className="text-4xl text-gray-400">
                            Relevant Coursework
                        </p>
                    </div>
                    <div className="m-auto">
                        <Image src="/education/uci.png" width="60" height="60" alt=""/>
                        <svg className="mt-2 m-auto blur-[2px]" xmlns="http://www.w3.org/2000/svg" width="50" height="10">
                            <ellipse fill="rgb(156 163 175)" rx="25" ry="5" cx="25" cy="5"/>
                        </svg>
                    </div>

                    <CourseWork/>
                </main>
                <footer className="row-start-4 text-gray-500">
                    <p>Built by Hodaka Nakamura with
                        <a className="text-gray-400 hover:text-blue-500" href="https://nextjs.org/"
                           target="_blank"> Next.js</a> and
                        <a className="text-gray-400 hover:text-blue-500" href="https://tailwindcss.com/"
                           target="_blank"> Tailwind CSS</a> using
                        <a className="text-gray-400 hover:text-blue-500" href="https://www.jetbrains.com/webstorm/"
                           target="_blank"> JetBrains WebStorm</a>. Deployed using
                        <a className="text-gray-400 hover:text-blue-500" href="https://vercel.com/home"
                           target="_blank"> Vercel</a>.</p>
                </footer>
            </div>
            <Cursor/>
        </>
    );
}
