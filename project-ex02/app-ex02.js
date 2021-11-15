/*
douzone-stpn94-math npm 모듈로 테스트 (모듈 패키지 : 로컬 배포)

$npm i ../douzone-stpn94-math
명령으로 설치 후 테스트 할 것

*/

// math 모듈안에
// module.exports 객체하나를 밖으로 보낼수 있다.
// dzMath는 module.exports로 보낸 객체
var dzMath = require("douzone-stpn94-math");

console.log(dzMath.sum(10, 20, 30, 40, 50));
console.log(dzMath.max(10, 20, 30, 40, 50));
console.log(dzMath.min(10, 20, 30, 40, 50));
