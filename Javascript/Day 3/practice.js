let fav_movie="RRR";
let guess=prompt("Guess My fav movie");
while(guess!=fav_movie && guess!="quit"){
    
    guess=prompt("Wrong guess Try Again!");
    console.log(guess)


}
if(guess==fav_movie){
    console.log("Congratulation");
}
else{
    console.log(" U Quit! Better Luck Next time!");
}