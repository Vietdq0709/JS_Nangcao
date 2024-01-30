const form = document.getElementById("form");
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");
const priceElement = document.getElementById("price");
const descElement = document.getElementById("description");
const categoryElement = document.getElementById("category");

// On DOM Load
window.addEventListener("DOMContentLoaded", init);

function init() {
  form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  // 1. ngan chan preventDefault
  event.preventDefault();

  // 2. Get element value
  const title = titleElement.value;
  const image = imageElement.value;
  // Chuyen sang number cho price
  const price = priceElement.value ? Number(priceElement.value) : 0; //
  const desc = descElement.value;
  const category = categoryElement.value;

  // 3. Check validate !value_1 || !value_2
  if (!title || !image || !category) {
    alert("Please add info product");
    return;
  }

  const newProduct = {
    title,
    image,
    price,
    desc,
    category,
  };
  console.log(newProduct);

  // 4. call API
}