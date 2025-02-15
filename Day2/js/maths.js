const PI = Math.PI;
console.log(PI);

//Rounding
console.log(Math.round(PI));

console.log(Math.round(9.81));

console.log(+PI.toFixed(2));

const P2 = 7.8191;
console.log(+P2.toFixed(1));

console.log(Math.ceil(P2));
console.log(Math.floor(P2));

//Minimum value
let nums = [1,-5, 21, 30];
console.log(Math.min(...nums)); // The ... is spread operator that spreads the elements of array so that they can be passed individually.

//Maximum value
console.log(Math.max(1,-5, 21, 30));

//Random Number
console.log(Math.random());
console.log(Math.floor(Math.random()*10)); // random number between 0 and 10;

//absolute
console.log(Math.abs(-34.5));

//Square root
console.log(Math.sqrt(2));

//Power
console.log(Math.pow(3,2));
console.log(3**2);

//base E
console.log(Math.E);
console.log(Math.log(2))

console.log(Math.LN10);

//trigonometery
console.log(Math.sin(30));