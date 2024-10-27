import React from "react";
import ReactDOM from "react-dom";

const ModalPortal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal-background">{children}</div>,
    document.getElementById("modal") as HTMLElement, // modal-root는 index.html에 있어야 함
  );
};

export default ModalPortal;
