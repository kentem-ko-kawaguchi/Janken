import { Model } from "./model";
import { Consts } from "../Consts/consts";
import { gameResultIndex } from "../Consts/gameResult";
import { handsIndex } from "../Consts/hands";

describe("Janken", () => {
  const model = new Model();

  // randomHandのテスト
  describe("randomHand - CPUの手をランダムで取得するメソッド", () => {
    afterEach(() => {
      jest.restoreAllMocks(); // モックを元に戻す
    });

    test("Math.random() が 0 を返すとき、0(✊) を返す", () => {
      jest.spyOn(Math, "random").mockReturnValue(0.0); // 0 * 3 = 0
      expect(model.randomHandIndex()).toBe(handsIndex.guu);
    });

    test("Math.random() が 0.5 を返すとき、1(✌) を返す", () => {
      jest.spyOn(Math, "random").mockReturnValue(0.5); // 0.5 * 3 = 1.5 -> 1
      expect(model.randomHandIndex()).toBe(handsIndex.tyoki);
    });

    test("Math.random() が 0.9 を返すとき、2(✋) を返す", () => {
      jest.spyOn(Math, "random").mockReturnValue(0.9); // 0.9 * 3 = 2.7 -> 2
      expect(model.randomHandIndex()).toBe(handsIndex.paa);
    });
  });

  // returnResultのテスト
  describe("returnResult - じゃんけんの勝敗を返すメソッド", () => {
    describe("プレイヤーの手が 0(✊) の場合", () => {
      test("CPUが 0(✊) → 2(引き分け)", () => {
        expect(model.returnResult(handsIndex.guu, handsIndex.guu)).toBe(
          gameResultIndex.draw
        );
      });
      test("CPUが 1(✌) → 0(勝ち)", () => {
        expect(model.returnResult(handsIndex.guu, handsIndex.tyoki)).toBe(
          gameResultIndex.win
        );
      });
      test("CPUが 2(✋) → 1(負け)", () => {
        expect(model.returnResult(handsIndex.guu, handsIndex.paa)).toBe(
          gameResultIndex.lose
        );
      });
    });

    describe("プレイヤーの手が 1(✌) の場合", () => {
      test("CPUが 0(✊) → 1(負け)", () => {
        expect(model.returnResult(handsIndex.tyoki, handsIndex.guu)).toBe(
          gameResultIndex.lose
        );
      });
      test("CPUが 1(✌) → 2(引き分け)", () => {
        expect(model.returnResult(handsIndex.tyoki, handsIndex.tyoki)).toBe(
          gameResultIndex.draw
        );
      });
      test("CPUが 2(✋) → 0(勝ち)", () => {
        expect(model.returnResult(handsIndex.tyoki, handsIndex.paa)).toBe(
          gameResultIndex.win
        );
      });
    });

    describe("プレイヤーの手が 2(✋) の場合", () => {
      test("CPUが 0(✊) → 0(勝ち)", () => {
        expect(model.returnResult(handsIndex.paa, handsIndex.guu)).toBe(
          gameResultIndex.win
        );
      });
      test("CPUが 1(✌) → 1(負け)", () => {
        expect(model.returnResult(handsIndex.paa, handsIndex.tyoki)).toBe(
          gameResultIndex.lose
        );
      });
      test("CPUが 2(✋) → 2(引き分け)", () => {
        expect(model.returnResult(handsIndex.paa, handsIndex.paa)).toBe(
          gameResultIndex.draw
        );
      });
    });
  });
});
