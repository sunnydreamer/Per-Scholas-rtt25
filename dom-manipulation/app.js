let text = document.querySelector(".text");
let btn3 = document.querySelector(".btn3");

const changeText = () => {
  text.innerHTML = "Goodbye World!";
};

const changeBg = () => {
  text.style.backgroundColor = "red";
};

const disappear = () => {
  btn3.style.display = "none";
};
