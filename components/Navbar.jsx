import React from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Navbar = ({darkMode, setDarkMode}) => {
    
  return (
    <div>
        <nav className=" py-10 mb-12 flex justify-between">
            <h1 className="text-xl dark:text-gray-300 dark:duration-300">wahwin</h1>

            <ul className="flex items-center">
              <li className="cursor-pointer text-xl">
                {darkMode ? (
                  <BsFillSunFill onClick={() => setDarkMode(!darkMode)} className="text-[#e3d184] duration-300" />
                ) : (
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" duration-300" />
                )}
              </li>
              <li>
                <a href="/Hoa_Nguyen_Resume.pdf" className="bg-gradient-to-r from-green-500 to-emerald-500 text-gray-100 px-4 py-2 rounded-md ml-8" target="_blank">
                  resume
                </a>
              </li>
            </ul>
          </nav>
    </div>
  )
}

export default Navbar