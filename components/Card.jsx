import React from "react";
import { useState } from "react";
import Link from "next/link";

const Card = (props) => {
  const { id, cardTitle, description, cardImage, buttonMessage } = props.data;
  const togglePopup = () => {
    setPopup(!popup);
  };
  return (
    <>
      <div className="shadow-lg rounded-md my-10 bg-transparent dark:shadow-teal-500/40  dark:text-gray-400 overflow-hidden">
        <div className="h-[180px] overflow-hidden">
          <img src={cardImage} className="object" />
        </div>
        <div className="text p-6">
          <h1 className="text-xl py-5 dark:text-gray-300">{cardTitle}</h1>
          <p className="text-sm leading-7 text-neutral-800 dark:text-neutral-400">{description}</p>
          <div className="text-center bg-gradient-to-r from-green-500 to-emerald-500 text-gray-100 rounded-lg hover:to-green-500 hover:from-emerald-500 duration-500 my-10 md:mx-10 px-4 py-2 hover:scale-110">
            <Link href={"/" + id}>{buttonMessage}</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
