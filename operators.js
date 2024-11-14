//Arithmetic Operators
//1, additions
let sum = 5 + 3;
console.log(sum);

// 2, subtractions
let difference = 10-4;
console.log(difference);

// 3, multiplication
let product = 7 * 2;
console.log(product);

// 4, division
let quotient = 20 / 4;
console.log(quotient);

// 5, remainder
let remainder = 20 % 3;
console.log(remainder);

// 6, power
let power= 2**10;
console.log(power);

//Assignment Operators
// 1, Assignment
let x = 5;
console.log(x);

// 2, addition assignment
let y = 5;
y += 2
console.log(y);

// 3, subtraction assignment
let z = 10;
z -= 2
console.log(z);
//CONDITIONAL STATEMENT
let fruit = "apple";
switch(fruit) {
    case "banana":
    console.log("it's a banana");
    break;
    case "apple":
    console.log("it's an apple");
    break;
    case "orange":
    console.log("it's an orange");
    break;
    default:
    console.log("unknown fruit");
}
let temperature = 15;
if (temperature > 25) {
    console.log("It's a hot day")
} else if (temperature < 15) {
    console.log("It's a cold day")
} else{
    ("It's a warm day")
}
const value = 'apple';
    const fruits = ['apple', 'banana', 'orange'];
switch (true) {
    case fruits.includes(value):
        console.log('${value} is in the fruit array.');
        break;
    default:
        console.log('${value} is not in the fruit array.');
}