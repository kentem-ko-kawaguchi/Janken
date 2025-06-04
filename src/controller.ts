import { Model } from "./model.js";

export class Controller {
  private model: Model;

  constructor() {
    this.model = new Model();

  }
  // test
  public callRandomHand(){
    return this.model.randomHand();
  }
}
