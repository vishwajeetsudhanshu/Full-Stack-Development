let day = parseInt(prompt("Enter the day (1-7)"));
console.log("Week day is",day,"So it's a");
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesdy");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
   case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong Input");
        break;


}