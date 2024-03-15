export class Invoice {
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
