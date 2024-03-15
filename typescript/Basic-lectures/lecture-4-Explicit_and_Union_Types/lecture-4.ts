/* explicit types */
let character: string; // initialize value but in future allow only string (let)
let age: number;

character = "Veljko";
age = 22;

/* arrays */
let ninjas: string[] = []; // let ninjas: string[];

ninjas = ["Yoshi", "Mario"];
ninjas.push("Tom");

console.log(ninjas);

/* union types */
let mixed: (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(30);
mixed.push(false);

console.log(mixed);

let uid: string | number;
uid = "123";
uid = 123;

/* objects */
let ninjaOne: object;
ninjaOne = {
    name: 'Yoshi',
    age: 30
};
ninjaOne = []; //it can be an array, arrays are objects

let ninjaTwo: {}; // same as ninjaTwo: object

let ninjaThree: {
    name: string,
    age: number,
    alive: true
}
ninjaThree = {
    name: "Mario",
    age: 20,
    alive: true
}