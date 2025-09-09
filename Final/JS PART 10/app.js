let btns=document.querySelectorAll("button");
// console.dir(btn);

for(btn of btns){
    // btn.addEventListener("click",sayhello);
    // btn.addEventListener("click",sayName);
     btn.addEventListener("dblclick",function(){
        console.log("You can do it") ;
     });
    // btn.onclick=sayhello;
    // btn.onclick=sayName;
   
    // btn.onmouseenter= function (){
    //     console.log("hi");
    // };
    //  console.dir(btn);
}
function sayhello(){
alert("hello!");
}
function sayName(){
    alert ("Pranav ")
}

// btn.onclick = sayhello; 