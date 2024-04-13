// Q1-> random number from 1 to 6
let random=Math.floor(Math.random()*6)+1;
console.log("digit comes on dice is ",random);

// Q2-> create object car with properties name, model, color
const car={
    name: "Audi",
    model: "Audi A4",
    color: "Black"
};
console.log("Car name is ",car.name);

// Q3-> create object person with name, age, city
const person={
    name:"Muskan",
    age:19,
    city:"Bathinda"
};
console.log("Before updation city is ",person.city);
person.city="New York";
console.log("After updation city is ",person.city);
person.country="United States";
console.log("Person details are as follows : ",person);