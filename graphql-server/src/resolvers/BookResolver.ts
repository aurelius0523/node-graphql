import { GraphQLResolveInfo } from "graphql";

const books = [
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: { name: "J.K. Rowling" }
    },
    {
        title: "Jurassic Park",
        author: { name: "Michael Crichton" }
    }
];

export declare type Resolver = (rootValue?: any, args?: any, context?: any, info?: GraphQLResolveInfo) => any;

export const resolveBooks: Resolver = (source, args, context, info) => {
    return books;
};
