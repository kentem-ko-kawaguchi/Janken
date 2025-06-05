import { Model } from "./model";
export class Controller {
    constructor() {
        this.model = new Model();
    }
    janken(handButtons, cpuHandDisplay, playerHandDisplay, resultDisplay, resultTable) {
        //各ハンドボタンのイベントハンドラーの作成
        handButtons.forEach((handButton, index) => {
            handButton.addEventListener("click", () => {
                // 自分の手の表示
                const playerHand = this.model.searchHand(index);
                playerHandDisplay.textContent = playerHand;
                // randomの相手の手の表示
                const cpuHand = this.model.randomHand();
                cpuHandDisplay.textContent = cpuHand;
                // 結果の更新
                const result = this.model.returnResult(playerHand, cpuHand);
                resultDisplay.textContent = result;
                // 結果表の更新
                const resultIndex = this.model.returnResultIndex(result);
                const resultId = resultTable[resultIndex];
                const resultCount = parseInt(resultId.textContent);
                resultId.textContent = (resultCount + 1).toString();
            });
        });
    }
    // test
    callRandomHand(element) {
        element.addEventListener("click", () => {
            element.textContent = this.model.randomHand();
        });
    }
}
