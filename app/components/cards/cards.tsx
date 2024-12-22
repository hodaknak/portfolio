import React from "react";
import Image from "next/image";

import styles from "./cards.module.css";

export default function Cards() {
    return (
        <>
            <div className="w-full flex flex-wrap gap-4 items-center justify-center flex-col sm:flex-row">
                <div className={`${styles.card} shadow hover:bg-gray-700`}>
                    <div className="block p-6">
                        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-200">Education</p>
                        <div className="flex flex-row items-start gap-6">
                            <Image src="/education/uci.png" className="mt-1.5" width="40" height="40" alt=""/>
                            <div className="font-normal">
                                <p>University of California, Irvine</p>
                                <p className="text-sm">Irvine, CA</p>
                                <p className="text-sm">B.S. Computer Science</p>
                                <p className="text-sm">Expected June 2028</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-start gap-6 mt-2">
                            <Image src="/education/ibwhs.png" className="mt-1.5" width="40" height="40" alt=""/>
                            <div className="font-normal">
                                <p>Ida B. Wells-Barnett High School</p>
                                <p className="text-sm">Portland, OR</p>
                                <p className="text-sm">High School Diploma 4.21 GPA</p>
                                <p className="text-sm">Graduated June 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.card} shadow hover:bg-gray-700`}>
                    <div className="block p-6">
                        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-200">About Me</p>
                        <div className="font-normal">
                            <p>
                                Hello! My name is Hodaka Nakamura and I am a first-year Computer Science major at UCI. I
                                hold a strong
                                passion for programming, and have deeply explored many areas including machine learning,
                                game
                                development, and web applications, using tools like Tensorflow, UE4, and React.
                            </p>
                            <br/>
                            <p>
                                Thank you for stopping by!
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.card} shadow hover:bg-gray-700`}>
                    <div className="block p-6">
                        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-200 ">Connect With Me</p>
                        <div className="flex flex-row items-start gap-6">
                            <a target="_blank" href="https://www.instagram.com/hodaka.nakamura">
                                <Image src="/socials/instagram.svg" className="mt-1.5" width="40" height="40" alt=""/>
                            </a>
                            <div className="font-normal">
                                <p className="pt-3.5">@hodaka.nakamura</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-start gap-6">
                            <a target="_blank" href="https://github.com/hodaknak">
                                <Image src="/socials/github.svg" className="mt-1.5" width="40" height="40" alt=""/>
                            </a>
                            <div className="font-normal">
                                <p className="pt-3.5">@hodaknak</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-start gap-6">
                            <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=hodakan@uci.edu">
                                <Image src="/socials/mail.svg" className="mt-1.5" width="40" height="40" alt=""/>
                            </a>
                            <div className="font-normal">
                                <p className="pt-3.5">hodakan@uci.edu</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-start gap-6">
                            <a target="_blank" href="https://www.linkedin.com/in/hodaka-nakamura-17193a32b">
                                <Image src="/socials/linkedin.svg" className="mt-1.5" width="40" height="40" alt=""/>
                            </a>
                            <div className="font-normal">
                                <p className="pt-5">@Hodaka Nakamura</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}