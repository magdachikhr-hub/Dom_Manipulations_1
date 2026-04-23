const listElements = document.querySelectorAll(".todo_list");
const parentElement = document.querySelector(".parent");

console.log(listElements);

listElements.forEach((element) => {
  console.log(element.textContent);
  element.textContent += " please!";
});

//textContent
//innerText
//innerHTML

//
const div = document.createElement("div");

div.textContent = "i did my homework";
console.log(div);

parentElement.append(div);
