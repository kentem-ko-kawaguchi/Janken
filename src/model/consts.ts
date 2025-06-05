import { gameResult } from "./gameResult";

export class Consts {
  //NOTE staticをつけるとnewをしなくても使えるようになる
  public static guu: string = "✊";
  public static tyoki: string = "✌";
  public static paa: string = "✋";

  public static winText: string = "勝ち";
  public static loseText: string = "負け";
  public static drawText: string = "引き分け";

  public resultMap: { [key: string]: number } = {
    winText: gameResult.win,
    loseText: gameResult.lose,
    drawText: gameResult.draw,
  };
}
