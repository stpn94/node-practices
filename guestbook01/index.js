const express = require("express");
const http = require('http');
const path = require("path")


const guestbookRouter = require("./routes/guestbook")
const port = 8080;


//Routers 


// Application Setup 
const application = express()
// 1. static serve
.use(express.static(path.join(__dirname , "public")))   //  정적 파일들 등록
.use(express.urlencoded({extended: true}))    //  확장
.use(express.json())
.set("views",  path.join(__dirname , "views")) // views 패스 등록
.set("view engine" , "ejs")  // ejs 뷰 등록
// 3. request router
.all('*' , function(req , res , next){ // 모든 경로에서 받는다
    res.locals.req = req; 
    res.locals.res = res;
    next();
})
.use('/' , guestbookRouter) //  절대 경로 받는다

//.use('/user' , userRouter);
// Server Setup
http.createServer(application)
.on("listening" , function(){
    console.info(`Http Server running on port ${port}`)
})
.on("error" , function(error){
 switch(error.code){
    case 'EACCESS':
        console.error(`Port: ${port} requires privileges`)
        process.exit(1);
        break;
    case 'EADDRINUSE':
        console.error(`Port: ${port} is alrady in use`)
        process.exit(1);
        break;
    default: 
         throw error;
 }
})
.listen(port);

