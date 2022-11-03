// Constructors
// here is a class to work with

// create 3 properties that are set by the constructor
// create 3 methods

class Pirate {
  constructor(name, age, nationality) {
    this.hp = 100;
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  sail(direction) {
    console.log(`${this.name} is sailing the ship to the ${direction}`);
  }

  beAttacked() {
    this.hp--;
  }

  beHealed() {
    this.hp++;
  }

  party() {
    console.log(`${this.name} is having fun in party.`);
  }
}

// instantiate 2 arrays of 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl

let jollyRoger = [
  new Pirate("McFilthy", 35, "Madagascan"),
  new Pirate("Garrick Roach", 20, "Zimbabwean"),
  new Pirate("Stinkin' Pete", 49, "Romanian"),
];

let blackPearl = [
  new Pirate("Cannonball Conner", 19, "Brazilian"),
  new Pirate("Glory Jones", 30, "Malaysian"),
  new Pirate("Captain Mack Calabran", 26, "Guatemalan"),
];

//loop over each array and print 3 properties of each pirate
jollyRoger.forEach((pirate) => {
  console.log(pirate.name);
  console.log(pirate.age);
  console.log(pirate.nationality);
});

blackPearl.forEach((pirate) => {
  console.log(pirate.name);
  console.log(pirate.age);
  console.log(pirate.nationality);
});
