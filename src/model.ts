export class Model {

  private hands = [
    '✊',
    '✌',
    '✋',
  ];

    private resultMap: { [key: string]: number } = {
    '勝ち': 0,
    '負け': 1,
    '引き分け': 2,
  };
  
  
  //指定されたindexの手の絵文字を返すメソッド
  public searchHand(playerHandIndex : number) : string{
    //TODO playerIndexで指定の絵文字を返す
    return '👍';
  }
  
  //ランダムな手の絵文字を返すメソッド
  public randomHand(): string {
    //TODO randomで手の絵文字を返す
    return '👍';
  }

  //じゃんけんの結果を返すメソッド
  public returnResult(playerHand:string , cpuHand : string):string{
    // TODO じゃんけんの結果を文字で返す
    return '反則負け';
  }

  //じゃんけん結果のカウントの更新
  public returnResultIndex(result : string) : number{
    // TODO 結果のIndexを返す
    return -1;
  }
}