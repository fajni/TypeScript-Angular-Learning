"use strict";
/* REDUCING CODE DUPLICATION */
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} says hello with ${user.uid} uid`);
};
