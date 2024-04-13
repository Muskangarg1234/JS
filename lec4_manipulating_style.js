let heading=document.querySelector("h1");
heading.style.color="green";  // inline style will set so priority high
heading.style.backgroundColor="yellow";

let links=document.querySelectorAll("div ul a");
let link;
for(link of links){
    link.style.color="red";
}