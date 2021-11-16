const http = require("http");
const path = require("path");
const express = require("express");

const mainRouter = require("./routes/main");
const helloRouter = require("./routes/hello");
const userRouter = require("./routes/user");

const port = 8080;

//Application Setup
const application = express()
  // 1. static resources
  .use(express.static(path.join(__dirname, "public")))
  // 2. request body parser
  .use(express.urlencoded({ extended: true })) //application/x-www-form-urlencoded
  .use(express.json()) //application/json
  // 3. view engine setup
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs") // 제이드도 많이 쓴다. 스크립틀릿을 배웠기 때문에 ejs를 선택
  // 4. request router
  .all("*", function (req, res, next) {
    res.locals.req = req;
    res.locals.res = res;
    next();
  })
  .use("/", mainRouter)
  .use("/hello", helloRouter)
  .use("/user", userRouter);
// Server Setup
http
  .createServer(application)
  .on("listening", function () {
    console.info(`http server suns on ${port}`);
  })
  .on("error", function (error) {
    switch (error.code) {
      case "EACCESS":
        console.error(`${port} requires privileges 권한이 필요함니다`);
        process.exit(1); // 1을 적으면 비정상 종료, 0은 정상종료
        break;
      case "EADDRINUSE":
        console.error(`${port} is already in use 이미 사용중인 포드입니다.`);
        process.exit(1); // 1을 적으면 비정상 종료, 0은 정상종료
        break;
      default:
        throw error;
    }
  })
  .listen(port);
