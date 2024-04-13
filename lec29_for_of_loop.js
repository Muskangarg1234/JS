let fruits=["apple","mango","banana","orange","pear"];
let fruit;
for(fruit of fruits){
    console.log(fruit);
}

let char;
for(char of "muskan"){
    console.log(char);
}
console.log("");

// nested for of loop
let heroes=[["ironman","spiderman"],["superman","flash","wonder woman"]];
for(list of heroes){
    console.log(list);
    for(hero of list){
        console.log(hero);
    }
}