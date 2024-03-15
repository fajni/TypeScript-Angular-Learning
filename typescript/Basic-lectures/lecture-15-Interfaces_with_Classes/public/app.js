import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
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
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
