import Image from "next/image";

import Cards from "./components/cards"
import Logos from "./components/toolsLogos"
import Atom from "./components/atom"
import Experiences from "./components/experiences"

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full text-center mb-28">
          <p className="text-6xl text-gray-400">
            Hodaka Nakamura
          </p>
        </div>

        <Atom width={1000} height={1000}/>

        <Cards/>

        <div className="w-full text-center mt-24">
          <p className="text-4xl text-gray-400">
            My Toolbox
          </p>
        </div>

        <Logos/>

        <div className="w-full text-center mt-16">
          <p className="text-4xl text-gray-400">
            Experience
          </p>
        </div>

        <Experiences/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-400">
        <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
