"use strict";
const me = {
    name: 'Veljko',
    age: 22,
    speak(text) {
        return text;
    },
    spend(amount) {
        return amount;
    }
};
console.log(me);
const greetPerson = (person) => {
    console.log(`Hello ${person.name}`);
};
greetPerson(me);
