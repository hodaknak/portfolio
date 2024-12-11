import React from "react"
//import styles from "./index.module.css";

export default function Experiences() {
    return (
        <>
            <div className="flex flex-wrap w-full text-center">
                <div className="min-w-[400px] w-1/2 m-auto mt-6">
                    <p className="text-2xl">Work Experiences</p>
                    <Card>
                        <p className="text-lg font-bold tracking-tight text-gray-200">TOPPERS Hakoniwa WG</p>
                        <p className="mb-2">Software Engineering Intern (2023-2024)</p>
                        <p className="text-sm text-[#7e8591]">Languages</p>
                        <p className="mb-0.5">C#, Python</p>
                        <p className="text-sm text-[#7e8591]">Tools</p>
                        <p className="mb-0.5">Unity, Matplotlib, NumPy, Blender</p>
                        <p className="text-sm text-[#7e8591]">Developer Tools</p>
                        <p>JetBrains Rider, Visual Studio, Jupyter/Google Colab, Docker, WSL2</p>
                    </Card>
                    <Card>
                        <p className="text-lg font-bold tracking-tight text-gray-200">Portland State University
                            Fariborz Maseeh Department of Mathematics + Statistics</p>
                        <p className="mb-2">Part-time Fullstack Web Developer (2021-2022)</p>
                        <p className="text-sm text-[#7e8591]">Languages</p>
                        <p className="mb-0.5">HTML, CSS, JavaScript, PHP, SQL</p>
                        <p className="text-sm text-[#7e8591]">Tools</p>
                        <p className="mb-0.5">Bootstrap, JQuery, SQLite</p>
                        <p className="text-sm text-[#7e8591]">Developer Tools</p>
                        <p>Visual Studio Code, Docker, Crostini (Linux on ChromeOS), Github, Git Bash</p>
                    </Card>
                </div>
                <div className="min-w-[400px] w-1/2 m-auto mt-6">
                    <p className="text-2xl">Projects</p>
                    <Card>
                        <p className="text-lg font-bold tracking-tight text-gray-200">Portfolio Website</p>
                        <p className="mb-2">A portfolio website made with Next.js hosted using Vercel</p>
                        <p className="text-sm text-[#7e8591]">Languages</p>
                        <p className="mb-0.5">HTML, CSS, JavaScript, JSX</p>
                        <p className="text-sm text-[#7e8591]">Tools</p>
                        <p className="mb-0.5">Node.js, React.js, Next.js, Tailwind CSS, P5.js</p>
                        <p className="text-sm text-[#7e8591]">Developer Tools</p>
                        <p>JetBrains WebStorm, Github, GitKraken, Npm, ESLint, Vercel, WSL2, JetBrains Toolbox</p>
                    </Card>
                    <Card>
                        <p className="text-lg font-bold tracking-tight text-gray-200">Terminal-Based Text Editor</p>
                        <p className="mb-2">A simple text editor written in C++</p>
                        <p className="text-sm text-[#7e8591]">Languages</p>
                        <p className="mb-0.5">C++</p>
                        <p className="text-sm text-[#7e8591]">Tools</p>
                        <p className="mb-0.5">FTXUI</p>
                        <p className="text-sm text-[#7e8591]">Developer Tools</p>
                        <p>JetBrains CLion, Github, GitKraken, Make, CMake, G++, WSL2, JetBrains Toolbox</p>
                    </Card>
                    <Card>
                        <p className="text-lg font-bold tracking-tight text-gray-200">Unpublished Research Paper</p>
                        <p className="mb-2">A time-series forecasting model using LSTMs to predict sunspots for space weather forecasting</p>
                        <p className="text-sm text-[#7e8591]">Languages</p>
                        <p className="mb-0.5">Python</p>
                        <p className="text-sm text-[#7e8591]">Tools</p>
                        <p className="mb-0.5">Tensorflow, Scikit-learn, XGBoost, NumPy, Pandas, Matplotlib, Seaborn</p>
                        <p className="text-sm text-[#7e8591]">Developer Tools</p>
                        <p>Google Colab, Microsoft Excel</p>
                    </Card>
                </div>
            </div>
        </>
    )
}

function Card({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-[#474f69] shadow hover:bg-gray-700 rounded-lg w-3/4 m-auto border-2 mt-14 hover:scale-105 text-left" style={{transition: "all 1s ease"}}>
            <div className="block p-6">
                {children}
            </div>
        </div>
    )
}