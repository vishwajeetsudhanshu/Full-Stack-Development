let i=1;
for(i;i<=5;i++){
    console.log(i)
};
let j=10;
for(j;j>=0;j=j-2){
    console.log("Backward Loops",j)
}


const fav_movie="RRR";
let guess=prompt("Guess My fav movie");
while(guess!=fav_movie ){
    if(guess=="quit") {
    console.log(" U Quit! Better Luck Next time!");
    break;}
    guess=prompt("Wrong guess Try Again!");
    console.log(guess)


}
if(guess==fav_movie){
    console.log("Congratulation");
}
