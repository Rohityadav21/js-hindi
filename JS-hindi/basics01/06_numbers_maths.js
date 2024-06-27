const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const othernumber = 4785.23423
console.log(othernumber.toPrecision(3));

const hunderds = 1000000
console.log(hunderds.toLocaleString());
console.log(hunderds.toLocaleString('en-IN'));

// +++++++++++++++++maths++++++++++++++

console.log(Math);
console.log(Math.abs(-4));  //ABSOULUTE(abs) change negative to positive
console.log(Math.round(4.3)); //round off
console.log(Math.ceil(4.3));  //higher value
console.log(Math.floor(4.3));  //lower value
console.log(Math.min(4, 3, 8, 9)); //find minimum value in the array
console.log(Math.max(4, 3, 9));  //find the maximum value in the array
console.log(Math.random()); //calues come between 0-1 
console.log(Math.random()*10); //not the value will be inn ponits 0 to 10 you can say
console.log(Math.random()*10 + 1); // now the value will start from 1 upto 11
console.log((Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.random() * (max - min +1));
console.log(Math.floor(Math.random() * (max - min +1)) + min);

