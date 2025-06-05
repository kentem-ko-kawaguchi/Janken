import { Consts } from "../Consts/consts";
import { gameResult } from "../Consts/gameResult";
import { hands } from "../Consts/hands";

export class Model {


  //ランダムな手の絵文字を返すメソッド
  public randomHand(): string {
    const randomIndex: number = Math.floor(
      Math.random() * Consts.handImages.length
    );
    const randomHand: string = Consts.handImages[randomIndex];

    return randomHand;
  }

  //じゃんけんの結果を返すメソッド
  public returnResult(playerHand: string, cpuHand: string): gameResult {
    if (playerHand === cpuHand) return gameResult.draw;

    const isWin =
      (playerHand === Consts.guu && cpuHand === Consts.tyoki) ||
      (playerHand === Consts.tyoki && cpuHand === Consts.paa) ||
      (playerHand === Consts.paa && cpuHand === Consts.guu);

    return isWin ? gameResult.win : gameResult.lose;
  }

  //じゃんけん結果のカウントの更新
  public returnResultIndex(result: string): number {
    const resultIndex = Consts.resultTableMap[result];
    return resultIndex;
  }
}
