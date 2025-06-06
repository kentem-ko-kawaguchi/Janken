// Controller.ts
import { Model } from "./model/model";
import { View } from "./view";

export class Controller {
  private model: Model;
  private view: View;

  constructor() {
    this.model = new Model();
    this.view = new View();
  }

  public janken() {
    const handButtons = this.view.getHandButtons();

    handButtons.forEach((handButton, playerHandIndex) => {
      handButton.addEventListener("click", () => {
        //プレイヤーハンドの更新機能呼び出し
        this.view.UpdatePlayerHand(playerHandIndex);
        
        //CPUハンドの更新機能呼び出し
        const cpuHandIndex = this.model.randomHandIndex();
        this.view.UpdateCpuHand(cpuHandIndex)

        const resultIndex = this.model.returnResult(playerHandIndex, cpuHandIndex);

        //勝敗結果の更新機能呼び出し
        this.view.UpdateJankenResult(resultIndex);

        //結果テーブル更新機能呼び出し
        this.view.UpdateJankenResultTable(resultIndex);
      });
    });
  }
}
