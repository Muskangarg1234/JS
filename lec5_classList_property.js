let image=document.querySelector(".images img");
console.log(image.classList);

let heading=document.querySelector("h2");
console.log(heading.classList);

// add class
heading.classList.add("green");
console.log(heading.classList);

// console.log(image.classList);
// image.setAttribute("class","imag");  // set class of image object to imag although image object has previously 2 classes but 2 classes set to only one class
// console.log(image.classList);

// remove class
image.classList.remove("start_img");
console.log(image.classList);


// contains method
let check=image.classList.contains("start_img");
console.log(check);

check=image.classList.contains("oldImg");
console.log(check);

// toggle method
let return_val=image.classList.toggle("oldImg");  // class exist so remove it
console.log(return_val);
console.log(image.classList);

return_val=image.classList.toggle("start_img"); // class not exists so add it
console.log(return_val);
console.log(image.classList);