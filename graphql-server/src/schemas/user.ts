import { gql } from "apollo-server-core";
import { resolveGetRepositoriesForUser } from "./repository";
import GithubApi from "../datasource/github/GithubApi";

// --- Schema
export const UserSchema = gql`
    type User implements Node {
        id: String!
        username: String!
        url: String!
        imageUrl: String!
        repositories: [Repository]
    }

    extend type Query {
        getUser(username: String!): User
        getUsers(since: Int): [User]
    }

    extend type Mutation {
        updateUser(username: String!): User
    }
`;

// --- Resolver
const resolveGetUser = async (source: any, args: any) => {
    try {
        const response = await GithubApi.getUser(args.username);
        const datum = response.data;
        return mapResponseToSchema(datum);
    } catch (error) {
        return null;
    }
};

const resolveGetUsers = async (source: any, args: any) => {
    try {
        const response = await GithubApi.getUsers(args.since);

        return response.data.map(mapResponseToSchema);
    } catch (error) {
        return null;
    }
};

const resolveUpdateUser = async (source: any, args: any) => {
    return await { id: String(Math.random()), username: args.username, url: "", imageUrl: "" };
};

// --- GraphQL ResolverMap
export const UserResolvers = {
    User: {
        repositories: resolveGetRepositoriesForUser
    },
    Query: {
        getUser: resolveGetUser,
        getUsers: resolveGetUsers
    },
    Mutation: {
        updateUser: resolveUpdateUser
    }
};

function mapResponseToSchema(datum: any) {
    return { id: datum.id, username: datum.login, url: datum.html_url, imageUrl: datum.avatar_url };
}
// --- Utilities
