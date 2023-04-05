import users from '../database/usersDb.json' assert {type: 'json'};

const login = document.getElementById('login');
const password = document.getElementById('password');
const ButtonLogin = document.getElementById('button-login');
const startlogin = document.getElementById('account');
const cartButton = document.getElementById('cart');
const loginDiv = document.getElementById('login-page');
const state = document.getElementById('state');
const buttonreg = document.getElementById('reg');
const regForm = document.getElementById('regForm');
const loginReg = document.getElementById('loginReg');
const passwordReg = document.getElementById('passwordReg');
const notreg = document.getElementById('notreg');
const buttonReg = document.getElementById('button-reg');
const namereg = document.getElementById('Regname');

class user{
    constructor(name, cart){
        this.name = name;
        this.cart = cart;
    }
}
let loginPage ='';
var currentAccount;

const funcLogin = function(e){
    e.preventDefault();
    loginPage = '';
    document.querySelector(".main").setAttribute("id", `overlay`);
    //loginDiv.innerHTML = '<p class="close">&times</p>' + loginDiv.innerHTML;
    loginDiv.removeAttribute("hidden", '');
    const close = document.getElementById("close1");
    close.addEventListener("click", () =>{
        loginDiv.setAttribute("hidden", "")
        document.querySelector(".main").removeAttribute("id", `overlay`);
        document.getElementById('passError').setAttribute('hidden', '');
    }
    );

    // document.querySelector('.main').addEventListener('click', ()=>{
    //     loginDiv.setAttribute("hidden", "")
    //     document.querySelector(".main").removeAttribute("id", `overlay`);
    // });
}

const funcState = function(e){
    e.preventDefault();
    document.querySelector(".main").setAttribute("id", `overlay`);
    state.removeAttribute("hidden");
    const close = document.getElementById("close2");
    close.addEventListener("click", () =>{
        state.setAttribute("hidden", " ")
        document.querySelector(".main").removeAttribute("id", `overlay`);
    }
    );
    document.getElementById('name').innerHTML = `Имя: ${window.currentAccount.name}`;
}

ButtonLogin.addEventListener('click', (e)=>{
    console.log('1');
    e.preventDefault();

//     let xhr = new XMLHttpRequest();
// const url = 'http://localhost:8000/submit'; // URL, на который отправляем запрос
// const data = { 
//   name: 'John', 
//   email: 'john@example.com' 
// }; // данные, которые нужно отправить

// xhr.open('POST', url, true); // настройки запроса: метод, URL, асинхронность
// xhr.setRequestHeader('Content-Type', 'application/json'); // устанавливаем заголовок Content-Type

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const response = JSON.parse(xhr.responseText);
//     console.log(response); // выводим ответ сервера в консоль
//   }
// };

// const jsonData = JSON.stringify(data); // преобразуем объект с данными в JSON
// xhr.send(jsonData); // отправляем запрос



    if(users.find(account => account.nickname === login.value)){
        window.currentAccount = users.find(account => account.nickname === login.value);
    }
    else{
        document.getElementById('passError').removeAttribute('hidden');
    }
    console.log(window.currentAccount);
    if (window.currentAccount){
        console.log('11111');
        if (window.currentAccount.password === password.value){
            let name = window.currentAccount.name;
            let cart = window.currentAccount.cart
            window.window.currentAccount = new user(name, cart);
            loginDiv.setAttribute("hidden", '')
            document.querySelector(".main").removeAttribute("id", `overlay`);
            document.getElementById('cart').removeAttribute('hidden');
            console.log(window.currentAccount);
            startlogin.removeEventListener('click', funcLogin);
            startlogin.addEventListener('click', funcState);
        }
        else{
            document.getElementById('passError').removeAttribute('hidden');
        }
    }
}
);

startlogin.addEventListener('click', funcLogin);

buttonreg.addEventListener('click', (e)=>{
    e.preventDefault();
    notreg.setAttribute('hidden', '');
    regForm.removeAttribute('hidden');
});

buttonReg.addEventListener('click', (e) =>{
    e.preventDefault();
    if(passwordReg.value != '' && loginReg.value != '' && namereg.value != ''){
        console.log('11111');
            let name = namereg.value;
            let cart = [];
            window.currentAccount = new user(name, cart);
            loginDiv.setAttribute("hidden", '')
            document.querySelector(".main").removeAttribute("id", `overlay`);
            document.getElementById('cart').removeAttribute('hidden');
            console.log(window.currentAccount);
            startlogin.removeEventListener('click', funcLogin);
            startlogin.addEventListener('click', funcState);
    }
});



const cart = document.getElementById('cart');


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
    document.getElementById('incart').innerHTML = window.currentAccount.cart;  
});



async function Funccart (){
    const addproduct = document.getElementById('btn');
    await addproduct.addEventListener('click', (e)=>{
        e.preventDefault();
        const idProduct = addproduct.parentElement.id.split('-')[1];
        window.currentAccount.cart.push(idProduct);
    });
}