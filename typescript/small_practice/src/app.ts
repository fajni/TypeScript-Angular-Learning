import { Person } from './classes/Person.js'

const form = document.querySelector('form') as HTMLFormElement;

const name = document.getElementById('name') as HTMLInputElement;
const lastname = document.getElementById('lastname') as HTMLInputElement;
const job = document.getElementById('job') as HTMLInputElement;
const details = document.getElementById('details') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const phone = document.getElementById('phone') as HTMLInputElement;
const gender = document.getElementById('gender') as HTMLSelectElement;

const clear = document.getElementById('clear') as HTMLButtonElement;

form.addEventListener('submit', (e: Event) => {

    e.preventDefault();

    let values: [string, string, string, string, string, string, string];
    values = [name.value, lastname.value, job.value, details.value, email.value, phone.value, gender.value];

    let n: number = 0;
    values.forEach(item => {
        if(item === ''){
            console.log('Empty Fields Are Not Allowed!');
            n = 1;
        }
    })
    if(n == 1){
        return;
    }

    let person = new Person(...values);

    console.log(person.toString());

    person.render_html(person);

    form.reset();

});

clear.addEventListener('click', function(){
    const output = document.getElementById('output');
    while(output?.firstChild){
        output.removeChild(output.firstChild);
    }
});