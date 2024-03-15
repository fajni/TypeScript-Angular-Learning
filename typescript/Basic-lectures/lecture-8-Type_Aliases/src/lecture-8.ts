
/* REDUCING CODE DUPLICATION */

type StringOrNum = string | number;
type objectWithName = {name: string, uid: StringOrNum};

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: objectWithName) => {
    console.log(`${user.name} says hello with ${user.uid} uid`);
}

