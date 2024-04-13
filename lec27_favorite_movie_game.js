// we have to make a game in which user has to guess my favorite movie. user can quit any time.

const my_fav_movie="3 idiots";
let guess=prompt("Guess my favorite movie");
// while(guess!=my_fav_movie && guess!="quit"){
//     guess=prompt("wrong guess!! Please Try again");
// }

// if(guess==my_fav_movie){
//     console.log("Congratulations! You guess right");
// }
// else{
//     console.log("You quit the game");
// }

// using break keyword
while(guess!=my_fav_movie){
    if(guess=="quit"){
        console.log("you quit the game");
        break;
    }
    guess=prompt("wrong guess!! Please Try again");
}

if(guess==my_fav_movie){
    console.log("Congratulations! You guess right");
}