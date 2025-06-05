import { Consts } from "../Consts/consts";
import { gameResult } from "../Consts/gameResult";
import { hands } from "../Consts/hands";

export class Model {


  //ランダムな手の絵文字を返すメソッド
  public randomHand(): hands {
    const randomIndex: number = Math.floor(
      Math.random() * Consts.handImages.length
    );

    return randomIndex as hands;
  }

  //じゃんけんの結果を返すメソッド
  public returnResult(playerHand: hands, cpuHand: hands): gameResult {
    if (playerHand === cpuHand) return gameResult.draw;

    const isWin =
      (playerHand === hands.guu && cpuHand === hands.tyoki) ||
      (playerHand === hands.tyoki && cpuHand === hands.paa) ||
      (playerHand === hands.paa && cpuHand === hands.guu);

    return isWin ? gameResult.win : gameResult.lose;
  }

  //じゃんけん結果のカウントの更新
  public returnResultIndex(result: string): number {
    const resultIndex = Consts.resultTableMap[result];
    return resultIndex;
  }
}
