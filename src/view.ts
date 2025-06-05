import { Consts } from "./Consts/consts";
import { gameResult } from "./Consts/gameResult";
import { hands } from "./Consts/hands";
import { Controller } from "./controller";

export class View {
  private controller: Controller;
  private resultTable: HTMLElement[];
  private handButtons: HTMLElement[];
  private resultDisplay: HTMLElement;
  private cpuHandDisplay: HTMLElement;
  private playerHandDisplay: HTMLElement;

  constructor() {
    //結果表の取得
    this.resultTable = [
      document.getElementById("win")!,
      document.getElementById("lose")!,
      document.getElementById("draw")!,
    ];

    this.resultDisplay = document.getElementById("result")!;
    this.cpuHandDisplay = document.getElementById("cpuHand")!;
    this.playerHandDisplay = document.getElementById("playerHand")!;
    this.handButtons! = [
      document.getElementById("guu")!,
      document.getElementById("tyoki")!,
      document.getElementById("paa")!,
    ];

    this.controller = new Controller(this);

    this.controller.janken(
      this.handButtons,
    );

  }

  public getHandButtons(): HTMLElement[] {
    return this.handButtons;
  }

  public showPlayerHand(hand: hands): void {
    this.playerHandDisplay.textContent = Consts.handImages[hand];
  }

  public showCpuHand(hand: hands): void {
    this.cpuHandDisplay.textContent = Consts.handImages[hand];
  }

  public showResult(result: gameResult): void {
    this.resultDisplay.textContent = Consts.resultMap[result];
  }

  public updateResultCount(result: gameResult): void {
    // 勝ち=0, 負け=1, 引き分け=2 の順で要素が並んでいる想定
    const element = this.resultTable[result];
    const count = parseInt(element.textContent || "0", 10);
    element.textContent = (count + 1).toString();
  }
}
