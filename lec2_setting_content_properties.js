let para=document.querySelector("p");
console.log(para.innerText);// here marvel comics will not display 
console.log(para.innerHTML);
console.log(para.textContent);  // here marvel comics will display although its display set to none

// DOM Manipulation
// para.innerText="<b>hii </b>everyone" 

// here we want to change Markup so use innerHTML
para.innerHTML="<b>hii </b>everyone";

let heading=document.querySelector("h1");
// heading.innerHTML="<u>Spider Man</u>";
heading.innerHTML=`<u>${heading.innerText}</u>`;
console.log(heading.innerText);