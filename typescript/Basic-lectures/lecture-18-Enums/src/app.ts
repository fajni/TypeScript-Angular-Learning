// ENUMS

enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const doc1: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: {title: 'the last wish'}
};

const doc2: Resource<string> = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: 'Mario'
};

console.log(doc1, doc2); // ENUM prints as number