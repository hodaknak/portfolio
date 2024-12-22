import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navbar";
import Icon from "@/components/icon";

import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Hodaka Nakamura",
  description: "Hodaka Nakamura Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full">
      <body className="antialiased">
      <Navbar>
        <div>
          <Link href="/">
            <Icon width={60} height={60}/>
          </Link>
        </div>
        <ul className="flex gap-x-6 text-gray-200">
          <li>
            <Link href="/" className="hidden md:block">
              <p className="link-underline">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <p className="link-underline">Resume</p>
            </Link>
          </li>
        </ul>
      </Navbar>
      {children}
      </body>
    </html>
  );
}
