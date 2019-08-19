import { gql } from "apollo-server-core";
import GithubApi from "../datasource/github/GithubApi";

// --- Schema
export const RepositorySchema = gql`
    type Repository implements Node {
        id: String!
        name: String!
        star: Int!
        languages: [String]
    }

    extend type Query {
        getRepositories: [Repository]!
        getRepositoriesForUser(username: String!): [Repository]!
    }
`;

// --- Resolver
const resolveLanguages = async (source: any) => {
    try {
        const response = await GithubApi.getLanguage(source.name);
        return Object.keys(response.data);
    } catch (error) {
        return [];
    }
};

const resolveGetRepositories = async () => {
    try {
        const response = await GithubApi.getOwnRepositories();
        return response.data.map(mapResponseToSchema);
    } catch (error) {
        return [];
    }
};

export const resolveGetRepositoriesForUser = async (source: any, args: any) => {
    const username = source && source.username ? source.username : args.username;

    try {
        const response = await GithubApi.getUserRepositories(username);
        return response.data.map(mapResponseToSchema);
    } catch (error) {
        return [];
    }
};

// --- GraphQL ResolverMap
export const repositoryResolvers = {
    Repository: {
        languages: resolveLanguages
    },
    Query: {
        getRepositories: resolveGetRepositories,
        getRepositoriesForUser: resolveGetRepositoriesForUser
    }
};

// --- Utilities
const mapResponseToSchema = (datum: any) => {
    return {
        id: datum.id,
        star: datum.watchers_count,
        name: datum.full_name
    };
};
