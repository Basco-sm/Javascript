//function block of code that cn perform an action is can be reused
//declaration
//function functionName(paramaters) {
    //code to be executed
//}
function add(a, b){
    return a + b;
 }
 const sum = add(4,5)
  console.log(sum);

 function multiply(d, e, c){
    return d * e * c;
 }
  const product = multiply(4,5,8)
  console.log(product);


  function greet(name) {
    console.log("Hello" +  name);
}

 greet("Toyinsola");


//Function Expression
//const functionName = function(parameters) {
    //code to be executed
//};
const user = function(name) {
    console.log(`Hello ${name}`);
}
user("Toyinsola");

const add2 = function(a, b) {
    return a + b;
}
    const sum2 = add2(7, 9)
    console.log(sum2);

const multiply2 = function(e, g) {
    return e * g;
}
    const pro = multiply2(17, 10)
    console.log(pro);
const user2 = function(name, course, location) {
     console.log(`Hello ${name}, you are doing ${course} at ${location}`);
    }
    user2("Toyinsola", "Fontend Development", "New Horizon");