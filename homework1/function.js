//1. 함수 선언식 실습 - 호이스팅 영향O
function addNum(x, y) {
    console.log(x + y);
}

addNum(2, 3);


//2. 함수 표현식 실습 - 호이스팅 영항X

var addStr = function (x, y) {
    console.log(x + y);
}
addStr("함수", " 표현식");


// 2.1 화살표 함수
var addBool = (x, y) => {
    console.log(x + y);
}

addBool(true, false);