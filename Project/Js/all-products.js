import Product from "../Js/Product.js";
import productsDb from "../database/productsDb.json" assert { type: "json" };

let allProducts = [];
let productCard;

for (let product of productsDb) {
    productCard = "";
    productCard += `<a href=""><img src="${product.png_url}" class="myImg"></a>`;
    productCard += `<a href="" class="product-card-link" ><b>${product.price} &#8381</b>`;
    productCard += `<p>${product.name}</p></a>`;
    allProducts.push(productCard);
}

document.querySelectorAll(".product").forEach((element, index) => {
    element.innerHTML = allProducts[index];
    element.setAttribute("data-id", productsDb[index].id);

    element.addEventListener("click", () =>
        makeCard(element, productsDb, index)
    );
    console.log(element);
});

let itemCard = "";
function makeCard(product, productsDb, index) {
    itemCard = "";
    itemCard += `<img src="${productsDb[index].png_url}">`;

    console.log(itemCard);
}
