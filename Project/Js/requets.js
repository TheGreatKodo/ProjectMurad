let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xhr = new XMLHttpRequest();
export function request(){
const url = 'http://localhost:8000/submit'; // URL, на который отправляем запрос
const data = { 
  name: 'John', 
  email: 'john@example.com' 
}; // данные, которые нужно отправить

xhr.open('POST', url, true); // настройки запроса: метод, URL, асинхронность
xhr.setRequestHeader('Content-Type', 'application/json'); // устанавливаем заголовок Content-Type

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response); // выводим ответ сервера в консоль
  }
};

const jsonData = JSON.stringify(data); // преобразуем объект с данными в JSON
xhr.send(jsonData); // отправляем запрос
}
