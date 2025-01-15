import React from "react";
import ExternalLink from "@/components/externalLink";

export default function CourseWork() {
    return (
        <div className="w-2/3 m-auto">
            <Card>
                <div className="text-xl tracking-tight text-gray-200 flex flex-wrap justify-between w-full">
                    <div>I&C SCI 33: Intermediate Programming</div>
                    <div>Grade: N/A</div>
                </div>
                <p className="text-sm">Professor Thornton</p>
                <ExternalLink className="text-sm" color="rgb(156 163 175)" width={17} height={17}
                              link="https://ics.uci.edu/~thornton/ics33/">Course Page</ExternalLink>
                <p className="mt-1.5"> Functional programming, name spaces, modules, class protocols, inheritance,
                    iterators, generators, operator overloading, reflection, analysis of time and space efficiency, and
                    more.</p>
            </Card>
            <Card>
                <div className="text-xl tracking-tight text-gray-200 flex flex-wrap justify-between w-full">
                    <div>I&C SCI H32: Python Programming and Libraries (Accelerated)</div>
                    <div>Grade: A</div>
                </div>
                <p className="text-sm">Professor Thornton</p>
                <ExternalLink className="text-sm" color="rgb(156 163 175)" width={17} height={17}
                              link="https://ics.uci.edu/~thornton/icsh32/">Course Page</ExternalLink>
                <p className="mt-1.5">Basic Python syntax and conventions. Covered data structures, test-driven
                    development, socket
                    programming, web APIs, using graphics and GUI libraries, and more.</p>
            </Card>
            <Card>
                <div className="text-xl tracking-tight text-gray-200">
                    <div className="text-xl tracking-tight text-gray-200 flex flex-wrap justify-between w-full">
                        <div>I&C SCI 6B: Boolean Logic and Discrete Structures</div>
                        <div>Grade: A</div>
                    </div>
                </div>
                <p className="text-sm">Professor Gassko</p>
                <p className="mt-1.5">Logic, boolean algebra, proofs, set theory, functions, relations, finite
                    state machines, and turing machines.</p>
            </Card>
            <Card>
                <div className="text-xl tracking-tight text-gray-200 flex flex-wrap justify-between w-full">
                    <div>I&C SCI 45C: Programming in C/C++ as a Second Language</div>
                    <div>Grade: A</div>
                </div>
                <p className="text-sm">Credit by Exam</p>
                <ExternalLink className="text-sm" color="rgb(156 163 175)" width={17} height={17}
                              link="https://ics.uci.edu/~thornton/ics45c/">Course Page</ExternalLink>
                <p className="mt-1.5">Object-oriented programming, memory management, basic C/C++ syntax, and more.
                    Taken with credit by exam before summer of first year.</p>
            </Card>
        </div>
    );
}

function Card({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div
            className="bg-[#474f69] shadow hover:bg-gray-700 rounded-lg w-full m-auto border-2 mt-10 hover:scale-105 text-left"
            style={{transition: "all 1s ease"}}>
            <div className="block p-6">
                {children}
            </div>
        </div>
    );
}