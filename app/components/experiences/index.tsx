import React from "react"
import styles from "./index.module.css";

export default function Experiences() {
    return (
        <>
            <div className="flex flex-wrap w-full text-center">
                <div className="w-1/2">
                    <p className="text-2xl">Work Experiences</p>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className="w-1/2">
                    <p className="text-2xl">Projects</p>
                </div>
            </div>
        </>
    )
}

function Card() {
    return (
        <>
            <div className="bg-[#474f69] shadow hover:bg-gray-700 rounded-lg w-1/2 m-auto border-2 mt-14 hover:scale-105" style={{transition: "all 1s ease"}}>
                <div className="block p-6">
                    <p className="mb-2 text-2xl font-bold tracking-tight text-gray-200">Education</p>
                </div>
            </div>
        </>
    )
}