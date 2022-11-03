// const changeBgColor = () => {
//   let target = document.querySelector(".selfIntroContainer");
//   target.classList.toggle("blue");
// };

// const changeContent = () => {
//   let target = document.querySelector(".Intro1");
//   target.innerHTML = "My real name is Yuqing";
// };

const summaryContent =
  "Highly motivated and skilled IT professional. <br />Passionate about aesthetics and web design. Willing to deliver the best user-friendly products. <br />Detail-oriented, extremely organized and able to work in a multi-task environment.";

const workContent =
  " <div class='jobContainer'><div class='jobTitle'>Lead Dispatcher & Operation Associate</div><div class='jobTime'>May 2021 - July 2022</div><div class='jobDesc'><ul><li>Analyzed and assigned most efficient trips for drivers accordingto the driver's location and estimated arrival time to achieve a satisfying delivery experience for all customers.</li> <li>Reconciled conflicts between drivers, restaurants and customers in order to establish strong relationships among our clients.</li></ul></div></div><div class='jobContainer'><div class='jobTitle'>Audio Visual Technician</div><div class='jobTime'>Jan 2019 - May 2021</div><div class='jobDesc'><ul><li>Offered on-site technical support, troubleshooting the ITproblems for venues including classrooms, the student center,Fenway center and the auditorium.</li><li>Programed sound & lighting effects for concerts, plays, danceshows etc. Skilled in Creston board, Yamaha CL5 and ETC ION/GIO.</li></ul></div></div>";

const educationContent =
  "<div class='jobContainer'><div class='jobTitle'>Per Scholas</div><div class='jobDesc'>Software Engineer</div><div class='jobTime'>Boston, MA | Aug 2022 - Nov 2022</div></div></div>";

const skillContent =
  "<div class='jobContainer'><div class='jobTitle'>Programming Language</div><div class='jobTime'>HTML</div><div class='jobTime'>CSS</div><div class='jobTime'>JAVASCRIPT</div><div class='jobTime'>PYTHON</div></div>";

const showMenu = () => {
  let menu = document.querySelector(".menuItems");
  menu.classList.toggle("menuItemsShow");
};

const summary = () => {
  let educationTitle = document.querySelector(".educationBtn");
  let summaryTitle = document.querySelector(".summaryBtn");
  let workTitle = document.querySelector(".workBtn");
  let skillTitle = document.querySelector(".skillBtn");
  let background = document.querySelector(".textBox");
  let textBox = document.querySelector(".textBox");
  background.style.backgroundColor = "#f6bd60";
  educationTitle.style.fontWeight = "normal";
  summaryTitle.style.fontWeight = "bold";
  workTitle.style.fontWeight = "normal";
  skillTitle.style.fontWeight = "normal";
  textBox.innerHTML = summaryContent;
};

const education = () => {
  let educationTitle = document.querySelector(".educationBtn");
  let summaryTitle = document.querySelector(".summaryBtn");
  let workTitle = document.querySelector(".workBtn");
  let skillTitle = document.querySelector(".skillBtn");
  let background = document.querySelector(".textBox");
  let textBox = document.querySelector(".textBox");
  background.style.backgroundColor = "#f7ede2";
  educationTitle.style.fontWeight = "bold";
  summaryTitle.style.fontWeight = "normal";
  workTitle.style.fontWeight = "normal";
  skillTitle.style.fontWeight = "normal";
  textBox.innerHTML = educationContent;
};

const work = () => {
  let educationTitle = document.querySelector(".educationBtn");
  let summaryTitle = document.querySelector(".summaryBtn");
  let workTitle = document.querySelector(".workBtn");
  let skillTitle = document.querySelector(".skillBtn");
  let background = document.querySelector(".textBox");
  let textBox = document.querySelector(".textBox");
  background.style.backgroundColor = "#f5cac3";
  educationTitle.style.fontWeight = "normal";
  summaryTitle.style.fontWeight = "normal";
  workTitle.style.fontWeight = "bold";
  skillTitle.style.fontWeight = "normal";
  textBox.innerHTML = workContent;
};

const skill = () => {
  let educationTitle = document.querySelector(".educationBtn");
  let summaryTitle = document.querySelector(".summaryBtn");
  let workTitle = document.querySelector(".workBtn");
  let skillTitle = document.querySelector(".skillBtn");
  let background = document.querySelector(".textBox");
  let textBox = document.querySelector(".textBox");
  background.style.backgroundColor = "#84a59d";
  educationTitle.style.fontWeight = "normal";
  summaryTitle.style.fontWeight = "normal";
  workTitle.style.fontWeight = "normal";
  skillTitle.style.fontWeight = "bold";
  textBox.innerHTML = skillContent;
};
