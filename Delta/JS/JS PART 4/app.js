// for(let i =1; i<=10;i++){
// console.log(i);
// }

// for(let i=1;i<=15;i++){
//     if(i%2!= 0){
//         console.log(i);
//     }
// }

// for(let i=1;i<=15;i=i+2){
// console.log(i);
// }
 
// for(leti=15;i>=1;i=i-20){
//     console.log(i);
// }
// for(let i=2;i<=15;i=i+2){
//     console.log(i);
// }
// let n=prompt("write your number");
// n= parseInt(n);
// for(let i =n;i<=n*10;i=i+n){
//     console.log(i);
// }
//  for(let i =1;i<=3;i++){
//     console.log("outer loop " ,i);
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
//  }

//while(conditon){
//do something
 
//}

// let i=1
// while(i<=10){
// console.log(i);
// i++}

// const favmovie="PK";

// let guess =prompt(" guess favmovie ");

// while((guess!= favmovie)&&(guess != "quit")){
//    guess=prompt("wrong guess.please try again")
// }
// if (guess == favmovie){
//     console.log("congrats!!");
// }else{
//     console.log("u quit");
// }
// let i= 1
// while(i<=5){
//     if(i==3){
//         break;
//         }
//         console.log(i);
//         i++;
// }
// console.log("we used to break key word");

//loops with Arrays
// let fruits=["mango","apple","banana","litchi","orange"];
// fruits.push("pineapple")

// for(let i=0; i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }

//nested Arrays
// let heroes=[["iron man","spiderman","thor"],["superman","wonder woman","flash"]];

// for (let i=0;i<heroes.length;i++){
//     console.log(`list #${i}`);
//     for(let j=0;j<heroes[i].length;j++){
//         console.log(heroes[i][j]);
//     }
// }

//for o loop
//for(element of collection){
//do something
//}

let fruits=["mango","apple","banana","litchi","orange"];
for(i of fruits){
    console.log(i);
}