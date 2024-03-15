import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter{

    constructor(
        public client: string, 
        readonly details: string, 
        private amount: number) {
    }

    //toString()
    format() {
        return `${this.client} ownes ${this.amount}e for ${this.details}`;
    }
}