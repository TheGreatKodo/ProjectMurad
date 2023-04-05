const http = require("http");
const url = require("url");
const fs = require("fs");
const User = require("../Js/User");
const { stringify } = require("querystring");
let rawdata = fs.readFileSync("../database/usersDb.json");
let usersDb = JSON.parse(rawdata);

const port = 8000;

http.createServer(function (req, res) {
    // Установка заголовков
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    // Обработка запросов
    if (req.method === 'GET' && req.url === '/data') {
      // Обработка GET запроса на адрес /data
      res.statusCode = 200;
      res.end(JSON.stringify({ data: 'Hello, world!' }));
    } else if (req.method === 'POST' && req.url === '/submit') {
      // Обработка POST запроса на адрес /submit
      let body = '';
  
      req.on('data', function (chunk) {
        body += chunk;
      });
  
      req.on('end', function () {
        console.log(JSON.parse(body));
        res.statusCode = 200;
        res.end('Data received');
      });
    } else {
      // Возврат ошибки при неверном запросе
      res.statusCode = 404;
      res.end('Not found');
    }
  }).listen(port, function () {
    console.log('Server started on port 8000');
  });

// function ppx() {
//     fetch(`http://localhost:8000/registraton`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: "nickname=sasa",
//     });
// }
// ppx();
