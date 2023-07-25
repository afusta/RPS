import React from "react";
import RockIcon from "../../public/images/icon-rock.svg";
import PaperIcon from "../../public/images/icon-paper.svg";
import ScissorsIcon from "../../public/images/icon-scissors.svg";
import { RPSType } from "@/utils/types";
import style from "./RPSIcon.module.css";
import Image from "next/image";

interface Props {
  type: RPSType;
}

const RPSIcon: React.FC<Props> = ({ type }) => {
  let Icon = RockIcon;
  let outlineStyle = style.rockOutline;

  switch (type) {
    case RPSType.PAPER:
      Icon = PaperIcon;
      outlineStyle = style.paperOutLine;
      break;
    case RPSType.SCISSORS:
      Icon = ScissorsIcon;
      outlineStyle = style.scissorsOutLine;
      break;
    default:
      Icon = RockIcon;
      outlineStyle = style.rockOutLine;
      break;
  }

  return (
    <div className={outlineStyle}>
      <div className={style.iconBackground}>
        <Image src={Icon} alt="rockIcon"></Image>
      </div>
    </div>
  );
};
export default RPSIcon;
