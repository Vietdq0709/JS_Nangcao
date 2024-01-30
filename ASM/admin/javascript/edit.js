const form = document.getElementById("form");
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");
const priceElement = document.getElementById("price");
const descElement = document.getElementById("description");
const categoryElement = document.getElementById("category");

let productId = null;

// On DOM Load
window.addEventListener("DOMContentLoaded", init);

function init() {
  // get Product Detail from product id (url)
  getProductDetail();
  form.addEventListener("submit", handleSubmit);
}

function getProductDetail() {
  // 1. lay productId from url = 1

  productId = window.location.search.split("=")[1];

  // const urlParams = new URLSearchParams(window.location.search);
  // Lấy giá trị của id
  // const id = urlParams.get("id");
  // console.log(id);

  console.log(productId);
  // 2. call api get detail by id: fetch()

  // 3. Co du lieu product
  const productDetail = {
    title: "Sp1",
    image: "image 1",
    price: 111,
    desc: "desc",
    category: "GA",
  };

  // 4. Bom nguoc du lieu vao input
  titleElement.value = productDetail.title;
  imageElement.value = productDetail.image;
  priceElement.value = productDetail.price;
  descElement.value = productDetail.desc;
  categoryElement.value = productDetail.category;
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

  // 4. call API + productId PATCH: localhost:300/product/productId
}