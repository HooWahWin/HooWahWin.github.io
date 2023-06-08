import React from "react";
import { SiAdobephotoshop, SiKotlin } from "react-icons/si";
import { BsCodeSlash } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { DiJava, DiPython, DiReact } from "react-icons/di";
import Card from "./Card";
import { CARD_DETAILS } from "./CardDetails";

const Cards = () => {
  return (
    <section>
      <div className="grid min-[1600px]:grid-cols-3 md:gap-14 ">
        {CARD_DETAILS.map((card) => {
          return <Card data={card} />;
        })}
      </div>
    </section>
  );
};

export default Cards;
