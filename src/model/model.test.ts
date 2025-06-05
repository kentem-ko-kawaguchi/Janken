import { Model } from "./model";
import { Consts} from "../Consts/consts";
import { gameResult } from "../Consts/gameResult";
import { hands } from "../Consts/hands";

describe("Janken", () => {
  const model = new Model();

  // ---------------------------
  // searchHandのテスト
  // ---------------------------
  describe("searchHand - プレイヤーの手を取得するメソッド", () => {
    test("インデックス0で ✊ を返す", () => {
      expect(model.searchHand(hands.guu)).toBe(Consts.guu);
    });
    test("インデックス1で ✌ を返す", () => {
      expect(model.searchHand(hands.tyoki)).toBe(Consts.tyoki);
    });
    test("インデックス2で ✋ を返す", () => {
      expect(model.searchHand(hands.paa)).toBe(Consts.paa);
    });
  });

  // ---------------------------
  // randomHandのテスト
  // ---------------------------
  describe("randomHand - CPUの手をランダムで取得するメソッド", () => {
    afterEach(() => {
      jest.restoreAllMocks(); // モックを元に戻す
    });

    test("Math.random() が 0 を返すとき、✊ を返す", () => {
      jest.spyOn(Math, "random").mockReturnValue(0.0); // 0 * 3 = 0
      expect(model.randomHand()).toBe(Consts.guu);
    });

    test("Math.random() が 0.5 を返すとき、✌ を返す", () => {
      jest.spyOn(Math, "random").mockReturnValue(0.5); // 0.5 * 3 = 1.5 -> 1
      expect(model.randomHand()).toBe(Consts.tyoki);
    });

    test("Math.random() が 0.9 を返すとき、✋ を返す", () => {
      jest.spyOn(Math, "random").mockReturnValue(0.9); // 0.9 * 3 = 2.7 -> 2
      expect(model.randomHand()).toBe(Consts.paa);
    });
  });

  // ---------------------------
  // returnResultのテスト
  // ---------------------------
  describe("returnResult - じゃんけんの勝敗を返すメソッド", () => {
    describe("プレイヤーの手が ✊ の場合", () => {
      test("CPUが ✊ → 引き分け", () => {
        expect(model.returnResult(Consts.guu, Consts.guu)).toBe("引き分け");
      });
      test("CPUが ✌ → 勝ち", () => {
        expect(model.returnResult(Consts.guu, Consts.tyoki)).toBe("勝ち");
      });
      test("CPUが ✋ → 負け", () => {
        expect(model.returnResult(Consts.guu, Consts.paa)).toBe("負け");
      });
    });

    describe("プレイヤーの手が ✌ の場合", () => {
      test("CPUが ✊ → 負け", () => {
        expect(model.returnResult(Consts.tyoki, Consts.guu)).toBe("負け");
      });
      test("CPUが ✌ → 引き分け", () => {
        expect(model.returnResult(Consts.tyoki, Consts.tyoki)).toBe("引き分け");
      });
      test("CPUが ✋ → 勝ち", () => {
        expect(model.returnResult(Consts.tyoki, Consts.paa)).toBe("勝ち");
      });
    });

    describe("プレイヤーの手が ✋ の場合", () => {
      test("CPUが ✊ → 勝ち", () => {
        expect(model.returnResult(Consts.paa, Consts.guu)).toBe(Consts.winText);
      });
      test("CPUが ✌ → 負け", () => {
        expect(model.returnResult(Consts.paa, Consts.tyoki)).toBe(Consts.loseText);
      });
      test("CPUが ✋ → 引き分け", () => {
        expect(model.returnResult(Consts.paa, Consts.paa)).toBe(Consts.drawText);
      });
    });
  });

  // ---------------------------
  // returnResultIndexのテスト
  // ---------------------------
  describe("returnResultIndex - 結果に応じたインデックスを返すメソッド", () => {
    test("勝ち → 0", () => {
      expect(model.returnResultIndex(Consts.winText)).toBe(gameResult.win);
    });
    test("負け → 1", () => {
      expect(model.returnResultIndex(Consts.loseText)).toBe(gameResult.lose);
    });
    test("引き分け → 2", () => {
      expect(model.returnResultIndex(Consts.drawText)).toBe(gameResult.draw);
    });
  });
});
