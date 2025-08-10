// set timeout (Print after time single time)

// console.log("hi there");

//     setTimeout(  ()=>{
//         console.log("Pranav")

//     },4000)
// console.log("welcome");

// Set Interval()   (print contiously after )

    // setInterval( ()=>{
    //     console.log("Pranav Zhawar")

    // },2000);
 
    // to stop assign it to id 
    //and then use clearid


  const sq=  (n)=>n*n;
   console.log (sq(2));

   let id = setInterval( ()=>{
    console.log("hello");

   },2000);

   setTimeout( ()=>{
    clearInterval(id);
    
   },10000);