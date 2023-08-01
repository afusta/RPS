import React from "react";
import style from "./PlayAgainButton.module.css";

interface Props {
  handlePlayAgain: () => void;
  result: string;
}

const PlayAgainButton: React.FC<Props> = ({ result, handlePlayAgain }) => {
  return (
    <div className={style.container}>
      <p className={style.resultParagraph}>{result}</p>
      <button onClick={handlePlayAgain} className={style.button}>
        PLAY AGAIN
      </button>
    </div>
  );
};

export default PlayAgainButton;
