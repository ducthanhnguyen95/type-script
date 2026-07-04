class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    // Record a transaction
    this._balance += amount;
  }

  private calculaterTax() {}

  getBalance(): number {
    return this._balance;
  }
}

let account = new Account(1, "Thanh", 0);
console.log(account.getBalance());
