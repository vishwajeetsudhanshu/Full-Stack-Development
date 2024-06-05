let i=1;
for(i;i<=5;i++){
    console.log(`outer loop ${i}`);
    for(let j=1;j<=5;j++){
    console.log(j)}
};


let heros=[['ironman','spiderman','thor'],
    ['superwoman','wonder woman','flash']];
for (let j=0; j<heros.length; j++){
    console.log(`List #${j}`);
    for (let k=0 ; k<heros[j].length; k++){
        console.log(heros[j][k]);
    }
}

let student=[['aman',95],['anku',89],['anu',99]];
console.log(student);
for(let m=0;m<student.length;m++){
    console.log(`Info. of student #${m+1}`)
    for(let n=0;n<student[m].length;n++)
        console.log(student [m][n]);
}
// for of loop
let fruits=['mango','apple','banana','litchi','orange'];
for(fruit of fruits){
    console.log(fruit)
}
// nested for of loop

let heroes=[['ironman','spiderman','thor'],
    ['superwoman','wonder woman','flash']];
for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}