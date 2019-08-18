import { gql } from "apollo-server-express";

export const GenreSchema = gql`
    type Genre {
        name: String
        books: [Book]
    }

    extend type Query {
        getGenre: [Genre]
    }
`;
