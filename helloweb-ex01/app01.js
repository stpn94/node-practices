const http = require("http");
const fs = require("fs");

const port = 8080;
const server = http.createServer(function (req, resp) {
  console.log(`receive request....`);
  console.log(req.url);

  if (req.url === "/") {
    req.url = "/index.html";
  }

  fs.readFile(`${__dirname}/public${req.url}`, function (error, data) {
    resp.writeHead(200, {
      //200 = 옼케이
      //header 내용
      "Content-Type": "text/html",
    });
    resp.end(`<h1>Hello World</h1>`);
  });
});

server.listen(8080, function () {
  console.log(`http server running on ${port}`);
});
