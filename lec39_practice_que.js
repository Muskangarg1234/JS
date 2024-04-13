// create a function that prints a poem
function poem(){
    console.log("Twinkle,Twinkle,Little Star");
    console.log("How I wonder what you are");
    console.log("Up above the world so high");
    console.log("Like a diamond in the sky");
}
poem();

// create  a function to roll a dice and always display value of dice( 1 to 6)
function dice(){
    let rand=Math.floor(Math.random()*6)+1;
    console.log("Number comes on dice is ",rand);
}
dice();