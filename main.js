const secondDiv = document.querySelector("#someId");
const button = document.querySelector(".btn");
const heading = document.querySelector(".heading");
const secondBtn = document.querySelector(".clickBtn");

console.log(heading, secondBtn);

const name = "gia";

secondBtn.addEventListener("click", () => {
  heading.textContent = `Hello, ${name}`;
});

let number = 0;

button.addEventListener("click", () => {
  console.log("clicked");
  number++; //   number = number + 1

  secondDiv.textContent = number;
});

function func() {}

// homework
const counter = document.querySelector(".zero");
const buttonFirst = document.querySelector(".plus_one");
const buttonSecond = document.querySelector(".reset");

let number1 = 0;

buttonFirst.addEventListener("click", () => {
  console.log("clicked");
  number1++;

  counter.textContent = number1;
});

buttonSecond.addEventListener("click", () => {
  console.log("clicked");
  number1 = 0;

  counter.textContent = number1;
});
