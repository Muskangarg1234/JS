let tag=document.querySelector('p');
console.log(tag);
console.dir(tag);

let id=document.querySelector("#para");
console.log(id);
console.dir(id);

let class_select=document.querySelector(".oldImg");
console.log(class_select);
console.dir(class_select);

let anchor_tag=document.querySelector("div li a");  // div ke ander ke jo li uske ander ke anchor tag
console.log(anchor_tag);
console.dir(anchor_tag);

// we want all images of class oldImg
let class_select_all=document.querySelectorAll(".oldImg");
console.log(class_select_all);
console.dir(class_select_all);

let second_img=document.querySelectorAll(".oldImg")[1];
console.log(second_img);