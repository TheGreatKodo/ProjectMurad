import users from '../database/usersDb.json' assert {type: 'json'};
const login = document.getElementById('login');
const password = document.getElementById('password');
const ButtonLogin = document.getElementById('button-login');

class user{
    constructor(name, cart){
        this.name = name;
        this.cart = cart;
    }
}

let currentAccount;
ButtonLogin.addEventListener('click', (e)=>{
    e.preventDefault();
    if(users.find(account => account.nickname === login.value)){
        currentAccount = users.find(account => account.nickname === login.value);
    }
    else{
        /////////////////

        console.log('11');
    }
    console.log(currentAccount);
    if (currentAccount){
        if (currentAccount.pin === Number(password.value)){
        currentAccount = new user(currentAccount.name, currentAccount.cart);
    }}
});