import { Controller } from "./controller.js";

export class View {
  private controller: Controller;
  private resultTable: HTMLElement[];
  private handButtons: HTMLElement[];
  private resultDisplay: HTMLElement;
  private cpuHandDisplay: HTMLElement;
  private playerHandDisplay: HTMLElement;
  //test
  private jankenButton: HTMLElement;

  constructor() {
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

    this.controller = new Controller();

    //test
    this.jankenButton = document.getElementById("start")!;
    this.controller.callRandomHand(this.jankenButton);
  }
}
