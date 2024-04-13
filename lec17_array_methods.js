// indexOf method
let primary=["red","yellow","green"];
console.log(primary.indexOf("green"));
console.log(primary.indexOf("red"));
console.log(primary.indexOf("blue"));
console.log(primary.indexOf("Green"));

// includes method
console.log(primary.includes("green"));
console.log(primary.includes("blue"));
console.log(primary.includes("Red"));

// conacat method
let secondary=["blue","yellow","red"];
console.log("concatenation results: ",primary.concat(secondary)); // makes new array
console.log("Primary Array: ",primary);  // original array will not change
console.log("Secondary Array: ",secondary);
console.log("concatenation results: ",secondary.concat(primary)); 

// reverse method
console.log("reverse of primary: ",primary.reverse());
console.log("primary array: ",primary);  // primary array will also change
// to get same initial primary array again reverse it
primary.reverse();
console.log("primary array: ",primary); 