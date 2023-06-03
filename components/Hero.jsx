import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <div>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2  text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 font-medium md:text-6xl">hoa nguyen</h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-300 dark:duration-300">life-time student and programmer.</h3>
        <p className="text-md py-10 leading-7 text-neutral-800 md:text-xl max-w-xl mx-auto dark:text-neutral-400 dark:duration-300">
          Hello! I am currently a sophomore at Louisiana State University majoring in computer science with a concentration in data science and analytics. Although data science is my concentration, I
          am also interested in web development and software engineering.
        </p>
      </div>

      <div className="text-7xl flex justify-center gap-16 py-3 text-teal-700">
        <a href="https://github.com/HooWahWin" target="_blank" className="hover:text-green-600 duration-300 hover:scale-110">
          <AiFillGithub />
        </a>
        <a href="https://www.instagram.com/hoanguyen_art/" target="_blank" className="hover:text-green-600 duration-300 hover:scale-110">
          <AiFillInstagram />
        </a>
        <a href="https://www.linkedin.com/in/hoa-nguyen-041434227/" target="_blank" className="hover:text-green-600 duration-300 hover:scale-110">
          <AiFillLinkedin />
        </a>
      </div>

      <img src="../IMG_4171.JPG" alt="profile pic" className="w-80 h-80 mx-auto my-20 rounded-full object-cover md:h-96 md:w-96" />
    </div>
  );
};

export default Hero;
