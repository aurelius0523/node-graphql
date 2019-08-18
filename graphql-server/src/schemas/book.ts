import { gql } from "apollo-server-express";

export const BookSchema = gql`
    type Book {
        "wow a title"
        title: String
        author: Author
    }

    extend type Query {
        books: [Book]!
    }
`;
