import { useState } from "react";
import { createPortal } from "react-dom";
import ModalChild from "./ModalChild";
import { Link } from "react-router-dom";

const ModalPortal = ({ children }) => {
  const target = document.querySelector('.modalContainer');
  return createPortal(children, target);
}

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="modalContainer"></div>
      <button
        className="btn"
        type="button"
        onClick={() => setModalOpen(true)}
        disabled={modalOpen}
      >
        モーダルを表示する
      </button>
      {modalOpen &&
      (
        <ModalPortal>
          <ModalChild handleCloseClick={() => setModalOpen(false)} />
        </ModalPortal>
      )
      }
      <div className="link-css">
        <Link to={`/`}>homeへ</Link>
      </div>
    </div>
  );
}

export default Modal;
