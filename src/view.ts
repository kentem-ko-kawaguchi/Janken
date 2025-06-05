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

    //
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
      this.cpuHandDisplay,
      this.playerHandDisplay,
      this.resultDisplay,
      this.resultTable
    );

  }

  public ShowPlayerHand(playerHand : string){
    this.playerHandDisplay.textContent = playerHand;
  }

}
