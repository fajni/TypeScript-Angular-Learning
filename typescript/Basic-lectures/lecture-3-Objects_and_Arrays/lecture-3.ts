// arrays
let names = ['John', 'Mario', 'Luigi'];
names.push('Tom');

let mixed = ['Shane', 32, 'Chun-Li', 8, 0, true];
mixed.forEach(item => {
    console.log(item);
});

for (let i = 0; i < mixed.length; i++){
    console.log(mixed[i]);
}

// objects
let ninja = {
    // properties (behaves like a variable):
    name: 'Mario',
    belt: 'Black',
    age: 30,
    alive: true,
    skills: [
        'Sneak',
        'Stab',
        'Run'
    ]
};

ninja.age = 40;

console.log(ninja)