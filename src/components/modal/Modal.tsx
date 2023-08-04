import { ReactNode } from "react";
import ReactDOM from "react-dom";

type ModalPropsType = {
  children: ReactNode;
};

const Modal = ({ children }: ModalPropsType) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>,
    document.querySelector("#modal-root")!
  );
};

export default Modal;
