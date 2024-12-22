"use client";

import React, {useRef, useEffect} from "react"
import {Electron} from "./electron"

import styles from "./atom.module.css"

const elecs: Electron[] = [];
const radius: number[] = [150, 250, 350, 450];

export default function Atom({size}: { size: number }) {
    const center = size / 2;

    const canvasRef = useRef(null);

    useEffect(() => {
        let current = Date.now();

        const canvas = canvasRef.current;
        // @ts-expect-error effect makes canvas guaranteed to be assigned
        const context = canvas.getContext('2d');
        let animationFrameId: number;


        const render = () => {
            const newCurrent = Date.now();
            const delta = newCurrent - current;
            current = newCurrent;

            draw(context, delta, center, center);
            animationFrameId = window.requestAnimationFrame(render);
        }

        const makeElectrons = () => {
            elecs.length = 0;

            elecs.push(new Electron(center, center, radius[0], 0.0005, 0));
            elecs.push(new Electron(center, center, radius[0], 0.0005, Math.PI));

            for (let i = 0; i < 9; i++) {
                elecs.push(new Electron(center, center, radius[1], 0.00025, Math.PI * 2 * i / 9));
            }

            for (let i = 0; i < 18; i++) {
                elecs.push(new Electron(center, center, radius[2], 0.0004, Math.PI * 2 * i / 18));
            }

            for (let i = 0; i < 3; i++) {
                elecs.push(new Electron(center, center, radius[3], 0.0003, Math.PI * 2 * i / 3));
            }
        }

        makeElectrons();

        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [center])


    return (
        <div className="w-full absolute left-0 right-0 overflow-hiddezn" style={{top: -18}}>
            <canvas className={`m-auto w-full ${styles.atom}`} style={{maxWidth: size}} ref={canvasRef} width={size} height={size}></canvas>
        </div>
    );
}

function circle(x: number, y: number, radius: number, ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "white";
    ctx.stroke();
}

function draw(ctx: CanvasRenderingContext2D, delta: number, centerX: number, centerY: number) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    ctx.beginPath();
    ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();

    for (const elec of elecs) {
        elec.draw(ctx, delta);
    }

    circle(centerX, centerY, radius[0], ctx);
    circle(centerX, centerY, radius[1], ctx);
    circle(centerX, centerY, radius[2], ctx);
    circle(centerX, centerY, radius[3], ctx);
}