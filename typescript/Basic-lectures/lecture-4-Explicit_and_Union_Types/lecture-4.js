/* explicit types */
var character; // initialize value but in future allow only string (let)
var age;
character = "Veljko";
age = 22;
/* arrays */
var ninjas = []; // let ninjas: string[];
ninjas = ["Yoshi", "Mario"];
ninjas.push("Tom");
console.log(ninjas);
/* union types */
var mixed = [];
mixed.push("hello");
mixed.push(30);
mixed.push(false);
console.log(mixed);
var uid;
uid = "123";
uid = 123;
/* objects */
var ninjaOne;
ninjaOne = {
    name: 'Yoshi',
    age: 30
};
ninjaOne = []; //it can be an array, arrays are objects
var ninjaTwo; // same as ninjaTwo: object
var ninjaThree;
ninjaThree = {
    name: "Mario",
    age: 20,
    alive: true
};
