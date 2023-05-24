import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiAdobephotoshop, SiKotlin } from "react-icons/si";
import { CgNotes } from "react-icons/cg";
import { DiJava, DiPython, DiReact } from "react-icons/di";

import Image from "next/image";
import profilepic from "../public/IMG_4171.JPG";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hoa Nguyen Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className="text-xl">wahwin</h1>

            <ul className="flex items-center">
              <li className="cursor-pointer text-xl">
                <BsFillMoonStarsFill />
              </li>
              <li>
                <a href="/Hoa_Nguyen_Resume.pdf" className="bg-gradient-to-r from-green-500 to-emerald-500 text-gray-100 px-4 py-2 rounded-md ml-8" target="_blank">
                  resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-green-600 font-medium">hoa nguyen</h2>
            <h3 className="text-2xl py-2">life-time student and data scientist.</h3>
            <p className="text-md py-5 leading-6 text-neutral-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-amber-800">
            <a href="https://github.com/HooWahWin" target="_blank">
              <AiFillGithub />
            </a>
            <a href="https://www.instagram.com/hoanguyen_art/" target="_blank">
              <AiFillInstagram />
            </a>
            <a href="https://www.linkedin.com/in/hoa-nguyen-041434227/" target="_blank">
              <AiFillLinkedin />
            </a>
          </div>

          <div className=" relative rounded-full w-80 h-80 object-cover mx-auto mt-20 overflow-hidden">
            <Image src={profilepic} layout="fill" objectFit="cover" />
          </div>
        </section>
        {/* second page */}

        <section>
          <div>
            <h3 className="text-3xl pt-10">services i offer</h3>
            <p className="text-md py-5 leading-6 text-neutral-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <div>
            <div></div>
          </div>
        </section>
      </main>
    </div>
  );
}
