let func1 = () => {
    console.log('hello world!');
}

let func2: Function;
func2 = () => {
    console.log("hello again!");
}

/* OPTIONAL */
const add = (a: number, b: number, c: number = 10): string => {
    let result: number = a + b + c;
    return "Result: " + result.toString();
}

// c is optional in add method, because it has ? (C?: number)
// c can also be optional if be declare it's value as parameter (c: number = 10)

console.log(add(5,2));
console.log(add(5,2,1));

const minus = (a: number, b: number) => {
    return a - b;
}
let result = minus(10, 5);

function func(): string{
    return "My function";
}

console.log(func()); // prints the result of function
console.log(func); // prints the function itself

const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: {name: string, uid: string | number}) => {
    console.log(`${user.name} says hello with ${user.uid} uid`);
}