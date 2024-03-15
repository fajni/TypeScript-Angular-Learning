import {Invoice} from './classes/Invoice.js'
import {Payment} from './classes/Payment.js'
import {HasFormatter} from './interfaces/HasFormatter.js'
import {ListTemplate} from './classes/ListTemplate.js'

//TUPLES

//array
let arr = ['Shane', 35, true];
arr[1] = '35';
arr[0] = 'Rick';
console.log(arr);
//

let tuple: [string, number, boolean] = ['Ryu', 25, true];
console.log(tuple);
//tuple[0] = 10; types can't be changed as array: any

let student: [string, number];
student = ['Chun-Li', 220];
console.log(student);

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template
const ul = document.querySelector('ul')! as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();

    let doc: HasFormatter;

    let values: [string, string, number];
    values = [type.value, details.value, amount.valueAsNumber];

    if(type.value === 'invoice'){
        doc = new Invoice(...values); // aranges them in order - doc = new Invoice(type.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');

});

