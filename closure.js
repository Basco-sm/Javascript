//closure is a feature in js where an inner function has access to the variable of its outer function , even after the
//outer function has finished executing.

function outerFunction(){
    const outerVariable = 'I am from outer Function';

    function innerFunction(){
        console.log(outerVariable)
    }
    return innerFunction;
}
const closureFunction = outerFunction();
closureFunction();

function createCounter() {
     let i = 0; 
     return function(){
       i++;
       return i;
     };  
};
const counterFunction = createCounter();
console.log(counterFunction());
console.log(counterFunction());

function createCounters(){
  let counter = 0;

  return{
    increment: function() {
      counter++;
      return counter;
    },
      decrement: function() {
        counter--;
        return counter;
    },
      getCount: function() {
        return counter;
      }
  }
}
const counterFunctions = createCounters();
console.log(counterFunctions.increment());
console.log(counterFunctions.increment());
console.log(counterFunctions.decrement());
console.log(counterFunctions.decrement());
console.log(counterFunctions.getCount());