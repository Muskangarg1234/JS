let max=prompt("Enter the maximum number till you want to guess");
let random=Math.floor(Math.random()*max)+1;
// console.log("Random number generate: ",random);
let guess=prompt("Enter your guess");
// always enter middle number of range 
// use binary search technique to play game
// eg initially range is 1 to 100 then put 50 if large comees then put middle of 1 to 50 i.e 25 and if small comes then put middle of 50 to 100 i.e. 75 similary play game in this way
while(guess!="quit" && guess!=random){
    if(guess>random){
        guess=prompt("You guessed wrong! Hint: Try with some small number...");
    }
    else{
        guess=prompt("You guessed wrong! Hint: Try with some large number...");
    }

}
if(guess==random){
    console.log("Congratulations! You guessed right. Random number is ",random);
}
else{
    console.log("You quit game");
}