"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var books = [
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: { name: "J.K. Rowling" }
    },
    {
        title: "Jurassic Park",
        author: { name: "Michael Crichton" }
    }
];
exports.resolveBooks = function (source, args, context, info) {
    return books;
};
