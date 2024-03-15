"use strict";
let greet;
// example 1
let greet1; // signature, void
greet1 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc; // return number;
calc = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    return num1 - num2;
};
console.log(calc(5, 2, ''));
console.log(calc(5, 2, 'add'));
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`Ninja ${ninja.name} is ${ninja.age} year old!`);
};
logDetails({ name: "Veljko", age: 22 });
logDetails = (ninja) => {
    console.log(`Ninja ${ninja.name} is ${ninja.age} year old!`);
};
logDetails({ name: "John", age: 30 });
