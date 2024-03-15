import { CardTemplate } from "./CardTemplate.js";
export class Person extends CardTemplate {
    constructor(name, lastname, job, details, email, phone, gender) {
        super();
        this.name = name;
        this.lastname = lastname;
        this.job = job;
        this.details = details;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
    }
    toString() {
        return `Name: ${this.name},\nLastname: ${this.lastname},\nJob: ${this.job},\nDetails: ${this.details},\nEmail: ${this.email},\nPhone: ${this.phone},\nGender: ${this.gender}`;
    }
}
