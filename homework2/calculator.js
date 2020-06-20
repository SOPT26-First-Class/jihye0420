// function add(a, b){
//     return a+b;
// }

// function subtract(a,b){
//     if(a>b){
//         return a-b;
//     }
//     else if(b>a){
//         return b-a;
//     }
//     else return 0;
// }

// function multiply(a,b){
//     return a*b;
// }

// function divide(a,b){
//     return a/b;
// }

// module.exports=add;
// module.exports=subtract;
// module.exports=multiply;
// module.exports=divide;

//함수로 객체로 ->함수로 했을때는 모듈을 해야하므로 정리해보기!

module.exports={
    sum : (a, b)=>{
        return a+b;
    },
    subtract : (a, b)=>{
        return a-b;
    },
    multiply : (a, b)=>{
        return a*b;
    },
    divide : (a, b)=>{
        return a/b;
    }
}