// Q1
let inp=document.createElement("input");
let button=document.createElement("button");
button.innerText="Click me!";

let body=document.querySelector("body");
body.append(inp);
body.append(button);

// Q2
inp.placeholder="Username"
button.id="btn";

// let id=button.id;
// console.log(id);

// Q3
let old_button=document.querySelector("#btn");
old_button.style.color="white";
old_button.style.backgroundColor="blue"

// Q4
let h1=document.createElement("h1");
h1.innerText="DOM Practice";
h1.style.color="purple";
h1.style.textDecoration="underline";

body.append(h1);


// Q5
let p=document.createElement("p");
p.innerHTML="Apna College <b>Delta</b> Practice"
body.append(p);