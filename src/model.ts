export class Model {

  //test
  private hands = [
    '✊',
    '✌',
    '✋',
  ];

  // test
  public randomHand(): string {
    return this.hands[Math.floor(Math.random() * 3)];
  }
}