import { useState } from "react";
import { createPortal } from "react-dom";
import { Image, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import DOG_IMG_AKITA from "../image/akita.jpg";
import DOG_IMG_NAYAMU from "../image/nayamu.jpg";
import DOG_IMG_TANOSHI from "../image/tanoshi.jpg";

const Popup = () => {
  const [popup, setPopup] = useState(false);
  const [insTag, setInsTag] = useState("");
  const [insMSG, setInsMSG] = useState("");

  const PopupPortal = ({ children }) => {
    const target = document.querySelector(insTag);
    return createPortal(children, target);
  };

  const popupMSG = (cls,message) => {
    setInsTag(cls);
    setInsMSG(message);
    setPopup(true);
  }

  return (
    <div>
      <div className="imgContainer">
        <Image
          boxSize="100px"
          objectFit="cover"
          src={DOG_IMG_AKITA}
          m={2}
          alt="犬　飽きた"
          onMouseOver={() => popupMSG('.akita','飽きたなぁ～')}
          onMouseLeave={() => setPopup(false)}
        />
        <div className="akita"></div>
      </div>
      <div className="imgContainer">
        <Image
          boxSize="100px"
          objectFit="cover"
          src={DOG_IMG_NAYAMU}
          m={2}
          alt="犬　悩む"
          onMouseOver={() => popupMSG('.nayamu','むずかしいなぁ～')}
          onMouseLeave={() => setPopup(false)}
        />
        <div className="nayamu"></div>
      </div>
      <div className="imgContainer">
        <Image
          boxSize="100px"
          objectFit="cover"
          src={DOG_IMG_TANOSHI}
          m={2}
          alt="「たのしいなぁ～」"
          onMouseOver={() => popupMSG('.tanoshi','たのしいなぁ～')}
          onMouseLeave={() => setPopup(false)}
        />
        <div className="tanoshi"></div>
      </div>

      {popup && (
        <PopupPortal>
          <div className="msg">
            <Text>{insMSG}</Text>
          </div>
        </PopupPortal>
      )}
      <div className="link-css">
        <Link to={`/`}>homeへ</Link>
      </div>
    </div>
  );
};

export default Popup;
