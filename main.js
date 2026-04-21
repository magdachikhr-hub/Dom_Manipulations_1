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
