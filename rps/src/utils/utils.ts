import { RPSResult, RPSType } from "./types";

export const computeWinner = (
  playerPlay: RPSType,
  housePlay: RPSType
): RPSResult => {
  if (playerPlay === housePlay) {
    return RPSResult.TIE;
  } else if (playerPlay === RPSType.ROCK) {
    return housePlay === RPSType.SCISSORS ? RPSResult.WIN : RPSResult.LOSE;
  } else if (playerPlay === RPSType.PAPER) {
    return housePlay === RPSType.ROCK ? RPSResult.WIN : RPSResult.LOSE;
  } else {
    return housePlay === RPSType.PAPER ? RPSResult.WIN : RPSResult.LOSE;
  }
};

export const setScoreValueLocalStorage = (score: number) => {
  localStorage.setItem("RPSScore", `${score}`);
};

export const getScoreValueLocalStorage = (): number => {
  const scoreStr = localStorage.getItem("RPSScore");
  if (scoreStr) {
    return parseInt(scoreStr);
  }
  return 0;
};
