import React from "react"

import styles from "./index.module.css";

export default function ExternalLink({className, color, width, height, link, children}: {
    className?: string,
    color: string,
    width: number,
    height: number,
    link: string,
    children: Readonly<React.ReactNode>
}) {
    return (
        <div className={`flex flex-row justify-start items-center w-fit ${styles.externalLink}`}>
            <div className={className}>
                <a href={link} target="_blank">
                    {children}
                </a>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}
                 viewBox="0 0 20 20" fill={color}>
                <path fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"/>
            </svg>
        </div>
    );
}