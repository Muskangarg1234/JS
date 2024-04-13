let names=["tony","bruce","steve","peter","abc","xyz"];
// let [winner,runnerUp]=names;
// console.log(winner);
// console.log(runnerUp);

let [winner,runnerUp,...others]=names;  // Array destriucturing
console.log(winner);
console.log(runnerUp);
console.log(others);  // using rest 


// destructuring for objects

const student={
    name:"muskan",
    age:19,
    branch:"CSE",
    username:"muskan888",
    password:"abcd",
    city:"Bathinda"
};
console.log(student);
// let{username,password,city}=student;
// console.log(username);
// console.log(password);
// console.log(city);

// different variable name also possible
let{username:user,password:pass,city:place="Mumbai"}=student; 
// city set to default value i.e if city not mentioned in student object then Mumbai will be city.
console.log(user);
console.log(pass);
console.log(place);