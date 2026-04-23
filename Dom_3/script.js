const listElements = document.querySelectorAll(".todo_list");
const parentElement = document.querySelector(".parent");
const doneBtn = document.querySelector(".done_btn");

console.log(listElements);

listElements.forEach((element) => {
  console.log(element.textContent);
  element.textContent += " please!";
});

//textContent
//innerText
//innerHTML

//
// const div = document.createElement("div");

// div.textContent = "i did my homework";
// console.log(div);

// parentElement.append(div);

let isClicked = false;

doneBtn.addEventListener("click", () => {
  if (!isClicked) {
    const message = document.createElement("span");
    message.textContent = "i have done all list activities";
    parentElement.append(message);
  }
  isClicked = true;
});
