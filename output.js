//document.getElementById
//document.write
//window.alert
//console.log

/*
multi
line
comments
*/

//document.write("working with javascript");
//window.alert("working with javascript");
//console.log("working with javascript");
document.getElementById("info").innerHTML = "Welcome to JS class";
document.getElementById("info2").innerHTML = 555 * 88;

/*
let a = "My first Javascript class"
let b = "Johnny James"
let c;
let d = 100;
let e = 373738733737373n;
let f = true

document.getElementById("info3").innerHTML = b + a;
document.getElementById("info4").innerHTML = c;
c = "Something"; //reassigned value
document.getElementById("info5").innerHTML = d > e;
document.getElementById("info6").innerHTML = d < e;
document.getElementById("info7").innerHTML = typeof f;
document.getElementById("info8").innerHTML = typeof e;
*/

/*
let a = null
document.getElementById("info2").innerHTML = typeof a;

let person ={
     fname:"Toyinsola",
     lname: "Obayemi",
     age: "15",
     gender: "female",
     email: "toyinsolaobayemi495@gmail.com",
};
//an array
let cars = ["Toyota", "Honda", "Hyunda", "Lexus", "Mercedes"];
document.getElementById("info3").innerHTML = 'My name is' + ' ' + person.fname + ' ' + person.lname + ' ' + 'I am' + ' ' + person.age;

document.getElementById("info4").innerHTML = cars[1];
document.getElementById("info5").innerHTML = typeof cars;
document.getElementById("info6").innerHTML = cars.length;
cars.push("Kia");
document.getElementById("info7").innerHTML = cars.length
document.getElementById("info8").innerHTML = cars
*/

//arithmetic operators + = * / % ++ -- **
//assignment operators = += *= /= %- **=
//comparison operators == === != !== > < >= <.
//logical operators &&(AND) ||(OR) |(NOT/NOR)
//type operator typeof instanceof
//bitwise operators &(and) |(or) -(not)
//string operators +(concatenate) +=
//terminary operators?

//===//comparing value and data type
//==//compare values

/*
let b = 500;
let c = "500";
document.getElementById("info4").innerHTML = b ===c;
*/

function myinfo(){
    alert("First name: Toyinsola");
    alert("Middle name: Olamide");
    alert("Last name: Obayemi");
    alert("DOB: Oct 17th");
    alert("Email: toyinsolaobayemi495@gmail.com")
    document.getElementById('demo').innerHTML = "First name: Toyinsola <br> Middle name: Olamide <br> Last name: Obayemi";
}
//myinfo()