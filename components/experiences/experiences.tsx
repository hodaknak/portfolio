import React from "react";
import ExternalLink from "../externalLink";
import Image from "next/image";

export default function Experiences() {
    return (
        <>
            <div className="flex flex-wrap w-full text-center">
                <div className="min-w-[400px] w-1/2 m-auto mt-6">
                    <p className="text-2xl">Work Experiences</p>
                    <Card>
                        <Image className="absolute top-4 right-4" width={50} height={50} src="/experience/ardent.png" alt="Ardent"/>
                        <p className="w-[calc(100%-50px)] text-lg font-bold tracking-tight text-gray-200">Ardent Academy</p>
                        <p className="mb-2 text-[#7e8591]">Tutor (2025-Present)</p>
                        <p className="mb-2">Helping K-12 children with STEM subjects, designing personalized curriculums
                            and adapting to student&#39;s needs</p>
                        <p className="text-sm text-[#7e8591]">Topics</p>
                        <p className="mb-0.5">Python, Java, JavaScript, C++, and other STEM subjects</p>
                        <p className="text-sm text-[#7e8591]">Tools</p>
                        <p className="mb-0.5">Replit, Microsoft Teams, TutorBird, GroupMe</p>
                    </Card>
                    <Card>
                        <Image className="absolute top-4 right-4" width={50} height={50} src="/experience/hakoniwa.png" alt="Hakoniwa"/>
                        <p className="w-[calc(100%-50px)] text-lg font-bold tracking-tight text-gray-200">TOPPERS Hakoniwa WG</p>
                        <p className="mb-2 text-[#7e8591]">Software Engineering Intern (2023-2024)</p>
                        <p className="mb-2">Help develop virtual environment for embedded systems and IoT, introducing
                            audio streaming and working with signal processing</p>
                        <p className="text-sm text-[#7e8591]">Languages</p>
                        <p className="mb-0.5">C#, Python</p>
                        <p className="text-sm text-[#7e8591]">Tools</p>
                        <p className="mb-0.5">Unity, Matplotlib, NumPy, Blender</p>
                        <p className="text-sm text-[#7e8591]">Developer Tools</p>
                        <p>JetBrains Rider, Visual Studio, Jupyter/Google Colab, Docker, WSL2</p>
                    </Card>
                    <Card>
                        <Image className="absolute top-4 right-4" width={50} height={50} src="/experience/mathnasium.png" alt="Mathnasium"/>
                        <p className="w-[calc(100%-50px)] text-lg font-bold tracking-tight text-gray-200">Mathnasium Learning Center</p>
                        <p className="mb-2 text-[#7e8591]">Math Tutor (2023-2024)</p>
                        <p className="mb-2">Taught children K-12 alongside multiple tutors with mathematics up to
                            calculus</p>
                        <p className="text-sm text-[#7e8591]">Topics</p>
                        <p className="mb-0.5">K-12 Math</p>
                    </Card>
                    <Card>
                        <Image className="absolute top-4 right-4" width={50} height={50} src="/experience/psu.png" alt="PSU"/>
                        <p className="w-[calc(100%-50px)] text-lg font-bold tracking-tight text-gray-200">Portland State University
                            Fariborz Maseeh Department of Mathematics + Statistics</p>
                        <p className="mb-2 text-[#7e8591]">Part-time Fullstack Web Developer (2021-2022)</p>
                        <p>Developed feature for math instructors to create customized courses</p>
                        <ExternalLink className="mb-2" color="rgb(156 163 175)" width={20} height={20}
                                      link="https://taafu.org/">Link</ExternalLink>
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
                        <p className="mb-2">A portfolio website made with Next.js and hosted using Vercel</p>
                        <p className="text-sm text-[#7e8591]">Languages</p>
                        <p className="mb-0.5">HTML, CSS, TypeScript, JSX</p>
                        <p className="text-sm text-[#7e8591]">Tools</p>
                        <p className="mb-0.5">Node.js, React.js, Next.js, Tailwind CSS, P5.js</p>
                        <p className="text-sm text-[#7e8591]">Developer Tools</p>
                        <p>JetBrains WebStorm, Github, GitKraken, Npm, ESLint, Vercel, WSL2, JetBrains Toolbox</p>
                    </Card>
                    <Card>
                        <ExternalLink className="text-lg font-bold tracking-tight text-gray-200"
                                      color="rgb(229 231 235)"
                                      width={20} height={20}
                                      link="https://marketplace.visualstudio.com/items?itemName=hodakan.yozakura">Yozakura</ExternalLink>
                        <p className="mb-2">A dark Visual Studio Code theme inspired by the beauty of cherry blossoms at
                            night</p>
                        <p className="text-sm text-[#7e8591]">Languages</p>
                        <p className="mb-0.5">JSON</p>
                        <p className="text-sm text-[#7e8591]">Tools</p>
                        <p className="mb-0.5">Theme Studio, Visual Studio Code, Yeoman, Vsce, Azure DevOps</p>
                    </Card>
                    <Card>
                        <p className="text-lg font-bold tracking-tight text-gray-200">Unpublished Research Paper</p>
                        <p className="mb-2">A time-series forecasting model using LSTMs to predict sunspots for space
                            weather forecasting</p>
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
    );
}

function Card({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div
            className="bg-[#474f69] shadow hover:bg-gray-700 rounded-lg w-3/4 m-auto border-2 mt-14 hover:scale-105 text-left"
            style={{transition: "all 1s ease"}}>
            <div className="block p-6 relative">
                {children}
            </div>
        </div>
    );
}