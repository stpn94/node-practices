1. 패키지
    주로설치하는 패키지
    - 완전한 애플리케이션 ex) devtools(nodedaemon, babel, webpack)
    - 프로젝트에서 사용하는 모듈(라이브러리) ex)리엑트도 라이브러리다.

2. 의존성(dependency)
    배포할때 개발할때 쓴 패키지들을 모두 배포 할 필요 없다.
    ex) /modules 안에 /바벨 /웹팩 등이있는데 그건 배포할때 뺀다
    /package.json; 안에 설정 되어있을 것이다.
    /package.json.lock; 
    그래서 일반 의존성, 개발 의존성 잘 구분해서 설치해야한다.
    - 개발하고 있는 프로젝트(애플리케이션, 패키지)에서 설치하고 사용하는 다른 패키지
    - 일반 의존성
      - 개발하고 있는 프로젝트에서 사용하는 패키지로 꼭 배포에 꼭 포함
      - 설치하는 법은
        $ npm i(인스톨)
    ejs-뷰 만들때 쓴다. 
```
PS C:\douzone2021\eclipse-workspace\node-practices> cd project-ex01
PS C:\douzone2021\eclipse-workspace\node-practices\project-ex01> npm -version
6.14.15
PS C:\douzone2021\eclipse-workspace\node-practices\project-ex01> npm i ejs
```
```
/-project
    /-node-modules
    /-package.json --> manifest (설명하는 놈이다. java에서 pom.xml 비슷한놈)
    /-package-lock.json --> lib---의존-->lib02 그러면 자식의 라이브러리가 업데이트되면 문제가 되었다. 그래서 lock.json에서 설정 해 준다. 만약없으면 버젼관리문제가 생긴다.
```
    - 개발 의존성
        - 개발에 필요하거나 도움이 되는 패키지(ex)dev tools) 배포에 포함되지 않는다.
        - $ npm i -D 
3. 패키지 설치 방식
    1. 전역(글로벌) 설치: 여러 프로젝트에서 공통으로 사용하는 도구 설치
        - $ npm i -g
        - gulp 개발할때는 빌드툴을 설치해 보자
        - npx를 쓰면 글로벌 툴을 간편하게 사용가능한다.
    2. 지역(project local)설치 : 특정 프로젝트에만 종속적인 도구나 라이브러리들
        - $ npm i
        - $ npm -D
    3. 패키지 설치
        1. [project-ex01]에서 $ npm i ejs         (local install, general dependency)   
        2. [project-ex01]에서 $ npm i -D nodemon  (local install, development dependency)   
        3. [project-ex01]에서 $ npm i -g gulp     (global install, development dependency)   
    4. 패키지 삭제
        1. [project-ex01]에서 $ npm un ejs         (local uninstall)   
        2. [project-ex01]에서 $ npm un -D nodaemon  (local uninstall)   
        3. [project-ex01]에서 $ npm un -g gulp     (global uninstall)
4. Node(JavaScript) Project(클라이언트, 서버, 어플리케이션 뿐만 아니라 라이브러리(package) 만들때) 생성 = 메이븐 센트롤 레파지토리??
    1. 프로젝트 디렉토리 생성 (mkdir)
    2. 프로젝트 이동         (cd)
    3. [project-ex01] $ npm init -y (-y는 물어보는건 다 yes로 한는거)(프로젝트 매니페스트 파일(package.json) 생성, 프로젝트 초기화)
```
Create React App = CRA
```

5. 모듈 (npm 사이트에 올리고 다운받고 리콰이어 문법 공부 리엑트하기전에 리콰이어로 바벨 설정같은거 한다., 리엑트는 ES6을 지원한다.)
    1. 코어 모듈 (npm으로 인스톨하는 놈들은 아님)(fs, os, ..... node에서 제공해 주는 모듈)
    2. 파일 모듈 (내가만든 모듈) : 파일 경로로 불러와서 모듈안의 객체, 함수 클래스를 사용한다.
    3. npm 모듈 npm을 통해서 node_modules에 설치해놓고 사용(emaillist 만드는데 노드 모듈스에서는 익스프레스.js 다운받고 컨트롤러 만들고 라우터 만들고 그럼 라우터에 있는걸 컨트롤러가 가져다 쓴다. index.js는 내장모듈(코아모듈)을 쓴다.)
        - 로컬 배포 
        - 원격 배포 (npmjs.com)
6. npmjs.com npm registry에 패키지 배포
   1. 사용자 등록(회원가입)
   2. 배포
      1. $npm adduser
      2. $npm publish
   3.  [project-ex03]

7. javascript module system
    1. common.js (require.js) 2015년 전까지 개발 할 때 사용
    2. AMD
    3. ES6(es2015, es harmony) module 지원(표준)
```
require.js

/* 이게 모듈을 사용하는거다 이해가나? */
/* 모듈을 사용하는 애플리케이션 */
var App = require("./app.js");

console.log(App());
/* 원리만 알면 안 해깔림 */
/* require 코드가 돌때 */
/* ▽ */
/* ▽ */
/* ▽ */
/* 1. require 안에서 module.export = {} 이렇게 객체가 생김 */
/*    exports = module.exports          이거도 그 객체를 가르친다. */
/* 2. 그 안의 코드를 실행               니가 작성한 모듈안의 코드들 실행 */
/*  2-1 exports.f = function(){};       */
/*  2-1 exports.i = 10;                 */
/* 3. return module.exports;           이렇게 리턴된다 */

/* 리콰이어가 모듈을 만들어 놨는데 exports를 또 만들면 복잡해진다. 아예 안적았다. 참고해라*/
중요! 객체 하나를 리턴하는거다.
```

7. helloweb-ex01: 맨바닥에서 웹애플리케이션 만들어 보기(whit out express)
    1. app01 : based on http : core module(내장되어있는거다.)
    2. app02 : based on http, fs: core module
    3. app03 : based on connect, serve-static : $npm package
    4. app04 : based on connect, serve-static : connect-route: $npm package

8. helloweb-ex02: express 프레임워크 기반의 웹애플리케이션 만들기 ($npm i express)