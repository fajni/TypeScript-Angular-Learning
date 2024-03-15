export class Invoice {
    
    /*
    public client: string; //can't change it
    private details: string; //even if the field is private when calling format() function, it will print private fields.
    readonly amount: number;
    */

    constructor(
        public client: string, 
        readonly details: string, 
        private amount: number){
    }

    public get getAmount(){
        return this.amount;
    }

    public set setAmount(amount: number){
        this.amount = amount;
    }

    //toString()
    format() {
        return `${this.client} ownes ${this.amount}e for ${this.details}`;
    }
}