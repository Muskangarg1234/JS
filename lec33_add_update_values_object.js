const student={
    name:"Muskan",
    age:19,
    marks:98.8,
    city:"Bathinda"
};
console.log("Student details before updation: ",student);

// change(update) city to Mumbai
student.city="Mumbai";
console.log("Student details after updation of city: ",student);

// add new property gender:"female"
student.gender="female";
console.log("Student details after adding gender: ",student);

// change marks to "A"
student.marks="A";
console.log("Student details after updation of marks: ",student);