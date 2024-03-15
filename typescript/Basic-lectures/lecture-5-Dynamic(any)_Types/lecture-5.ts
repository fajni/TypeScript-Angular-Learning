let age: any;

age = 25;
age = "my age"; // still any type
console.log(age);

let mixed: any[] = [];
mixed.push(5);
mixed.push("Rick");
mixed.push(false);
console.log(mixed.toString());

let rick: {
    name:any,
    age:any
};
rick = {
    name: "Rick",
    age: 30
};

//  USE WITH CAUTION    //