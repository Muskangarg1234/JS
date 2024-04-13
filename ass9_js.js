// Q1
let div=document.querySelector("div");
div.addEventListener("mouseout",function(){
    console.log("Pointer exit"); // mouseout means when we out from the element
});

let input=document.querySelector("input");
input.addEventListener("keypress",function(){  // keypress is not used frequently. we prefer to use keyddown
    console.log("character key pressed"); 
});

let p=document.querySelector("p");
p.addEventListener("scroll",function(){ // scroll event fires when we scro;ll element
    console.log("You are scrolling element");
});

window.addEventListener("load",function(){ // here window object used
    console.log("Page loaded"); // load event is fired when whole page is loaded 
});

// Q2
let btn=document.createElement("button");
btn.innerText="Click me!"
let body=document.querySelector("body");
body.append(btn);

btn.addEventListener("click",function(){
    btn.style.backgroundColor="green";
})

// Q3
