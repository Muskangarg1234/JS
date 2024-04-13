// push method
let cars=["bmw","mercedes","tesla","ferrari"];
console.log("before push: ",cars); 
cars.push("audi"); // add to end of array
console.log("after push: ",cars); // add to end of array

// pop method
console.log("item removed: ",cars.pop()); //remove last element from array and returns
console.log("after pop: ",cars); 

// unshift method
console.log("before unshift: ",cars);
cars.unshift("audi"); // add to start of array
console.log("after unshift: ",cars);  

// shift method
console.log("item removed: ",cars.shift()); //remove first element from array and returns
console.log("after shift: ",cars);

console.log("item removed: ",cars.shift()); //remove first element from array and returns
console.log("after shift: ",cars); 



// practical example
let followers=["a","b","c"];
let blocked=[followers.shift()];
console.log("followers: ",followers);
console.log("blocked: ",blocked);
blocked.push(followers.shift());
console.log("new block list:",blocked);
console.log("new followers list:",followers);
