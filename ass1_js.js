//q1
let num=100;
if(num%10==0){
    console.log("good");
}
else{
    console.log("bad");
}

//q2
let name=prompt("Enter your name");
let age=prompt("Enter your age");
alert(`${name} is ${age} years old`);

//q3
let quarter=4;
switch(quarter){
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default:
        console.log("Not a Quarter!");
}

//q4
let str="Alisha";
if((str[0]=='A' || str[0]=='a') && str.length>5){
    console.log("Golden string");
}
else{
    console.log("Not a Golden string");
}

//q5
let num1=31;
let num2=75;
let num3=98;
if(num1>num2 && num1>num3){ 
    console.log(`The largest number among three numbers is: ${num1}`);
}
else if(num2>num1 && num2>num3){
    console.log(`The largest number among three numbers is: ${num2}`);
}
else{
    console.log(`The largest number among three numbers is: ${num3}`);
}

//q6
let n1=3212;
let n2=47852;
if(n1%10===n2%10){
    console.log("Both numbers have same last digit");
}
else{
    console.log("Both numbers have different last digit");
}