const name = "hitesh"
const repcount = 50

console.log(`hello my name is ${name} and my repo count is ${repcount}`);

const gameName = new String('hiteshhc')
console.log(gameName[0]);
console.log(gameName._proto_);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('t'));

const newString = gameName.substring(-8, 4)
console.log(newString);
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(url.split('-'))
