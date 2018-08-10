class Person {
  constructor(name = "Anonymous", age) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description = description = ` Their major is ${this.major}`;
    }

    return description;
  }
}

// Challange

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);

    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting = greeting + `I am visiting from ${this.homeLocation}`;
    }

    return greeting;
  }
}

// const me = new Student("Mickey English", 26, "Computer Science", "La");
// console.log(me.getDescription());
// const other = new Student();
// console.log(other.getDescription());

const traveler = new Traveler("Mickey English", 26, "London");
const traveler2 = new Traveler("TEST", 18);
console.log(traveler.getGreeting());
console.log(traveler2.getGreeting());
