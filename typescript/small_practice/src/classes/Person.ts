import { IsFormat } from "../interfaces/IsFormat.js";
import { CardTemplate } from "./CardTemplate.js";

export class Person extends CardTemplate implements IsFormat {

    constructor(
        public name: string,
        public lastname: string,
        public job: string,
        public details: string,
        public email: string,
        public phone: string,
        public gender: string
    ) {
        super();
    }

    toString(): string {
        return `Name: ${this.name},\nLastname: ${this.lastname},\nJob: ${this.job},\nDetails: ${this.details},\nEmail: ${this.email},\nPhone: ${this.phone},\nGender: ${this.gender}`;
    }
}