// You will be working with this class

// class Cat {}
// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances

class Cat {
  constructor(name, breed, age, weight, isVaccinated) {
    this.legs = 4;
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weightInPounds = weight;
    this.isVaccinated = isVaccinated;
  }

  eat(food) {
    console.log(`${this.name} ate ${food}`);
  }

  play() {
    console.log(`${this.name} is playing`);
  }

  weightChange(weightChange) {
    if (this.weight + weightChange > 0) {
      this.weightInPounds += weightChange;
    }
  }
}

let nini = new Cat("Nini", "Domestic Shorthair", 3, 7, true);
let snowball = new Cat("Snowball", "Maine Coon", 5, 20, false);

console.log(nini);
console.log(snowball);

nini.eat("fish");
snowball.eat("watermelon");

nini.play();
snowball.play();

nini.weightChange(2);
snowball.weightChange(-3);

// console.log(nini);
// console.log(snowball);
