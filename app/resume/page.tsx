import React from "react"

export default function Page() {
    return (
        <div className="w-full mb-20">
            <div className="w-full text-center mt-14">
                <p className="text-6xl text-gray-400">
                    Resume
                </p>
            </div>
            <object data="/hnresume.pdf" type="application/pdf" className="m-auto mt-7 w-2/3 h-screen"/>
        </div>
    );
}