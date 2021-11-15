// npm connect 깔아야함
const connect = require("connect");
const serveStatic = require("serve-static");
const connectRoute = require("connect-route");

const port = 8080;
const app = connect();

app.use(
  connectRoute(function (router) {
    router.get("/", function (req, resp) {
      //get 방식으로 오면 이거
      resp.writeHead(200, {
        //header 내용
        "Content-Type": "text/html",
      });
      resp.end(`<h1>get 방식</h1>`);
    });
    router.get("/user", function (req, resp) {
      // /user 오면 이거
      console.log(req._parsedUrl.query);

      req.query = {};
      params = (req._parsedUrl.query || "").split("&");
      params.forEach(function (param) {
        tokens = param.split("=");
        req.query[tokens[0]] = tokens[1];
      });

      resp.writeHead(200, {
        "Content-Type": "text/html",
      });
      resp.end(`<h1>User No: ${req.query.no} List</h1>`);
    });
    router.get("/guestbook", function (req, resp) {
      // /guestbook 오면 이거
      resp.writeHead(200, {
        "Content-Type": "text/html",
      });
      resp.end(`<h1>Guestbook List</h1>`);
    });
    router.get("/board/:no", function (req, resp) {
      // /board 오면 이거
      resp.writeHead(200, {
        "Content-Type": "text/html",
      });
      resp.end(`<h1>board : ${req.params.no}</h1>`);
    });
  })
);
app.use(serveStatic(__dirname + "/public"));

app.listen(port, function () {
  console.log(`http server running on ${port}`);
});
