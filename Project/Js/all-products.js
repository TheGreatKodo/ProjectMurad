import Product from "../Js/Product.js";
import productsDb from "../database/productsDb.json" assert { type: "json" };

let allProducts = [];
let productCard;

for (let product of productsDb) {
    productCard = "";
    productCard += `<a href=""><img src="${product.png_url}" class="myImg"></a>`;
    productCard += `<a href="" class="product-card-link" ><p class="product-name">${product.name}</p>`;
    productCard += `<b class="price">${product.price} &#8381</b></a>`;
    allProducts.push(productCard);
}

document.querySelectorAll(".product").forEach((element, index) => {
    element.innerHTML = allProducts[index];
    element.setAttribute("data-id", productsDb[index].id);

    element.addEventListener("click", (e) => {
        e.preventDefault();
        makeCard(element, productsDb, index);
    });
    console.log(element);
});

let itemCard = "";
const newProductCard = document.querySelector(".product-card");
async function makeCard(product, productsDb, index) {
    itemCard = "";
    const product_card = document.querySelector(
        `#product${productsDb[index].id}`
    );
    document.querySelector(".main").setAttribute("id", `overlay`);
    newProductCard.removeAttribute("hidden");

    document
        .querySelector(".card-img")
        .setAttribute("src", `${productsDb[index].png_url}`);

    document.querySelector(
        ".product-text-name"
    ).innerHTML = `${productsDb[index].name}`;
    document.querySelector(
        ".product-mark"
    ).innerHTML = `&#10027&#10027&#10027&#10027&#10027 ${productsDb[index].marks}`;
    document.querySelector(
        ".card-price"
    ).innerHTML = `${productsDb[index].price} &#8381</p>`;
    document
        .querySelector(".add-in-cart")
        .setAttribute("id", `product-${productsDb[index].id}`);
    document.querySelector(
        ".product-discription"
    ).innerHTML = `${productsDb[index].discription}`;

    const close = document.querySelector(".close");
    await close.addEventListener("click", () => {
        newProductCard.setAttribute("hidden", "");
        document.querySelector(".main").removeAttribute("id", `overlay`);
    });

    console.log(product_card);
}
