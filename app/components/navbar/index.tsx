import React from "react";
import styles from "./index.module.css"

const Navbar = ({ children }: Readonly<{children: React.ReactNode}>) => {
    return (
        <>
            <div className={`w-full h-20 sticky top-0 ${styles.navbargradient}`}>
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full text-black text-xl">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;