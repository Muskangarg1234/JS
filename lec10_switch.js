let color="green";
switch(color){
    case "red":
        console.log("Stop");
        break; // imp to mention otherwise all case execute either value match or not
    case "yellow":
        console.log("Slow down");
        break;// imp to mention otherwise all case execute either value match or not
    case "green":
        console.log("Go");
        break;// imp to mention otherwise all case execute either value match or not
    default:
        console.log("Light Broken");
}
console.log("after switch statement");


// practice que
let day=7;
switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log("Wrong number");
}