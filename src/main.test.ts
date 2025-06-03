"use strict";

import { cpuHand, playerHand, fightResult, countUpResult } from "./main";

describe("Janken - じゃんけん", () => {
  describe("cpuHand - randomの値に応じて正しい手（✊、✌、✋）を返す", () => {
    test("guu hand - randomが0のとき✊を返す", () => {
      jest.spyOn(Math, "random").mockReturnValue(0);
      expect(cpuHand()).toBe("✊");
    });

    test("guu hand - randomが1のとき✌を返す", () => {
      jest.spyOn(Math, "random").mockReturnValue(1);
      expect(cpuHand()).toBe("✌");
    });

    test("guu hand - randomが2のとき✋を返す", () => {
      jest.spyOn(Math, "random").mockReturnValue(2);
      expect(cpuHand()).toBe("✋");
    });
  });
});
