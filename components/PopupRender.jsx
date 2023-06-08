import React from "react";
import Art from "./popups/Art";
import Class from "./popups/Class";
import Tech from "./popups/Tech";

const PopupRender = ({ id, isOpen, setModalIsOpen }) => {
  return (
    <div className=" bg-[#9ca3af59] dark:bg-[#171717bf] w-screen h-screen fixed m-0 top-0 left-0 flex justify-center p-10">
      <div className="bg-white w-[75%] opacity-100 flex justify-center flex-col px-20 rounded-md">
        {(() => {
          switch (id) {
            case "Art":
              return <Art />;
            case "Class":
              return <Class />;
            case "Tech":
              return <Tech />;
            default:
              return <div>Bleh</div>;
          }
        })()}
        <button className="bg-green-500" onClick={() => setModalIsOpen(!isOpen)}>
          close
        </button>
      </div>
    </div>
  );
};

export default PopupRender;
