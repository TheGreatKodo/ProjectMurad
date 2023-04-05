const cart = document.getElementById('cart');
const addproduct = document.getElementById('btn');

cart.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector(".main").setAttribute("id", `overlay`);
    document.getElementById('incart').removeAttribute("hidden", '');
    const close = document.getElementById("close3");
    close.addEventListener("click", () =>{
        document.getElementById('incart').setAttribute("hidden", "")
        document.querySelector(".main").removeAttribute("id", `overlay`);
    }
    );
});

