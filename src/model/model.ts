import { gameResultIndex } from "../Consts/gameResult";
import { handsIndex } from "../Consts/hands";

export class Model {
  
  //ランダムな手の絵文字を返すメソッド
  public randomHandIndex(): number {
    const randomHandIndex: number = Math.floor(
      Math.random() *
        Object.values(handsIndex).filter((value) => typeof value === "number")
          .length
    );

    return randomHandIndex;
  }

  //じゃんけんの結果を返すメソッド
  public returnResult(playerHandIndex: number, cpuHandIndex: number): number {
    if (playerHandIndex === cpuHandIndex) return gameResultIndex.draw;

    const isWin =
      (playerHandIndex === handsIndex.guu &&
        cpuHandIndex === handsIndex.tyoki) ||
      (playerHandIndex === handsIndex.tyoki &&
        cpuHandIndex === handsIndex.paa) ||
      (playerHandIndex === handsIndex.paa && cpuHandIndex === handsIndex.guu);

    return isWin ? gameResultIndex.win : gameResultIndex.lose;
  }
}
