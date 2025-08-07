// function hello(){
//     console.log("PZ")
// }

//  hello();

//  function printName(){
//     console.log(prompt("Enter your name"))
//  }

//  //printName();

//  function print1to5(){
//     for(let i=1;i<=5;i++){
//         console.log(i);
//     }
//  }
//  //print1to5();

//  function isAdult(){
//     let age=18;
//     if(age>=18){
//         console.log("adult");

//     }else{
//         console.log("not adult");
//     }
//  }
//  isAdult();

//Func wit Arguments
//function funcName(arg1,arg2..){
//do something
//}

// function printInfo(name ,age){
// console.log(`${name} age is ${age}`);
// }

// printInfo("PRANAV",21)

// function sum(a,b){
//     console.log(a+b);
// }
// sum(1,2);
// sum(5,7);

// let odd=function(n){
//     console.log(!(n%2==0));
// }

// let even =function(n){
//     console.log(n%2==0);
// }

// function oddOrEvenFactory(request){
//     if (request=="odd"){
//         let odd=function(n){
//     console.log(!(n%2==0));
// }
// return odd;
//         }else if(request=="even"){
//             let even =function(n){
//     console.log(n%2==0);
// }
// return even;

//         }else{
//             console.log("wrong request")
//         }
//     }

// let request="odd";

//method

const calculator={
    num:55,
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }

};