let btns=document.querySelectorAll("button");
// console.dir(btn);

for(btn of btns){
    btn.onclick=sayhello;
   
    btn.onmouseenter= function (){
        console.log("hi");
    };
     console.dir(btn);
}
function sayhello(){
alert("hello!");
}

// btn.onclick = sayhello; 