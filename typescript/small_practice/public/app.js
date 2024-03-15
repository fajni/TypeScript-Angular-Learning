import { Person } from './classes/Person.js';
const form = document.querySelector('form');
const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const job = document.getElementById('job');
const details = document.getElementById('details');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const gender = document.getElementById('gender');
const clear = document.getElementById('clear');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [name.value, lastname.value, job.value, details.value, email.value, phone.value, gender.value];
    let n = 0;
    values.forEach(item => {
        if (item === '') {
            console.log('Empty Fields Are Not Allowed!');
            n = 1;
        }
    });
    if (n == 1) {
        return;
    }
    let person = new Person(...values);
    console.log(person.toString());
    person.render_html(person);
    form.reset();
});
clear.addEventListener('click', function () {
    const output = document.getElementById('output');
    while (output?.firstChild) {
        output.removeChild(output.firstChild);
    }
});
