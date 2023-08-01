import React, { useCallback } from "react";
import Triangle from "../../public/images/bg-triangle.svg";
import Image from "next/image";
import selectorStyles from "./SelectRPS.module.css";
import RPSIcon from "./RPSIcon";
import { RPSType } from "@/utils/types";

interface Props {
  handlePlay: (type: RPSType) => void;
}

const SelectRPS: React.FC<Props> = ({ handlePlay }) => {
  const handlePlayRock = useCallback(() => {
    handlePlay(RPSType.ROCK);
  }, [handlePlay]);

  const handlePlayPaper = useCallback(() => {
    handlePlay(RPSType.PAPER);
  }, [handlePlay]);

  const handlePlayScissor = useCallback(() => {
    handlePlay(RPSType.SCISSORS);
  }, [handlePlay]);
  return (
    <div className={selectorStyles.selectorContainer}>
      <div className={selectorStyles.selectorContainer2}>
        <div className={selectorStyles.selectorFirstRow}>
          <div className={selectorStyles.RPSIconBox} onClick={handlePlayRock}>
            <RPSIcon type={RPSType.ROCK}></RPSIcon>
          </div>
          <div className={selectorStyles.RPSIconBox} onClick={handlePlayPaper}>
            <RPSIcon type={RPSType.PAPER}></RPSIcon>
          </div>
        </div>
        <Image
          width={Triangle.width}
          height={Triangle.height}
          src={Triangle.src}
          alt="background triangle"
        ></Image>
        <div
          onClick={handlePlayScissor}
          className={`${selectorStyles.selectorLastRow} ${selectorStyles.RPSIconBox}`}
        >
          <RPSIcon type={RPSType.SCISSORS}></RPSIcon>
        </div>
      </div>
    </div>
  );
};

export default SelectRPS;
