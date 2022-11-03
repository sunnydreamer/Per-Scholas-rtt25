const rightPic = () => {
  let firstPic = document.getElementById("DarkKnight1");
  let secondPic = document.getElementById("DarkKnight2");
  let thirdPic = document.getElementById("DarkKnight3");

  const checkFirst = () => {
    let { display } = window.getComputedStyle(firstPic);

    if (display === "block") {
      firstPic.style.display = "none";
      secondPic.style.display = "block";
    }
  };

  const checkSecond = () => {
    let { display } = window.getComputedStyle(secondPic);
    if (display === "block") {
      secondPic.style.display = "none";
      thirdPic.style.display = "block";
    }
  };

  checkSecond();
  checkFirst();
};

const leftPic = () => {
  let firstPic = document.getElementById("DarkKnight1");
  let secondPic = document.getElementById("DarkKnight2");
  let thirdPic = document.getElementById("DarkKnight3");

  const checkSecond = () => {
    let { display } = window.getComputedStyle(secondPic);
    if (display === "block") {
      secondPic.style.display = "none";
      firstPic.style.display = "block";
    }
  };

  const checkThird = () => {
    let { display } = window.getComputedStyle(thirdPic);
    if (display === "block") {
      thirdPic.style.display = "none";
      secondPic.style.display = "block";
    }
  };

  checkSecond();
  checkThird();
};
