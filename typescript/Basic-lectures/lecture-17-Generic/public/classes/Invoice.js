export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    //toString()
    format() {
        return `${this.client} ownes ${this.amount}e for ${this.details}`;
    }
}
