class Hamster {
  constructor(name) {
    this.owener = "";
    this.name = name;
    this.price = 15;
  }

  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getWeight() {
    return this.weight;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }

  eat(times) {
    for (let i = 0; i < times; i++) {
      this.weight++;
      this.mood++;
    }
  }
  exercise(times) {
    for (let i = 0; i < times; i++) {
      this.weight--;
    }
  }

  ageUp(years) {
    for (let i = 0; i < years; i++) {
      this.age++;
      this.height++;
      this.weight++;
      this.mood--;
      this.bankAccount += 10;
    }
  }

  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

let timmy = new Person("Timmy");
timmy.ageUp(5);
timmy.eat(5);
timmy.exercise(5);
timmy.ageUp(9);

let gus = new Hamster("Gus");
gus.owener = "Timmy";
timmy.buyHamster(gus);
timmy.ageUp(15);
timmy.eat(2);
timmy.exercise(2);

class Dinner {
  constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}

class Chef {
  constructor() {
    this.dinners = [];
  }

  addNewDish(appetizer, entree, dessert) {
    let newdish = new Dinner(appetizer, entree, dessert);
    this.dinners.push(newdish);
    return newdish;
  }
}

let chef = new Chef();
chef.addNewDish("apple", "banana", "milk");
chef.addNewDish("aa", "bb", "cc");
chef.addNewDish("ee", "ff", "gg");
console.log(chef.dinners);
