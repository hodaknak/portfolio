"use client";

import React, {useState, useEffect} from "react"
import Image from "next/image";

import styles from "./index.module.css"

const tools = ["Unreal Engine 5", "Unity", "Tensorflow", "Next.js", "Node.js", "P5.js", "Github", "Gitkraken", "Socket.io", "SQLite", "Visual Studio Code", "Openframeworks", "C++", "JavaScript", "Python", "C#"];

export default function Logos() {
    const [active, setActive] = useState(0);
    const [label, setLabel] = useState(tools[0]);
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
                setLabel(tools[rand]);
                setShowLabel(true);
            }, 500);
        }, 2000);

        //Clearing the interval
        return () => clearInterval(interval);
    }, [active]);

    return (
        <div className="w-full">
            <div className="grid grid-cols-4 m-auto gap-14" style={{width: "424px"}}>
                <Image src="/tools/unreal.svg" width="50" height="50" alt="" className={`${styles.logo}`}
                       style={active == 0 ? {transform: "scale(1.5)"} : {}}/>
                <Image src="/tools/unity.svg" width="50" height="50" alt="" className={`${styles.logo}`}
                       style={active == 1 ? {transform: "scale(1.5)"} : {}}/>
                <Image src="/tools/tensorflow.svg" width="50" height="50" alt="" className={`${styles.logo}`}
                       style={active == 2 ? {transform: "scale(1.5)"} : {}}/>
                <Image src="/tools/next.svg" width="50" height="50" alt="" className={`${styles.logo}`}
                       style={active == 3 ? {transform: "scale(1.5)"} : {}}/>
                <Image src="/tools/node.svg" width="50" height="50" alt="" className={`${styles.logo}`}
                       style={active == 4 ? {transform: "scale(1.5)"} : {}}/>
                <Image src="/tools/p5js.svg" width="50" height="50" alt="" className={`${styles.logo}`}
                       style={active == 5 ? {transform: "scale(1.5)"} : {}}/>
                <Image src="/socials/github.svg" width="50" height="50" alt="" className={`${styles.logo}`}
                       style={active == 6 ? {transform: "scale(1.5)"} : {}}/>
                <Image src="/tools/gitkraken.svg" width="50" height="50" alt="" className={`${styles.logo}`}
                       style={active == 7 ? {transform: "scale(1.5)"} : {}}/>
                <Image src="/tools/socketio.svg" width="50" height="50" alt="" className={`${styles.logo}`}
                       style={active == 8 ? {transform: "scale(1.5)"} : {}}/>
                <Image src="/tools/sqlite.svg" width="50" height="50" alt="" className={`${styles.logo}`}
                       style={active == 9 ? {transform: "scale(1.5)"} : {}}/>
                <Image src="/tools/vscode.svg" width="50" height="50" alt="" className={`${styles.logo}`}
                       style={active == 10 ? {transform: "scale(1.5)"} : {}}/>
                <Image src="/tools/openframeworks.svg" width="50" height="50" alt="" className={`${styles.logo}`}
                       style={active == 11 ? {transform: "scale(1.5)"} : {}}/>
                <Image src="/tools/cpp.svg" width="50" height="50" alt="" className={`${styles.logo}`}
                       style={active == 12 ? {transform: "scale(1.5)"} : {}}/>
                <Image src="/tools/javascript.svg" width="50" height="50" alt="" className={`${styles.logo}`}
                       style={active == 13 ? {transform: "scale(1.5)"} : {}}/>
                <Image src="/tools/python.svg" width="50" height="50" alt="" className={`${styles.logo}`}
                       style={active == 14 ? {transform: "scale(1.5)"} : {}}/>
                <Image src="/tools/csharp.svg" width="50" height="50" alt="" className={`${styles.logo}`}
                       style={active == 15 ? {transform: "scale(1.5)"} : {}}/>
            </div>
            <p className={`text-center mt-7 text-2xl ${showLabel ? styles.textShow : styles.textFade}`}>{label}</p>
        </div>
    )
}