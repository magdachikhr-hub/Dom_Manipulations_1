const parentBox = document.querySelector(".parent");

const products = [
  {
    name: "Apple iphone 17 Pro",
    price: 3899,
    img: "./images/iphone1.webp",
  },
  {
    name: "Samsung Galaxy S26 Ultra",
    price: 3599,
    img: "./images/iphone2.webp",
  },
  {
    name: "Xiaomi Poco M8 Pro NFC 5G",
    price: 929,
    img: "./images/iphone3.webp",
  },
];

products.forEach((element) => {
  parentBox.innerHTML += `
  <div class="card">
        <img src="${element.img}" alt="" />
        <span></span>
        <p></p>
      </div>
  
  `;
});
