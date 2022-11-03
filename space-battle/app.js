let alienPic =
  '<div class="alienCard"><div class="hp"><div class="hpStr">HP:</div><div class="hpNum"></div></div><img src="http://www.pygame.org/thumb/117664abd2b74d83ea1cb06b9544f496.png" alt="" class="alien"/></div>';

class Alien {
  constructor() {
    this.hull = (Math.random() * 3 + 3).toFixed(1); // between 3 and 6
    this.firepower = Math.random() * 2 + 2; //between 2 and 4
    this.accuracy = Math.random() * 0.2 + 0.6; //between .6 and .8
  }
}

class Spaceship {
  constructor(name) {
    this.name = name;
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
  }
}

let aliens = [];
let player = new Spaceship("the USS HelloWorld");

const playerStatus = document.querySelector(".playerStatus");
const enemyStatus = document.querySelector(".enemyStatus");
const retreatBtn = document.querySelector(".retreat");
const retreatBtnInactive = document.querySelector(".retreatInactive");

const createAliens = (num) => {
  //clear board
  aliens = [];
  document.querySelector(".aliens").innerHTML = " ";
  document.querySelector(".finalResultWin").style.display = "none";
  document.querySelector(".finalResultLose").style.display = "none";
  document.querySelector(".finalResultRetreat").style.display = "none";

  // generate enemy from loop
  for (let i = 0; i < num; i++) {
    aliens.push(new Alien());
    document.querySelector(".aliens").innerHTML += alienPic;
    // Put hp value into the html content
    document.querySelectorAll(".hpNum")[i].innerHTML = aliens[i].hull;
  }

  // reset player hp
  player.hull = 20;
  document.querySelector(".hpNumSpaceship").innerHTML = player.hull;

  // recover onclick function from lose state
  document.querySelector(".shoot").setAttribute("onClick", "shoot()");
};

const shoot = () => {
  //clear enemy status
  enemyStatus.innerHTML = " ";
  // make sure there are enemies
  if (aliens[0]) {
    // if player hit the enermy
    if (Math.random() <= player.accuracy) {
      aliens[0].hull -= player.firepower;

      if (aliens[0].hull > 0) {
        document.querySelector(".hpNum").innerHTML = aliens[0].hull.toFixed(1);

        // update battle status

        playerStatus.innerHTML = `Deal ${player.firepower} damage to the enemy! Now it's time for alien to attack back`;

        console.log(
          "Deal damage to the enemy. it is time for alien attack back"
        );

        // disable retreat btn
        retreatBtn.style.display = "none";
        retreatBtnInactive.style.display = "block";

        enemyShoot(aliens[0]);
      } else {
        playerStatus.innerHTML = `Deal ${player.firepower} damage to the enemy.You killed the enemy`;

        //enable retreat btn
        retreatBtn.style.display = "block";
        retreatBtnInactive.style.display = "none";

        console.log("you killed alien");
        //remove alien from array
        aliens.shift();

        //remove alien card html content
        if (document.querySelectorAll(".alien").length > 0) {
          document.querySelector(".alienCard").remove();
          // Win state
          if (document.querySelectorAll(".alien").length <= 0) {
            document.querySelector(".finalResultWin").style.display = "block";
            console.log("you won!");
          }
        }
      }
      // if player miss the enermy
    } else {
      playerStatus.innerHTML = `You missed it! it is time for alien attack back`;
      console.log("You missed it! it is time for alien attack back");
      enemyShoot(aliens[0]);
      // disable the retreat btn
      retreatBtn.style.display = "none";
      retreatBtnInactive.style.display = "block";
    }
  }
};

const enemyShoot = (enemy) => {
  //set Enemy Turn

  // document.querySelector(".enemyTurn").style.display = "block";
  // document.querySelector(".playerTurn").style.display = "none";

  // if enemy hit the user
  if (Math.random() <= enemy.accuracy) {
    player.hull -= enemy.firepower;
    // update player's HP

    // console.log(`player's hp is ${player.hull}`);

    // if user survive
    if (player.hull > 0) {
      //change player's hp in html

      document.querySelector(".hpNumSpaceship").innerHTML =
        player.hull.toFixed(1);

      //update battle status

      enemyStatus.innerHTML += `<br>Enemy deal ${enemy.firepower.toFixed(
        1
      )} damage to the player`;

      console.log("enemy deal demage to player");
    } else {
      //lose state
      document.querySelector(".finalResultLose").style.display = "block";
      console.log("you lose");

      // disable onclick for shoot btn
      document.querySelector(".shoot").removeAttribute("onClick"); //onclick = null;
    }
    // If player miss the enermy
  } else {
    enemyStatus.innerHTML = `<br>Enemy missed it! `;

    console.log("Enemy missed it! it is time for you to attack back");
  }
};

const retreat = () => {
  document.querySelector(".finalResultRetreat").style.display = "block";
  console.log("retreat");
};

//Game Start
createAliens(6);

const makeImg = (numOfImg) => {};
