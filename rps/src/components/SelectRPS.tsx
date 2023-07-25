import React from "react";
import rockImage from "../../public/images/icon-rock.svg";
import paperImage from "../../public/images/icon-paper.svg";
import scissorsImage from "../../public/images/icon-scissors.svg";
import Triangle from "../../public/images/bg-triangle.svg";
import Image from "next/image";
import selectorStyles from "./SelectRPS.module.css";
import RPSIcon from "./RPSIcon";
import { RPSType } from "@/utils/types";

const SelectRPS: React.FC = () => {
  return (
    <div className={selectorStyles.selectorContainer}>
      <div className={selectorStyles.selectorContainer2}>
        <div className={selectorStyles.selectorFirstRow}>
          <RPSIcon type={RPSType.ROCK}></RPSIcon>
          <RPSIcon type={RPSType.PAPER}></RPSIcon>
        </div>
        <Image
          width={Triangle.width}
          height={Triangle.height}
          src={Triangle.src}
          alt="background triangle"
        ></Image>
        <div className={selectorStyles.selectorLastRow}>
          <RPSIcon type={RPSType.SCISSORS}></RPSIcon>
        </div>
      </div>
    </div>
  );
};

export default SelectRPS;
