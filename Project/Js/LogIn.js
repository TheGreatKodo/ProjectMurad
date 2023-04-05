import users from '../database/usersDb.json' assert {type: 'json'};
const login = document.getElementById('login');
const password = document.getElementById('password');
const ButtonLogin = document.getElementById('button-login');
const startlogin = document.getElementById('account');
const cartButton = document.getElementById('cart');
const loginDiv = document.getElementById('login-page');
const state = document.getElementById('state');
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
    if(users.find(account => account.nickname === login.value)){
        currentAccount = users.find(account => account.nickname === login.value);
    }
    else{
        document.getElementById('passError').removeAttribute('hidden');
    }
    console.log(currentAccount);
    if (currentAccount){
        console.log('11111');
        if (currentAccount.password === password.value){
            let name = currentAccount.name;
            let cart = currentAccount.cart
            window.currentAccount = new user(name, cart);
            loginDiv.setAttribute("hidden", '')
            document.querySelector(".main").removeAttribute("id", `overlay`);
            document.getElementById('cart').removeAttribute('hidden');
            console.log(currentAccount);
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

