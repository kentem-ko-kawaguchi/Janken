import { Model } from "./model.js";

export class Controller {
  private model: Model;

  constructor() {
    this.model = new Model();
  }
  // test
  public callRandomHand(element: HTMLElement) {
    element.addEventListener("click", () => {
      element.textContent = this.model.randomHand();
    });
  }
}
