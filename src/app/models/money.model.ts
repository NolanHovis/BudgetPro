export class Money {
  public type: string;
  public name: string;
  public amount: number;

  constructor(type: string, name: string, amount: number) {
    this.amount = amount;
    this.name = name;
    this.type = type;
  }
}
