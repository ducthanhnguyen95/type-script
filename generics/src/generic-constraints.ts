interface Person {
  name: string;
}

class Person {
  constructor(public name: string) {}
}

class Csutomer extends Person {}

function echo<T extends number | string>(value: T): T {
  return value;
}

function echo2<T extends { name: string }>(value: T): T {
  return value;
}

function echo3<T extends Person>(value: T): T {
  return value;
}

echo(2);
echo2({ name: "a" });
echo3(new Person("a"));
echo3(new Csutomer("a"));
