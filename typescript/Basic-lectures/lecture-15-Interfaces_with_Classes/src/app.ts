import {Invoice} from './classes/Invoice.js'
import {Payment} from './classes/Payment.js'
import {HasFormatter} from './interfaces/HasFormatter.js'

/*
    let doc1: HasFormatter;
    let doc2: HasFormatter;

    doc1 = new Invoice('Yoshi', 'web work', 250);
    doc2 = new Payment('Mario', 'plumbing work', 200);

    // both variables implements HasFormatter
    let docs: HasFormatter[] = [];
    docs.push(doc1);
    docs.push(doc2);

    console.log(docs);
*/

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();

    let doc: HasFormatter;

    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    console.log(doc);

});
