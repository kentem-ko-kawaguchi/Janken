import { Model } from "./model/model";
import { Consts } from "./Consts/consts";
import { View } from "./view";

export class Controller {
  private model: Model;
  private view: View;

  constructor(view:View) {
    this.model = new Model();
    this.view = new View();
  }

  public janken(
    handButtons: HTMLElement[],
    cpuHandDisplay: HTMLElement,
    playerHandDisplay: HTMLElement,
    resultDisplay: HTMLElement,
    resultTable: HTMLElement[]
  ) {
    //各ハンドボタンのイベントハンドラーの作成
    handButtons.forEach((handButton, index) => {
      handButton.addEventListener("click", () => {
        // 自分の手の表示
        const playerHand = this.searchHand(index);
        this.view.ShowPlayerHand(playerHand);

        // randomの相手の手の表示
        const cpuHand = this.model.randomHand();
        cpuHandDisplay.textContent = cpuHand;

        // 結果の更新
        const result = this.model.returnResult(playerHand, cpuHand);
        const resultText = Consts.resultMap[result];
        resultDisplay.textContent = resultText;

        // 結果表の更新
        const resultIndex = this.model.returnResultIndex(resultText);
        const resultId = resultTable[resultIndex];
        const resultCount = parseInt(resultId.textContent!);
        resultId.textContent = (resultCount + 1).toString();
      });
    });
  }

    //指定されたindexの手の絵文字を返すメソッド
  public searchHand(playerHandIndex: number): string {
    const selectHand: string = Consts.handImages[playerHandIndex];

    return selectHand;
  }
}
