const http = require("http");
const fs = require("fs").promises;

const host = "localhost";
const port = 8000;

let users;
let products;
fs.readFile("../database/usersDb.json").then((content) => (users = content));
fs.readFile("../database/productsDb.json").then(
    (content) => (products = content)
);

const requestLiner = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(users);
};

const server = http.createServer(requestLiner);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
