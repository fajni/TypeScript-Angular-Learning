"use strict";
let func1 = () => {
    console.log('hello world!');
};
let func2;
func2 = () => {
    console.log("hello again!");
};
/* OPTIONAL */
const add = (a, b, c = 10) => {
    let result = a + b + c;
    return "Result: " + result.toString();
};
// c is optional in add method, because it has ? (C?: number)
// c can also be optional if be declare it's value as parameter (c: number = 10)
console.log(add(5, 2));
console.log(add(5, 2, 1));
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 5);
function func() {
    return "My function";
}
console.log(func()); // prints the result of function
console.log(func); // prints the function itself
