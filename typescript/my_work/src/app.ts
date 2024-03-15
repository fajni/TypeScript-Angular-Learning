import { Finance } from './classes, modules/Finance.js'
import {Person} from './classes, modules/Person.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.getElementById('type') as HTMLSelectElement;
const toFrom = document.getElementById('tofrom') as HTMLInputElement;
const details = document.getElementById('details') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLInputElement;

let person: Person;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.value
    );

    const finance = new Finance(type.value, toFrom.value, details.value, parseInt(amount.value));
    console.log(`Finance: ${finance.toString()}`);

    person = {
        name: toFrom.value,
        amount: parseInt(amount.value),

        calculate(a: number): number {
            return a*2;
        },
        greet(n: string): string {
            return `Hi, ${n}`;
        }
    };
    console.log(person.greet(person.name));
    console.log(`${person.name} has ${person.calculate(person.amount)} amount x2`);

    const output = document.getElementById('output') as HTMLDivElement;
    output.innerHTML = `<p>Type: ${type.value} <br/>` +
        `To/From: ${toFrom.value} <br/>` +
        `Details: ${details.value} <br/>` +
        `Amount: ${amount.value} <br/><br/>`+
        `Person is ${person.name} </p>`;
});