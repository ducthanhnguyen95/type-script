class Person {
  constructor(
    public firstName: string,
    public lastname: string,
  ) {}

  get fullName() {
    return this.firstName + " " + this.lastname;
  }

  protected walk() {
    console.log("Walking");
  }
}

class Student extends Person {
  constructor(
    public studentId: number,
    firstName: string,
    lastName: string,
  ) {
    super(firstName, lastName);
  }

  takeTest() {
    this.walk();
    console.log("Taking a test");
  }
}

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}

printNames([
  new Student(1, "Van", "Dai"),
  new Teacher("Duc", "Thanh"),
  new Principal("Marry", "Smith"),
]);

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}
 