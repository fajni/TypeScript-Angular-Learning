export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    //toString()
    format() {
        return `${this.recipient} is owed  ${this.amount}e for ${this.details}`;
    }
}
