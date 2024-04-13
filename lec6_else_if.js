// else if
let marks=90;
if(marks>=80){
    console.log("Grade: A");
}
else if(marks>=65){
    console.log("Grade: B");
}
else if(marks>=45){
    console.log("Grade: C");
}
else if(marks>=33){
    console.log("Grade: D");
}
else if(marks<33){
    console.log("Grade: F");
}

//  if else
let age=11;
if(age>=18){
    console.log("you can vote");
}
else{
    console.log("you cannot vote");
}

// nested if-else
let score=90;
if(score>=33){
    if(score>=80){
        console.log("Grade is A");
    }
    else if(score>=45){
        console.log("Grade is B");
    }
    else{
        console.log("Grade is C");
    }
}
else{
    console.log("Grade is F. Better Luck next time!");
}