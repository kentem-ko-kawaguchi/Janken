import { gameResultIndex } from "./gameResult";

export class Consts {
  // 絵文字定義
  public static guu: string = "✊";
  public static tyoki: string = "✌";
  public static paa: string = "✋";

  // 絵文字配列（静的参照を使用）
  public static handImages: string[] = [
    Consts.guu,
    Consts.tyoki,
    Consts.paa,
  ];

  // 結果テキスト
  public static winText: string = "勝ち";
  public static loseText: string = "負け";
  public static drawText: string = "引き分け";

  public static resultMap: { [key: number]: string } = {
  [gameResultIndex.win]: Consts.winText,
  [gameResultIndex.lose]: Consts.loseText,
  [gameResultIndex.draw]: Consts.drawText,
};
}
