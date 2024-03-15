export interface Person {
    name: string;
    amount: number;

    calculate(a: number): number;
    greet(n: string): string;
}