"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var BookResolver_1 = require("./src/resolvers/BookResolver");
var author_1 = require("./src/schemas/author");
var book_1 = require("./src/schemas/book");
var genre_1 = require("./src/schemas/genre");
var Dotenv = __importStar(require("dotenv"));
var repository_1 = require("./src/schemas/repository");
var Node_1 = require("./src/schemas/Node");
var user_1 = require("./src/schemas/user");
Dotenv.config();
var express = require("express");
var app = express();
// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
var typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Query {\n        root: String\n    }\n"], ["\n    type Query {\n        root: String\n    }\n"])));
// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
var resolvers = {
    Query: {
        books: BookResolver_1.resolveBooks
    }
};
// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
var server = new apollo_server_express_1.ApolloServer({
    typeDefs: [typeDefs, book_1.BookSchema, genre_1.GenreSchema, author_1.AuthorSchema, repository_1.RepositorySchema, Node_1.NodeSchema, user_1.UserSchema],
    resolvers: [resolvers, repository_1.repositoryResolvers, user_1.UserResolvers]
});
server.applyMiddleware({ app: app });
// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
app.listen({ port: process.env.PORT || 4000 }, function () { return console.log("\uD83D\uDE80 Server ready at http://localhost:" + (process.env.port || 4000) + server.graphqlPath); });
var templateObject_1;
