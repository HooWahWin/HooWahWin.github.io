"use client";
import React from "react";
import Head from "next/head";
import Hero from "/components/Hero";
import Cards from "/components/Cards";
import Navbar from "/components/Navbar";
import Overview from "/components/Overview";
import "./globals.css";
import { ThemeContext } from "./layout";
import { useContext } from "react";

export default function Home() {
  const user = useContext(ThemeContext);
  return (
    <div className={user.darkMode ? "dark" : "" + "pb-40"}>
      <Head>
        <title>Hoa Nguyen Portfolio</title>
        <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png" />
        <link rel="icon" href="../favicon.ico" />
        <link rel="manifest" href="../site.webmanifest" />
        <link rel="mask-icon" href="../safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-60 dark:bg-neutral-950 duration-300">
        <section className="min-h-screen">
          <Navbar darkMode={user.darkMode} setDarkMode={user.setDarkMode} />
          <Hero />
        </section>
        <Overview />
        <Cards />
      </main>
    </div>
  );
}
