"use strict";
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const doc1 = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'the last wish' }
};
const doc2 = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: 'Mario'
};
console.log(doc1, doc2); // ENUM prints as number
