"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_core_1 = require("apollo-server-core");
exports.RepositorySchema = apollo_server_core_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Repository {\n        name: String!\n        star: Int!\n        pullRequests: Int!\n        languages: Array<String>\n    }\n\n    extend type Query {\n        getRepositories: [Repository!]!\n        getRepositoriesForUser({userId: String!}): [Repository!]!\n    }\n"], ["\n    type Repository {\n        name: String!\n        star: Int!\n        pullRequests: Int!\n        languages: Array<String>\n    }\n\n    extend type Query {\n        getRepositories: [Repository!]!\n        getRepositoriesForUser({userId: String!}): [Repository!]!\n    }\n"])));
var resolveLanguages = function () {
    return ["java", "c++"];
};
var resolveGetRepositories = function () {
    return { name: "git1", star: 11, pullRequests: 12, languages: resolveLanguages() };
};
var resolveGetRepositoriesForUser = function () {
    return { name: "git2", star: 11, pullRequests: 12, languages: resolveLanguages() };
};
exports.repositoryResolvers = {
    Repository: {
        languages: resolveLanguages
    },
    Query: {
        getRepositories: resolveGetRepositories,
        getRepositoriesForUser: resolveGetRepositoriesForUser
    }
};
var templateObject_1;
