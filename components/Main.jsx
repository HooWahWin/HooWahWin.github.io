"use client";

import React from 'react'
import Head from "next/head";
import { DiJava, DiPython, DiReact } from "react-icons/di";
import Hero from "./Hero";
import Cards from "./Cards";
import Navbar from './Navbar';

const Main = ({darkMode, setDarkMode}) => {
  return (
    <div className={darkMode ? "dark" : "" + "pb-40"}>
      <Head>
        <title>Hoa Nguyen Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-60 dark:bg-neutral-950 duration-300">
        <section className="min-h-screen">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero />
        </section>
        {/* second page */}

        <Cards />
      </main>
    </div>
  )
}

export default Main