"use strict";
/*
        public
        private
        readonly
*/
class Invoice {
    /*
    public client: string; //can't change it
    private details: string; //even if the field is private when calling format() function, it will print private fields.
    readonly amount: number;
    */
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    get getAmount() {
        return this.amount;
    }
    set setAmount(amount) {
        this.amount = amount;
    }
    //toString()
    format() {
        return `${this.client} ownes ${this.amount}e for ${this.details}`;
    }
}
const invoice1 = new Invoice('Mario', 'work on the Mario website', 250);
const invoice2 = new Invoice('Luigi', 'work on the Luigi website', 350);
let invoices = [];
invoices.push(invoice1);
invoices.push(invoice2);
invoices.forEach(invoice => {
    console.log(invoice.client, invoice.details, invoice.getAmount);
});
/*
for(let i = 0; i<invoices.length; i++){
    console.log(invoices[i].client, invoices[i].details, invoices[i].amount);
}
*/
