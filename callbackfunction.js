//a callback is a function passed into another function as an argument, which
//is then invoked inside the outer function to complete some kind of routine or action.

function sayHello(name, callback){
    console.log(`Hello ${name}`)
    callback();
}
function sayGoodbye() {
    console.log(`Welcome to my app`)
}
sayHello("Martins", sayGoodbye);

const greet2 = function(name, callback){
    console.log(`Hello ${name}`)
    callback();
}
function sayGoodbye2() {
    console.log(`Welcome to my app`)
}
greet2("Toyinsola", sayGoodbye2)

const greet = (name, callback)=>{
    console.log(`Hello ${name}`)
    callback();
}
const question = () => {
    console.log('how are you doing?')
}
greet("Toyinsola", question)

const greetUser = (name, firstCallback, secondCallback) => {
    console.log(`Hello ${name}`)
    firstCallback()
    secondCallback()
}
const welcomeMessage = () =>{
    console.log('Welcome to my app')
}
const offerService = () => {
    console.log('how can we help you?')
}
greetUser("Basco", welcomeMessage, offerService)

const aboutMe = (name, firstCallback, secondCallback, thirdCallback) => {
    console.log(`My name is ${name}`)
    firstCallback()
    secondCallback()
    thirdCallback()
}
const intro = () =>{
    console.log('I am currently an undergraduate.')
}
const intro2 = () =>{
    console.log('I am planning on taking Computer Science')
}
const intro3 = () => {
    console.log('I hope to work in Google')
}
aboutMe("Toyinsola", intro, intro2, intro3)