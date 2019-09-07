import { ApolloServer, gql } from "apollo-server-express";
import { resolveBooks } from "./src/resolvers/BookResolver";
import { AuthorSchema } from "./src/schemas/author";
import { BookSchema } from "./src/schemas/book";
import { GenreSchema } from "./src/schemas/genre";
import * as Dotenv from "dotenv";
import { repositoryResolvers, RepositorySchema } from "./src/schemas/repository";
import { NodeSchema } from "./src/schemas/Node";
import { UserSchema, UserResolvers } from "./src/schemas/user";
import cors from "cors";
Dotenv.config();
const express = require("express");

const app = express();
// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
    type Query {
        root: String
    }

    type Mutation {
        root: String
    }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
    Query: {
        books: resolveBooks
    }
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
    typeDefs: [typeDefs, BookSchema, GenreSchema, AuthorSchema, RepositorySchema, NodeSchema, UserSchema],
    resolvers: [resolvers, repositoryResolvers, UserResolvers],
    introspection: true // this is needed so that it works on Heroku
});

server.applyMiddleware({ app });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
app.use(cors());
app.listen({ port: process.env.PORT || 4000 }, () => console.log(`🚀 Server ready at http://localhost:${process.env.port || 4000}${server.graphqlPath}`));
