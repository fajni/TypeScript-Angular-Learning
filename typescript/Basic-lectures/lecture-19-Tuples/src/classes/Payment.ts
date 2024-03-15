import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter{

    constructor(
        public recipient: string, 
        readonly details: string, 
        private amount: number) {
    }

    //toString()
    format() {
        return `${this.recipient} is owed  ${this.amount}e for ${this.details}`;
    }
}