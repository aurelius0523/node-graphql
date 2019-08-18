import { gql } from "apollo-server-express";

export const AuthorSchema = gql`
    type Author {
        name: String!
        books: [Book]
        friends: [Author]
    }
`;
