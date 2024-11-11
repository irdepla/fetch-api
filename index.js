const cardWrapper = document.querySelector(".card__wrapper");

const PRODUCT__URL = "https://fakestoreapi.com/products";

async function getProducts() {
  try {
    const res = await fetch(PRODUCT__URL);
    const data = await res.json();
    console.log("data - ", data);



    data.forEach((item) => {
    const newElement = createCard(item.image, item.title, item.description);
    cardWrapper.appendChild(newElement);
    });
  } catch (err) {
    console.log(err);
    console.log("ishlamayapti");
  }
}

getProducts();

function createCard(image, title, desc) {
  const el = document.createElement("div");
  el.classList.add("card");
  el.innerHTML = `
  <div class="card__img1">
    <img src="${image}" alt="" class="card__img">
</div>
  <div class="card__info">
    <h3 class="card__title">${title}</h3>
    <p class="card__desc">${desc}</p>
</div>
  `;
  return el;
}
