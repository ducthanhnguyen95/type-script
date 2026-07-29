function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor,
) {
  const original = descriptor.get;
  descriptor.get = function () {
    // if (original !== null && original !== undefined) {
    //   original.call(this);
    // }
    const result = original?.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class Person {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("thanh", "max");
console.log(person.fullName);
