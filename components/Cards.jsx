import React from 'react'
import { SiAdobephotoshop, SiKotlin } from "react-icons/si";
import { BsCodeSlash } from 'react-icons/bs';
import { CgNotes } from 'react-icons/cg';

const Cards = () => {
  return (
    <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-300 dark:duration-300">services i offer</h3>
            <p className="text-md py-5 leading-6 text-neutral-800 dark:text-neutral-400 dark:duration-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-50 dark:bg-zinc-300 duration-300">
              <span className="flex justify-center">
                <CgNotes className="text-[8rem] text-green-600" />
              </span>
              <h3 className="text-lg font-medium pt-8 pb-2">classes currently taking</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className=" py-3 rounded-lg shadow-md duration-300 bg-gray-200 hover:bg-gray-100 dark:bg-gray-300 dark:hover:bg-gray-400 cursor-pointer">csc 3102: advanced data structures</div>
                <div className=" py-3 rounded-lg shadow-md duration-300 bg-gray-200 hover:bg-gray-100 dark:bg-gray-300 dark:hover:bg-gray-400 cursor-pointer">csc 2259: descrete structures</div>
                <div className=" py-3 rounded-lg shadow-md duration-300 bg-gray-200 hover:bg-gray-100 dark:bg-gray-300 dark:hover:bg-gray-400 cursor-pointer">
                  math 2090: differential equations & linear algebra
                </div>
                <div className=" py-3 rounded-lg shadow-md duration-300 bg-gray-200 hover:bg-gray-100 dark:bg-gray-300 dark:hover:bg-gray-400 cursor-pointer">biol 1002: general biology ii</div>
                <div className=" py-3 rounded-lg shadow-md duration-300 bg-gray-200 hover:bg-gray-100 dark:bg-gray-300 dark:hover:bg-gray-400 cursor-pointer">biol 1005: general biology lab</div>
              </div>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10  bg-gray-50 dark:bg-zinc-300 duration-300">
              <span className="flex justify-center">
                <SiAdobephotoshop className="text-[8rem] text-sky-950" />
              </span>
              <h3 className="text-lg font-medium pt-8 pb-2">passion for art</h3>
              <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <h4 className="py-4 text-green-500">tools i use to create digital art:</h4>
              <p className="text-neutral-800 py-1">digital drawing tablets</p>
              <p className="text-neutral-800 py-1">adobe photoshop</p>
              <p className="text-neutral-800 py-1">iPad and apple pencil</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-50 dark:bg-zinc-300 duration-300">
              <span className="flex justify-center">
                <BsCodeSlash className="text-[8rem] text-teal-600" />
              </span>
              <h3 className="text-lg font-medium pt-8 pb-2">technologies known</h3>
              <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </div>
        </section>
  )
}

export default Cards