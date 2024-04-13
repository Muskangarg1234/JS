let arr=[1,2,3,4];
let double=arr.map(function(el){
    return el*2;
});
console.log(double); // output=[2,4,6,8]


// this is also fine but corresponding elements not mapped in new array:
// let arr=[1,2,3,4];
// arr.map(function(el){
//    console.log(el*2);
// });
// output-> 2 4 6 8 (every element in new line)

let student=[
    {
        name:"Muskan",
        marks:99
    },
    {
        name:"Yugam",
        marks:98
    },
    {
        name:"Anshika",
        marks:95
    }
];

// convert percentage of all students to gpa using map method
let gpa=student.map((stud)=>{
    return stud.marks/10;
});
console.log(gpa);