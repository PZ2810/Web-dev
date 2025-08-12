// function sum(a,b=30){
//     return a+b;
// }
// console.log(sum(3));

// spread
// const data={
//     email:"ironman@gmail.com",
//     password:"abcd",
// };

// const dataCopy={...data,id:123,country:"India"};

// let arr=[1,2,3,4,5];
// let obj1 ={...arr};

//Rest
 
// function sum(...args){
//     //arguments
//     for (let i=0;i<args.length;i++){
//         console.log("you gave us :" ,args[i]);
//     }
// }

 function sum(...args){
    return args.reduce((sum,el)=>sum+el);
 }