"use client";
import React, {useState, useEffect} from "react";
// @ts-expect-error library installed
import {useMousePosition} from "react-use-mouse-position";

const circleSize = 230;

export default function Cursor() {
    const {mouseX, mouseY} = useMousePosition();

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    return (
        <div className="fixed -z-30 blur-3xl" style={!isMobile ? {
            top: mouseY - circleSize,
            left: mouseX - circleSize
        } : {
            top: width / 2 - circleSize,
            left: height / 2 - circleSize
        }}>
            <svg height={circleSize * 2} width={circleSize * 2} xmlns="http://www.w3.org/2000/svg">
                <circle r={circleSize} cx={circleSize} cy={circleSize} fill="#1f1f40"/>
            </svg>
        </div>
    );
}