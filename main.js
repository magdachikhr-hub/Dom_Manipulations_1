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
const counter1 = document.querySelector(".zero");
const buttonFirst = document.querySelector(".plus_one");
const buttonSecond = document.querySelector(".reset");

let number1 = 0;

buttonFirst.addEventListener("click", () => {
  console.log("clicked");
  number1++;

  counter1.textContent = number1;
});

buttonSecond.addEventListener("click", () => {
  console.log("clicked");
  number1 = 0;

  counter1.textContent = number1;
});

//

const counter = document.getElementById("counter");
const addOne = document.querySelector(".add_one");
const reset = document.querySelector(".reset_btn");

console.log(counter);
console.log(addOne);
console.log(reset);

addOne.addEventListener("click", () => {
  counter.textContent++;
});

reset.addEventListener("click", () => {
  counter.textContent = 0;
});

const div = document.querySelector(".parent");
console.log(div.innerHTML);

const someText = "placeholder";

div.innerHTML += ` <section>
        <div class="card">
          some card
          <img src="" alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quia dolorem est aut et soluta excepturi, fugit qui eum omnis 
        tempora voluptatem, id sit quae quidem repellat, in expedita
        laudantium facere?</p>
        <p> ${someText} </p>
      </section>`;

// addOne.addEventListener("click", (event) => {
//   console.log(event.target);
// });

// += - add the number next to it

const arrowFunc = () => {
  console.log("running");
};

arrowFunc();

someFunc();

function someFunc() {
  console.log("running");
}

//
for (let i = 0; i < 10; i++) {}

// - strings and arrays - for of

let array = ["banana", "apple"];
for (let fruit of array) {
  console.log(fruit);
}

// works only on array

array.forEach((element) => {
  console.log(element);
});
