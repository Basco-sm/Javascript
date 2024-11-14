//Aloop is a programming construct used to repeat a block of code multiple
//times until a specific condition is met.





//initialization: let i = 0 sets the starting point 
//condition: i < 5 keeps the loop running while i is less than 5
//increment: i++ increases i by 1 after each loop iterates





for (let i = 0; i   < 5; i++) {
    console.log(i);
}
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i);
}
for (let i = 0; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
const fruits = ["apple", "banana", "orange", "mango", "grape"]

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (let i = 0; i < fruits.length; i++){
    if (i === 3) break;
    console.log(fruits[i]);
}
for (let i = 0; i < fruits.length; i++){
    if (i === 2) continue;
    console.log(fruits[i]);
}
//while loop: is used when the number of iteration isn't known beforehand.
//It keeps running as long as the condition is true.
while (condition) {
    //code to be executed
}

let i = 0
while (i < 5) {
    console.log(i);
}

//do...while loop: ensures that the block of code runs at leas once before checking the condition.
/*do{
    //code to be executed
} while (condition);
*/
let x = 0;
do {
    console.log(x);
    x++;
} while (x < 5);
//break;

