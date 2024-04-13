const classInfo={  // classInfo is object
    muskan:{
        marks:"A+",
        age:19,
        city:"Bathinda"
    },  
    yugam:{
        marks:"A++",
        age:17,
        city:"Kota"
    },
    ankit:{
        marks:"A",
        age:18,
        city:"Delhi"
    }
};
console.log("All student details: ",classInfo);
console.log("Yugam details are as follows: ",classInfo.yugam);
console.log("Muskan age is: ",classInfo.muskan.age);

// change the city of yugam to bathinda
classInfo.yugam.city="Bathinda";
console.log("Yugam details are as follows after updation: ",classInfo.yugam);