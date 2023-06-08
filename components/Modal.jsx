import React from "react";
import PopupRender from "./PopupRender";

const Modal = ({ isOpen, setModalIsOpen, id }) => {
  return isOpen ? <PopupRender id={id} isOpen={isOpen} setModalIsOpen={setModalIsOpen} /> : "";
};

export default Modal;
