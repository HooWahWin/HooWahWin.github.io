import React from 'react'
import { SiAdobephotoshop, SiKotlin } from "react-icons/si";
import { BsCodeSlash } from 'react-icons/bs';
import { CgNotes } from 'react-icons/cg';
import { DiJava, DiPython, DiReact } from "react-icons/di";

const Cards = () => {
  return (
    <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-300 dark:duration-300">services i offer</h3>
            <p className="text-md py-5 leading-6 text-neutral-800 dark:text-neutral-400 dark:duration-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

          <div className="grid min-[1600px]:grid-cols-3 gap-10 ease-in-out">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-50 dark:bg-zinc-300 duration-300 dark:shadow-teal-500/40">
              <span className="flex justify-center">
                <CgNotes className="text-[8rem] text-green-600" />
              </span>
              <h3 className="text-lg font-medium pt-8 pb-7 dark:text-neutral-800">classes currently taking</h3>
              <div className="grid grid-cols-1 gap-8">
                <div className=" py-4 rounded-lg ease-in-out hover:scale-110 shadow-green-300 dark:shadow-green-600 shadow-md duration-300 bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-green-400 dark:to-emerald-400 dark:text-gray-900">csc 3102: advanced data structures</div>
                <div className=" py-4 rounded-lg ease-in-out hover:scale-110 shadow-green-300 dark:shadow-green-600 shadow-md duration-300 bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-green-400 dark:to-emerald-400 dark:text-gray-900">csc 2259: discrete structures</div>
                <div className=" py-4 rounded-lg ease-in-out hover:scale-110 shadow-green-300 dark:shadow-green-600 shadow-md duration-300 bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-green-400 dark:to-emerald-400 dark:text-gray-900" >
                  math 2090: differential equations & linear algebra
                </div>
                <div className=" py-4 rounded-lg ease-in-out hover:scale-110 shadow-green-300 dark:shadow-green-600 shadow-md duration-300 bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-green-400 dark:to-emerald-400 dark:text-gray-900">biol 1002: general biology ii</div>
                <div className=" py-4 rounded-lg ease-in-out hover:scale-110 shadow-green-300 dark:shadow-green-600 shadow-md duration-300 bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-green-400 dark:to-emerald-400 dark:text-gray-900">biol 1005: general biology lab</div>
              </div>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10  bg-gray-50 dark:bg-zinc-300 duration-300 dark:shadow-teal-500/40">
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

            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-50 dark:bg-zinc-300 duration-300 dark:shadow-teal-500/40">
              <span className="flex justify-center">
                <BsCodeSlash className="text-[8rem] text-teal-600" />
              </span>
              <h3 className="text-lg font-medium pt-8 pb-2">technologies known</h3>
              <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <div className='grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-1  pt-10 gap-4 text-center'>
                <div className=' text-center mx-auto py-4 px-6 shadow-lg ease-in-out shadow-gray-700/30 rounded-lg hover:scale-110 duration-300'><DiJava className='text-8xl'/>Java</div>
                <div className='text-center mx-auto py-4 px-6 shadow-lg ease-in-out shadow-gray-700/30 rounded-lg hover:scale-110 duration-300'><DiPython className='text-8xl'/>Python</div>
                <div className='text-center mx-auto py-4 px-6 shadow-lg ease-in-out shadow-gray-700/30 rounded-lg hover:scale-110 duration-300'><DiReact className='text-8xl'/>React</div>
                <div className='text-center mx-auto py-4 px-6 shadow-lg ease-in-out shadow-gray-700/30 rounded-lg hover:scale-110 duration-300'><SiKotlin className='text-8xl'/>Kotlin</div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Cards