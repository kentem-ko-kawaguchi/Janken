export class Model {
    constructor() {
        this.hands = [
            '✊',
            '✌',
            '✋',
        ];
        this.resultMap = {
            '勝ち': 0,
            '負け': 1,
            '引き分け': 2,
        };
    }
    //指定されたindexの手の絵文字を返すメソッド
    searchHand(playerHandIndex) {
        //TODO playerIndexで指定の絵文字を返す
        return '👍';
    }
    //ランダムな手の絵文字を返すメソッド
    randomHand() {
        //TODO randomで手の絵文字を返す
        return '👍';
    }
    //じゃんけんの結果を返すメソッド
    returnResult(playerHand, cpuHand) {
        // TODO じゃんけんの結果を文字で返す
        return '反則負け';
    }
    //じゃんけん結果のカウントの更新
    returnResultIndex(result) {
        // TODO 結果のIndexを返す
        return -1;
    }
}
