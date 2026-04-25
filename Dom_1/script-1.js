const toggle = document.querySelector("#turn");
const light = document.querySelector(".light");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
});

toggle.addEventListener("click", () => {
  light.classList.toggle("on");
});
