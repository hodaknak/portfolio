import React from "react"

export default function Page() {
    return (
        <div className="w-full pb-20 min-h-screen grid items-center justify-items-center gap-16">
            <div className="w-full text-center mt-14">
                <p className="text-6xl text-gray-400">
                    Resume
                </p>
            </div>
            <object data="/hnresume.pdf" type="application/pdf" className="m-auto w-2/3 h-screen"/>
            <footer className="row-start-5 text-gray-500">
                <p>Built by Hodaka Nakamura with
                    <a className="text-gray-400 hover:text-blue-500" href="https://nextjs.org/"
                       target="_blank"> Next.js</a> and
                    <a className="text-gray-400 hover:text-blue-500" href="https://tailwindcss.com/"
                       target="_blank"> Tailwind CSS</a> using
                    <a className="text-gray-400 hover:text-blue-500" href="https://www.jetbrains.com/webstorm/"
                       target="_blank"> JetBrains WebStorm</a>. Deployed using
                    <a className="text-gray-400 hover:text-blue-500" href="https://vercel.com/home"
                       target="_blank"> Vercel</a>.
                </p>
            </footer>
        </div>
    );
}