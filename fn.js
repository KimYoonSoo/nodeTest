/*
function hello() {
  console.log('Hello');
}
*/

/*
var hello = function() {
  console.log('Hello');
}
*/ 

var hello = () => {
    console.log('Hello');
} 

function testHello(myfn) {
    myfn();
}

testHello(hello);


// 1. 함수 선언문 방식
function add1(a, b) {
    console.log(`add1 결과: ${a + b}`);
    return a + b;
}

// 2. 함수 표현식 방식
const add2 = function(a, b) {
    console.log(`add2 결과: ${a + b}`);
    return a + b;
}

// 3. 화살표 함수 방식
const add3 = (a, b) => {
    console.log(`add3 결과: ${a + b}`);
    return a + b;
}

// 함수를 매개변수로 받는 테스트 함수
function testAdd(addFn) {
    console.log("\n함수 테스트:");
    addFn(1, 2);
}

function check() {
    const add3 = (a, b) => {
        console.log(`add3 결과: ${a + b}`);
        return a + b;
    }

    return add3
}

var myfunc = check()