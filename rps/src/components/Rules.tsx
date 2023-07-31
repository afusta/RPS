import React from "react";
import style from "./Rules.module.css";
import Image from "next/image";

import rulesDesktop from "../../public/images/image-rules.svg";
import iconClose from "../../public/images/icon-close.svg";
interface Props {
  handleClose: () => void;
}

const Rules: React.FC<Props> = ({ handleClose }) => {
  return (
    <div className={style.modalBackground} onClick={handleClose}>
      <div className={style.modalWindowBackground}>
        <div className={style.modalUpperBox}>
          <p>RULES</p>
          <Image
            src={iconClose}
            style={{ cursor: "pointer" }}
            alt="close icon"
          ></Image>
        </div>
        <Image src={rulesDesktop} alt="rules"></Image>
      </div>
    </div>
  );
};

export default Rules;
