let myName: string = 'Veljko';

let myAge: number = 30;

let isBlackBelt: boolean = false;

// arrow function, takes diameter as parameter
const circle = (diameter: number) => {
    console.log('Math PI: ', Math.PI);
    console.log('Character: ', myName)
    return diameter * Math.PI;
}

console.log(circle(20.23));