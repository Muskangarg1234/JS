const classInfo=[  // classInfo is array
    {
        name:"Muskan",
        age:19,
        grade: "A++",
        city:"Bathinda"
    }, 
    {
        name:"yugam",
        age:17,
        grade: "A+",
    },
    {
        name:"ankit",
        grade:"A"
    }
];
console.log(classInfo);

// index 2 details
console.log(classInfo[2]);
console.log("his name is: ",classInfo[2].name);
console.log("his grade is: ",classInfo[2].grade);

// add age =18 of index 2 student
classInfo[2].age=18;
console.log(classInfo[2]);

// add city of index 2 student
classInfo[2].city="Delhi";
console.log(classInfo[2]);

// update grade of index 1 student and add city also of that student
console.log(classInfo[1]);
classInfo[1].grade="A++";
classInfo[1].city="Kota";
console.log(classInfo[1]);