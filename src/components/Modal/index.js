import React from "react";
import ReactDOM from "react-dom";
import { ModalContent, ModalWrapper } from "./Modal.styles";

function Modal({ children, onClose }) {
  return (
    <ModalWrapper>
      <ModalContent>
        <button className="btnModal" onClick={onClose}>
          🅧
        </button>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
}

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById("root")
  );
}
