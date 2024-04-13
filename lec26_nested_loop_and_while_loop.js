// nested loop
for(let i=1;i<=4;i++){
    console.log(`outer loop number ${i}`);
    for(let j=1;j<=2;j++){
        console.log(j);
    }
}

// while loop
console.log("while loop forwards: ");
let i=1;
while(i<=10){
    console.log(i);
    i++;
}

console.log("while loop backwards: ");
i=5;
while(i>=1){
    console.log(i);
    i--;
}

console.log("Print even numbers from 0 to 20:");
i=0;
while(i<=20){
    console.log(i);
    i+=2;
}

// break keyword
i=1;
console.log("Print 1 and 2 with condition i<=5");
while(i<=5){
    if(i==3){
        break;
    }
    console.log(i);
    i++;
}