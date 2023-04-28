import { useState } from "react";
import { createPortal } from "react-dom";

import ToastChild from "./ToastChild";
import { Link } from "react-router-dom";

const ToastPortal = ({ children }) => {
  const target = document.querySelector(".toastContainer");
  return createPortal(children, target);
};

const Toast = () => {
  const [toastOpen, setToastOpen] = useState(false);
  return (
    <div>
      <div className="toastContainer"></div>

      <button
        className="btn"
        type="button"
        onClick={() => setToastOpen(true)}
        disabled={toastOpen}
      >
        トーストを表示する
      </button>

      {toastOpen && (
        <ToastPortal>
          <ToastChild
            visible={toastOpen}
            handleCloseClick={() => setToastOpen(false)}
          />
        </ToastPortal>
      )}
      <div className="link-css">
        <Link to={`/`}>homeへ</Link>
      </div>
    </div>
  );
}

export default Toast;
