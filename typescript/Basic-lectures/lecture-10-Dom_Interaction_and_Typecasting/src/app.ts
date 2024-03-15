
const anchor = document.querySelector('a')!; //a href, ! we know that <a> exist and it doesn't need to be an error while printing href (console.log(anchor.href))

/*
if(anchor){
    console.log(anchor.href);
}
*/

console.log(`Link: ${anchor.href}`);

//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement; // instead storing it as Element type, it uses HTMLFormElement
//console.log(form.children);

// inputs fields:
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); // prevents refreshing after submit

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
});