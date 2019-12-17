import { ApolloServer, gql } from "apollo-server-express";
import * as Dotenv from "dotenv";
import { repositoryResolvers, RepositorySchema } from "./src/schemas/repository";
import { NodeSchema } from "./src/schemas/Node";
import { UserSchema, UserResolvers } from "./src/schemas/user";
import cors from "cors";
import { ExpenseSchema, ExpenseResolver } from "./src/schemas/expense";
import { DateScalar, DateScalarResolver } from "./src/scalars/DateScalar";
import { prisma } from "./src/generated/prisma-client";
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

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
    typeDefs: [typeDefs, RepositorySchema, NodeSchema, UserSchema, ExpenseSchema, DateScalar],
    resolvers: [repositoryResolvers, UserResolvers, ExpenseResolver, DateScalarResolver],
    introspection: true // this is needed so that it works on Heroku
});

server.applyMiddleware({ app });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
app.use(cors());
app.listen({ port: process.env.PORT || 4000 }, () => console.log(`🚀 Server ready at http://localhost:${process.env.port || 4000}${server.graphqlPath}`));

// A `main` function so that we can use async/await
async function main() {
    // Create a new user called `Alice`
    const newUser = await prisma.createUser({
        name: "Bob",
        email: `bob${Math.random()}@prisma.io`,
        posts: {
            create: [
                {
                    title: "Join us for GraphQL Conf in 2019"
                },
                {
                    title: "Subscribe to GraphQL Weekly for GraphQL news"
                }
            ]
        }
    });
    console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`);

    // Read all users from the database and print them to the console
    const allUsers = await prisma.users();
    console.log(allUsers);

    const postsByUser = await prisma.user({ email: "bob@prisma.io" }).posts();
    console.log(`All posts by that user: ${JSON.stringify(postsByUser)}`);
}

main().catch((e) => console.error(e));
