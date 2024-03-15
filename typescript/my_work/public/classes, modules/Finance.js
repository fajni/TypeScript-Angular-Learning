export class Finance {
    constructor(type, toFrom, details, amount) {
        this.type = type;
        this.toFrom = toFrom;
        this.details = details;
        this.amount = amount;
    }
    get getType() {
        return this.type;
    }
    get getToFrom() {
        return this.toFrom;
    }
    get getDetails() {
        return this.details;
    }
    get getAmount() {
        return this.amount;
    }
    set setType(t) {
        this.type = t;
    }
    set setToFrom(tofrom) {
        this.toFrom = tofrom;
    }
    set setDetails(details) {
        this.details = details;
    }
    set setAmount(amount) {
        this.amount = amount;
    }
    toString() {
        return `Type: ${this.getType}, To/From: ${this.getAmount}, Details: ${this.details}, Amount: ${this.amount}`;
    }
}
