let isMomHappy=true;
let phone ={
    brand: "Samsung",
    color: "black"
};

var willIGetNewPhone=new Promise((resolve, reject)=>{
    if(isMomHappy==true){
        console.log(phone)
        resolve(phone)
    }
    else{
        console.log("mom is not happy")
        reject(new Error("mom is not happy"))
    }
});