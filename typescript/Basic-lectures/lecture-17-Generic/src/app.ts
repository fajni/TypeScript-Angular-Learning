/*      GENERIC - REUSABLE BLOCKS OF CODE       */

// adding random id to object
const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

const addUID2 = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let doc1 = addUID({ street: 'New York Street', number: 12 });
console.log(doc1);

let doc2 = addUID2({ name: 'Veljko' });
console.log(doc2);


// GENERIC WITH INTERFACES
interface Resource<T> {
    uid: number,
    resourceName: string;
    data: T;
}

// Resource data field will be string
const doc3: Resource<string> = {
    uid: 1,
    resourceName: 'Person',
    data: 'Shane'
}
console.log("DOC3(string): ", doc3);

const doc4: Resource<object> = {
    uid: 2,
    resourceName: 'Person',
    data: {
        street: 'New York Street',
        number: 12,
        country: 'USA'
    }
}

console.log("DOC4(object): ", doc4);

// =============================================== //

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(['Mario', 'Luigi']);

console.log(
    numArray.forEach(num => {
        console.log(num);
    })
);

for (let i = 0; i < strArray.length; i++){
    console.log(strArray[i]);
}