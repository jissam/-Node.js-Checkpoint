const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello Node!!!</h1>\n");
});
server.listen(3000);

const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.error("Error writing to file", err);
  } else {
    console.log("File created successfully");
  }
});

fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file", err);
  } else {
    console.log(data);
  }
});

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.error("Error writing to file", err);
  } else {
    console.log("File created successfully");
  }
});
