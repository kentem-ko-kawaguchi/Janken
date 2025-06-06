// View.ts
import { Controller } from "./controller";
import { Consts } from "./Consts/consts";

export class View {
  constructor() {
    // DOM要素の取得
    this.init();
  }

  private handButtons!: HTMLElement[];
  private cpuHandDisplay!: HTMLElement;
  private playerHandDisplay!: HTMLElement;
  private resultDisplay!: HTMLElement;
  private resultTable!: HTMLElement[];

  private init() {
    this.handButtons = [
      document.getElementById("guu")!,
      document.getElementById("tyoki")!,
      document.getElementById("paa")!,
    ];
    this.cpuHandDisplay = document.getElementById("cpuHand")!;
    this.playerHandDisplay = document.getElementById("playerHand")!;
    this.resultDisplay = document.getElementById("result")!;
    this.resultTable = [
      document.getElementById("win")!,
      document.getElementById("lose")!,
      document.getElementById("draw")!,
    ];
  }

  public getHandButtons() {
    return this.handButtons;
  }

  //画面情報の更新(プレイヤーハンドの更新)
  public UpdatePlayerHand(playerHandIndex: number) {
    this.playerHandDisplay.textContent = Consts.handImages[playerHandIndex];
  }

  //画面情報の更新(CPUハンドの更新)
  public UpdateCpuHand(cpuHandIndex: number) {
    this.cpuHandDisplay.textContent = Consts.handImages[cpuHandIndex];
  }

  //画面情報の更新(じゃんけん結果の更新)
  public UpdateJankenResult(resultIndex: number): void {
    this.resultDisplay.textContent = Consts.resultMap[resultIndex];
  }

  //画面情報の更新(結果テーブルの更新)
  public UpdateJankenResultTable(resultIndex: number): void {
    let selectResultCount = this.resultTable[resultIndex].textContent!;
    const newResultCount: number = parseInt(selectResultCount) + 1;
    this.resultTable[resultIndex].textContent = newResultCount.toString();
  }
}
