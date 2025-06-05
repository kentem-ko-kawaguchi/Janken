import { Consts } from "../Consts/consts";

export class Model {
  //指定されたindexの手の絵文字を返すメソッド
  public searchHand(playerHandIndex: number): string {
    const selectHand: string = Consts.handImages[playerHandIndex];

    return selectHand;
  }

  //ランダムな手の絵文字を返すメソッド
  public randomHand(): string {
    const randomIndex: number = Math.floor(Math.random() * Consts.handImages.length);
    const randomHand: string = Consts.handImages[randomIndex];
    
    return randomHand;
  }

  //じゃんけんの結果を返すメソッド
  public returnResult(playerHand: string, cpuHand: string): string {
    if (playerHand === cpuHand) return Consts.drawText;

    const isWin =
      (playerHand === Consts.guu && cpuHand === Consts.tyoki) ||
      (playerHand === Consts.tyoki && cpuHand === Consts.paa) ||
      (playerHand === Consts.paa && cpuHand === Consts.guu);

    return isWin ? Consts.winText : Consts.loseText;
  }

  //じゃんけん結果のカウントの更新
  public returnResultIndex(result: string): number {
    const resultIndex = Consts.resultMap[result];
    return resultIndex;
  }
}
