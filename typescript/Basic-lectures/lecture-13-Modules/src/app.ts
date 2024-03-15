import {Invoice} from './classes,modules/Invoice.js'

/*      NEED TO START FROM LIVE SERVER, ERROR: CORS POLICY       */

const invoice1 = new Invoice('Mario', 'work on the Mario website', 250);
const invoice2 = new Invoice('Luigi', 'work on the Luigi website', 350);

let invoices: Invoice[] = [];
invoices.push(invoice1);
invoices.push(invoice2);

invoices.forEach(invoice => {
    console.log(invoice.client, invoice.details, invoice.getAmount);
});