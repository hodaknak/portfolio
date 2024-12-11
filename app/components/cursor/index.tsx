"use client";
import React from "react";
// @ts-expect-error library installed
import { useMousePosition } from "react-use-mouse-position";

const circleSize = 230;

export default function Cursor() {
    const { mouseX, mouseY } = useMousePosition();

    return (
        <div className="fixed -z-30 blur-3xl" style={{top: mouseY - circleSize, left: mouseX - circleSize}}>
            <svg height={circleSize * 2} width={circleSize * 2} xmlns="http://www.w3.org/2000/svg">
                <circle r={circleSize} cx={circleSize} cy={circleSize} fill="#1f1f40"/>
            </svg>
        </div>
    );
}