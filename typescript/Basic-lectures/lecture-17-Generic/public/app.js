"use strict";
/*      GENERIC - REUSABLE BLOCKS OF CODE       */
// adding random id to object
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
};
const addUID2 = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
};
let doc1 = addUID({ street: 'New York Street', number: 12 });
console.log(doc1);
let doc2 = addUID2({ name: 'Veljko' });
console.log(doc2);
// Resource data field will be string
const doc3 = {
    uid: 1,
    resourceName: 'Person',
    data: 'Shane'
};
console.log("DOC3(string): ", doc3);
const doc4 = {
    uid: 2,
    resourceName: 'Person',
    data: {
        street: 'New York Street',
        number: 12,
        country: 'USA'
    }
};
console.log("DOC4(object): ", doc4);
// =============================================== //
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3]);
let strArray = getArray(['Mario', 'Luigi']);
console.log(numArray.forEach(num => {
    console.log(num);
}));
for (let i = 0; i < strArray.length; i++) {
    console.log(strArray[i]);
}
