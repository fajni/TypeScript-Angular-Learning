export class Finance {

    constructor(
        private type: string,
        private toFrom: string,
        private details: string,
        private amount: number
    ) {

    }

    public get getType() {
        return this.type;
    }

    public get getToFrom(): string {
        return this.toFrom;
    }

    public get getDetails() {
        return this.details;
    }

    public get getAmount() {
        return this.amount;
    }

    public set setType(t: string){
        this.type = t;
    }

    public set setToFrom(tofrom: string){
        this.toFrom = tofrom;
    }

    public set setDetails(details: string){
        this.details = details;
    }

    public set setAmount(amount: number){
        this.amount = amount;
    }

    public toString(): string {
        return `Type: ${this.getType}, To/From: ${this.getAmount}, Details: ${this.details}, Amount: ${this.amount}`;
    }
}