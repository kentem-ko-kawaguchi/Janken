import { Model } from "./model";

describe("Janken", () => {
  const model = new Model();

  // ---------------------------
  // searchHandのテスト
  // ---------------------------
  describe("searchHand - プレイヤーの手を取得するメソッド", () => {
    test("インデックス0で ✊ を返す", () => {
      expect(model.searchHand(0)).toBe("✊");
    });
    test("インデックス1で ✌ を返す", () => {
      expect(model.searchHand(1)).toBe("✌");
    });
    test("インデックス2で ✋ を返す", () => {
      expect(model.searchHand(2)).toBe("✋");
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
      expect(model.randomHand()).toBe("✊");
    });

    test("Math.random() が 0.5 を返すとき、✌ を返す", () => {
      jest.spyOn(Math, "random").mockReturnValue(0.5); // 0.5 * 3 = 1.5 -> 1
      expect(model.randomHand()).toBe("✌");
    });

    test("Math.random() が 0.9 を返すとき、✋ を返す", () => {
      jest.spyOn(Math, "random").mockReturnValue(0.9); // 0.9 * 3 = 2.7 -> 2
      expect(model.randomHand()).toBe("✋");
    });
  });

  // ---------------------------
  // returnResultのテスト
  // ---------------------------
  describe("returnResult - じゃんけんの勝敗を返すメソッド", () => {
    describe("プレイヤーの手が ✊ の場合", () => {
      test("CPUが ✊ → 引き分け", () => {
        expect(model.returnResult("✊", "✊")).toBe("引き分け");
      });
      test("CPUが ✌ → 勝ち", () => {
        expect(model.returnResult("✊", "✌")).toBe("勝ち");
      });
      test("CPUが ✋ → 負け", () => {
        expect(model.returnResult("✊", "✋")).toBe("負け");
      });
    });

    describe("プレイヤーの手が ✌ の場合", () => {
      test("CPUが ✊ → 負け", () => {
        expect(model.returnResult("✌", "✊")).toBe("負け");
      });
      test("CPUが ✌ → 引き分け", () => {
        expect(model.returnResult("✌", "✌")).toBe("引き分け");
      });
      test("CPUが ✋ → 勝ち", () => {
        expect(model.returnResult("✌", "✋")).toBe("勝ち");
      });
    });

    describe("プレイヤーの手が ✋ の場合", () => {
      test("CPUが ✊ → 勝ち", () => {
        expect(model.returnResult("✋", "✊")).toBe("勝ち");
      });
      test("CPUが ✌ → 負け", () => {
        expect(model.returnResult("✋", "✌")).toBe("負け");
      });
      test("CPUが ✋ → 引き分け", () => {
        expect(model.returnResult("✋", "✋")).toBe("引き分け");
      });
    });
  });

  // ---------------------------
  // returnResultIndexのテスト
  // ---------------------------
  describe("returnResultIndex - 結果に応じたインデックスを返すメソッド", () => {
    test("勝ち → 0", () => {
      expect(model.returnResultIndex("勝ち")).toBe(0);
    });
    test("負け → 1", () => {
      expect(model.returnResultIndex("負け")).toBe(1);
    });
    test("引き分け → 2", () => {
      expect(model.returnResultIndex("引き分け")).toBe(2);
    });
  });
});
