import { Model } from "./model/model";
import { Consts } from "./Consts/consts";
import { View } from "./view";
import { hands } from "./Consts/hands";

export class Controller {
  private model: Model;
  private view: View;

  constructor(view:View) {
    this.model = new Model();
    this.view = view;
  }

  public janken(
    handButtons: HTMLElement[],
  ) {
    //各ハンドボタンのイベントハンドラーの作成
    handButtons.forEach((handButton, index) => {
      handButton.addEventListener("click", () => {
        const playerHand = index as hands;
        const cpuHand = this.model.randomHand();
        const result = this.model.returnResult(playerHand, cpuHand);

        // Viewにすべて任せる
        this.view.showPlayerHand(playerHand);
        this.view.showCpuHand(cpuHand);
        this.view.showResult(result);
        this.view.updateResultCount(result);
      });
    });
  }

    //指定されたindexの手の絵文字を返すメソッド
  public searchHand(playerHandIndex: number): string {
    const selectHand: string = Consts.handImages[playerHandIndex];

    return selectHand;
  }
}
