const appleCard =
  '<div class="card"><img src="https://www.pinclipart.com/picdir/big/269-2698580_musicianpusheen-guitar-pusheen-cat-kitty-cute-tumblr-clipart.png" alt="" class="cardImg apple"/></div>';

const bananaCard =
  '<div class="card"><img src="https://i.pinimg.com/originals/1b/12/98/1b1298903b6216d6a20078eae64a77d3.png" alt="" class="cardImg banana"/></div>';

const pearCard =
  '<div class="card"><img src="https://i.pinimg.com/originals/fe/e4/8b/fee48b73f7688780fe4be5ae0773e542.png" alt="" class="cardImg pear"/></div>';

const correctSound = new Audio("/sound/correct.wav");
const wrongSound = new Audio("/sound/wrong.wav");
const startSound = new Audio("/sound/mixkit-funny-squeaky-toy-hits-2813.wav");

class Board {
  constructor() {
    this.cards = [];
    this.mode = "easy";
  }

  clearBoard() {
    this.cards = [];
    let target = document.querySelector(".gameBoard");
    target.innerHTML = "";
    document.querySelector(".gameover").style.display = "none";
    document.querySelector(".youwin").style.display = "none";
  }

  generateCards(mode) {
    if (mode === "easy") {
      let easyCardNames = [
        "apple",
        "banana",
        "pears",
        "apple",
        "banana",
        "pears",
      ];

      for (let i = 0; i < 6; i++) {
        let randomeNum = Math.floor(Math.random() * (6 - i));
        this.cards.push(easyCardNames[randomeNum]);
        easyCardNames.splice(randomeNum, 1);
      }

      this.cards.forEach((card) => {
        let target = document.querySelector(".gameBoard");
        if (card === "apple") {
          target.innerHTML += appleCard;
        } else if (card === "banana") {
          target.innerHTML += bananaCard;
        } else {
          target.innerHTML += pearCard;
        }
      });

      //   console.log(this.cards);

      //   console.log("easy");
    } else if (mode === "medium") {
      //   console.log("medium");
    } else if (mode === "hard") {
      //   console.log("hard");
    }
  }
}

const start = () => {
  game.clearBoard();
  game.generateCards(game.mode);
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", flip);
  });

  // add attempt
  game.attempt = 5;
  document.querySelector(".attemptScore").innerHTML = game.attempt;

  // add final compare
  completedPairs = 0;
};

let compare = [];
let firstPic;
let secondPic;
let lock = false;

function flip() {
  if (lock === true) return;

  let target = this.querySelector(".cardImg");
  target.classList.toggle("cardImgShow");

  //   console.log(target.className);
  if (compare.length < 1) {
    firstPic = this;
    // console.log(firstPic);
    compare.push(target.className);
  } else if (compare.length < 2) {
    //lock the board
    lock = true;

    secondPic = this;
    // console.log(secondPic);
    compare.push(target.className);
    //console.log(compare);

    // Win/Lose State
    if (compare[0] === compare[1]) {
      correctSound.play();
      setTimeout(() => {
        firstPic.removeEventListener("click", flip);
        secondPic.removeEventListener("click", flip);
        lock = false;
      }, 800);

      compare = [];
      game.attempt--;
      document.querySelector(".attemptScore").innerHTML = game.attempt;
      // detect win state
      completedPairs++;
      if (completedPairs === 3 && game.attempt >= 0) {
        // console.log("win");

        document.querySelector(".youwin").style.display = "block";
      } else if (completedPairs < 3 && game.attempt <= 0) {
        document.querySelector(".gameover").style.display = "block";

        document.querySelectorAll(".card").forEach((card) => {
          card.removeEventListener("click", flip);
        });
      }
    } else {
      wrongSound.play();
      setTimeout(() => {
        firstPic.querySelector(".cardImg").classList.toggle("cardImgShow");
        secondPic.querySelector(".cardImg").classList.toggle("cardImgShow");
        lock = false;
      }, 1000);

      compare = [];
      game.attempt--;
      document.querySelector(".attemptScore").innerHTML = game.attempt;
      //detect lose state
      if (completedPairs < 3 && game.attempt == 0) {
        // console.log(document.querySelector(".gameover"));
        document.querySelector(".gameover").style.display = "block";

        document.querySelectorAll(".card").forEach((card) => {
          card.removeEventListener("click", flip);
        });
      }
    }
  }
}

const playBtnSound = () => {
  startSound.play();
};

// Game Start
let game = new Board();
start();
