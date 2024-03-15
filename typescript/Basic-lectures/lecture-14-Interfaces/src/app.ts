// interfaces
interface isPerson {
    name: string;
    age: number;
    speak(s: string): string;
    spend(s: number): number;
}

const me: isPerson = {

    name: 'Veljko',
    age: 22,
    speak(text: string): string {
        return text;
    },
    spend(amount: number): number {
        return amount;
    }
};

console.log(me);

const greetPerson = (person: isPerson) => {
    console.log(`Hello ${person.name}`);
}

greetPerson(me);