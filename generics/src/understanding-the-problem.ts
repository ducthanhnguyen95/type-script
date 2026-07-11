class KeyValuePair {
  constructor(
    public key: number,
    public value: string,
  ) {}
}

class StringKeyValuePair {
  constructor(
    public key: string,
    public value: string,
  ) {}
}

let pair = new KeyValuePair(1, "Apple");
let pair2 = new StringKeyValuePair("one", "Apple");
