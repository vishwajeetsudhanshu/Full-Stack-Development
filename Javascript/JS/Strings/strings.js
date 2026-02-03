const name="Sanny"
const repoCount=50
console.log(name+repoCount+"Value")
console.log(`Hello My Name is ${name} and my repocount is ${repoCount}`)
//String Declare
const gameName=new String('Sudhanshu-vks')
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'))
console.log(gameName[0])

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,13)
console.log(anotherString)

const newStringone="    Sanny      ";
console.log(newStringone);
console.log(newStringone.trim())

const url="https;//hitesh.com/sanny%20.com";
console.log(url.replace('%20','-'))
console.log(url.includes('Sudhasnshu'))

console.log(gameName.split("-"))
