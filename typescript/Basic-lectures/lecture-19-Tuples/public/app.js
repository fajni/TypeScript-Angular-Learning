import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
//TUPLES
//array
let arr = ['Shane', 35, true];
arr[1] = '35';
arr[0] = 'Rick';
console.log(arr);
//
let tuple = ['Ryu', 25, true];
console.log(tuple);
//tuple[0] = 10; types can't be changed as array: any
let student;
student = ['Chun-Li', 220];
console.log(student);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [type.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values); // aranges them in order - doc = new Invoice(type.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
