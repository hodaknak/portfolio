"use client";

import React, {useState, useEffect} from "react"
import Image from "next/image";

import styles from "./toolsLogos.module.css"

import tools from "./tools.json"

export default function Logos() {
    const [active, setActive] = useState(0);
    const [label, setLabel] = useState(tools[0].name);
    const [showLabel, setShowLabel] = useState(true);

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            let rand;

            do {
                rand = Math.floor(Math.random() * (tools.length));
            } while (rand == active)

            setActive(rand);

            setShowLabel(false);

            setTimeout(() => {
                setLabel(tools[rand].name);
                setShowLabel(true);
            }, 500);
        }, 2000);

        //Clearing the interval
        return () => clearInterval(interval);
    }, [active]);

    return (
        <div className="w-full">
            <div className="grid grid-cols-7 m-auto justify-items-center justify-between gap-3 sm:gap-10 w-2/3">
                {tools.map((tool, index) =>
                    <Image src={tool.filePath} width="50" height="50" alt="" key={index} className={`${styles.logo}`} title={tool.name} style={active == index ? {transform: "scale(1.5)"} : {}}/>
                )}
            </div>
            <p className={`text-center mt-7 text-2xl ${showLabel ? styles.textShow : styles.textFade}`}>{label}</p>
        </div>
    )
}