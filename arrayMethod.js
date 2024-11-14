const fruits = ["Apple", "Banana", "Cherry"]

//Adding to the end
fruits.push("Mango");
console.log(fruits);

//Adding to the beginning
fruits.unshift("Grape");
console.log(fruits);

//Removing Elements from an array
//Explain methods like pop, shift and splice for removing elements

//Removing from the end
fruits.pop();
console.log(fruits);

//Removing from the beginning
fruits.shift();
console.log(fruits);

//Removing from specific position
fruits.splice(1, 1);
console.log(fruits);

//Modifying elements
fruits[1] = "Watermelon"
console.log(fruits);
fruits.splice(1, 0, "Coconut")
console.log(fruits);
let array = [1, 2, 3, 4, 5,6]
array.splice(2, 3)
console.log(array)
//Iterating Over Arrays
//Using for loop
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//Using forEach
fruits.forEach(function(fruit){
    console.log(fruit);
})
//map
let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits);
//filter
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);
//reduce
let concatenatedFruits = fruits.reduce((acc, fruit) => acc + ' ' + fruit);
console.log(concatenatedFruits);

//find
let foundFruit = fruits.find(fruit => fruit === "Apple");
console.log(foundFruit);

//includes
let hasCherry = fruits.includes("Cherry");
console.log(hasCherry);

//Combining Arrays
//show how to concatenate arrays using concat
let moreFruits = ["Pineapple", "Fig"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);

//sortinng arrays
let sortedFruits = allFruits.sort();
console.log(sortedFruits);

//reversing arrays
let reversedFruits = allFruits.reverse();
console.log(reversedFruits);

const numbers2 = [1, 2, 3, 4, 5];
//using map to create a new array with each element double
const doubledNumbers = numbers2.map(number => number * 2);
console.log(doubledNumbers);

const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
]
//using map to create a new array with just the names of the people
const names = people.map(person => person.name);
console.log(names);

const ages = people.map(basco => basco.age);
console.log(ages);