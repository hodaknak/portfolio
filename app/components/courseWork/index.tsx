import React from "react";

export default function CourseWork() {
    return (
        <div className="w-2/3 m-auto">
            <Card>
                <div className="text-xl tracking-tight text-gray-200 flex justify-between w-full">
                    <div>I&C SCI H32: Python Programming and Libraries (Accelerated)</div>
                    <div>Grade: N/A</div>
                </div>
                <p className="text-sm">Professor Thornton</p>
                <p className="text-sm hover:text-blue-500 w-fit"><a href="https://ics.uci.edu/~thornton/icsh32/"
                                                                           target="_blank">Course Page</a></p>
                <p className="mt-1.5">Learned basic Python syntax and conventions. Covered data structures, test-driven development, socket
                    programming, web APIs, using graphics and GUI libraries, and more.</p>
            </Card>
            <Card>
                <div className="text-xl tracking-tight text-gray-200">
                    <div className="text-xl tracking-tight text-gray-200 flex justify-between w-full">
                        <div>I&C SCI 6B: Boolean Logic and Discrete Structures</div>
                        <div>Grade: A+</div>
                    </div>
                </div>
                <p className="text-sm">Professor Gassko</p>
                <p className="mt-1.5">Learned logic, boolean algebra, proofs, set theory, functions, relations, finite state machines, and turing machines.</p>
            </Card>
        </div>
    )
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
    )
}