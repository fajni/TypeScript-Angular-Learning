
let greet: Function;

// example 1
let greet1: (a: string, b: string) => void; // signature, void
greet1 = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number; // return number;
calc = (num1: number, num2: number, action: string): number => {
    if(action === 'add'){
        return num1+num2;
    }
    return num1 - num2;
}

console.log(calc(5,2, ''));
console.log(calc(5,2, 'add'));

// example 3
let logDetails: (obj: {name: string, age: number}) => void;
logDetails = (ninja: {name: string, age: number}) =>{
    console.log(`Ninja ${ninja.name} is ${ninja.age} year old!`);
}
logDetails({name: "Veljko", age: 22});

type person = {
    name: string,
    age: number
}
logDetails = (ninja: person) => {
    console.log(`Ninja ${ninja.name} is ${ninja.age} year old!`);
}
logDetails({name: "John", age: 30});
