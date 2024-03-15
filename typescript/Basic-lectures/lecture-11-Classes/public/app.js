"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    //toString()
    format() {
        return `${this.client} ownes ${this.amount}e for ${this.details}`;
    }
}
const invoice1 = new Invoice('Mario', 'work on the Mario website', 250);
const invoice2 = new Invoice('Luigi', 'work on the Luigi website', 350);
console.log(invoice1, invoice2);
let invoices = [];
invoices.push(invoice1);
invoices.push(invoice2);
console.log(invoices);
invoice1.client = 'Yoshi';
invoice2.amount = 400;
