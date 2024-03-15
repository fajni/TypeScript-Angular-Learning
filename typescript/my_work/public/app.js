import { Finance } from './classes, modules/Finance.js';
const form = document.querySelector('.new-item-form');
const type = document.getElementById('type');
const toFrom = document.getElementById('tofrom');
const details = document.getElementById('details');
const amount = document.getElementById('amount');
let person;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.value);
    const finance = new Finance(type.value, toFrom.value, details.value, parseInt(amount.value));
    console.log(`Finance: ${finance.toString()}`);
    person = {
        name: toFrom.value,
        amount: parseInt(amount.value),
        calculate(a) {
            return a * 2;
        },
        greet(n) {
            return `Hi, ${n}`;
        }
    };
    console.log(person.greet(person.name));
    console.log(`${person.name} has ${person.calculate(person.amount)} amount x2`);
    const output = document.getElementById('output');
    output.innerHTML = `<p>Type: ${type.value} <br/>` +
        `To/From: ${toFrom.value} <br/>` +
        `Details: ${details.value} <br/>` +
        `Amount: ${amount.value} <br/><br/>` +
        `Person is ${person.name} </p>`;
});
