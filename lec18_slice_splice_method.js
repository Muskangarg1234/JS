// slice method
let colors=["red","yellow","blue","orange","pink","white"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2,3));
console.log(colors.slice(3,10));
console.log(colors.slice(10));
console.log(colors.slice(-2));
console.log(colors.slice(-10));

// splice method
console.log("Deleted items from array: ",colors.splice());
console.log("Colors array: ",colors);  // no item deleted
console.log("Deleted items from array: ",colors.splice(3));
console.log("Colors array: ",colors); // from index=3 delete all items from array
console.log("Deleted items from array: ",colors.splice(1,0,"pink","white","brown"));
console.log("Colors array: ",colors);  // at index=1 add pink,white,brown and no item deleted
console.log("Deleted items from array: ",colors.splice(2,3));
console.log("Colors array: ",colors); // from index=2 delete 3 items from array
console.log("Deleted items from array: ",colors.splice(1,1,"white"));
console.log("Colors array: ",colors);  // pink replaced by white 