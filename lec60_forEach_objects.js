// Array of objects
let arr=[
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
arr.forEach(function(student){
    console.log(student.marks);
});

for(let i=0;i<arr.length;i++){
    console.log(arr[i].marks);
}

for(student of arr){
    console.log(student.marks);
}