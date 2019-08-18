"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var githubApiAxiosInstance = axios_1.default.create({
    baseURL: "https://api.github.com",
    timeout: 15000,
    headers: {
        Authorization: "token " + process.env.GITHUB_API_TOKEN
    }
});
var GithubApi = /** @class */ (function () {
    function GithubApi() {
    }
    GithubApi.getOwnRepositories = function () {
        return axios_1.default.get("/user/repos", {
            baseURL: process.env.GITHUB_API_ENDPOINT,
            timeout: 15000,
            headers: {
                Authorization: "token " + process.env.GITHUB_API_KEY
            }
        });
    };
    GithubApi.getLanguage = function (repositoryName) {
        return axios_1.default.get("/repos/" + repositoryName + "/languages", {
            baseURL: process.env.GITHUB_API_ENDPOINT,
            timeout: 15000,
            headers: {
                Authorization: "token " + process.env.GITHUB_API_KEY
            }
        });
    };
    GithubApi.getUserRepositories = function (username) {
        return axios_1.default.get("/users/" + username + "/repos", {
            baseURL: process.env.GITHUB_API_ENDPOINT,
            timeout: 15000,
            headers: {
                Authorization: "token " + process.env.GITHUB_API_KEY
            }
        });
    };
    GithubApi.getUser = function (username) {
        return axios_1.default.get("/users/" + username, {
            baseURL: process.env.GITHUB_API_ENDPOINT,
            timeout: 15000,
            headers: {
                Authorization: "token " + process.env.GITHUB_API_KEY
            }
        });
    };
    GithubApi.getUsers = function (since) {
        return axios_1.default.get("/users?since=" + since, {
            baseURL: process.env.GITHUB_API_ENDPOINT,
            timeout: 15000,
            headers: {
                Authorization: "token " + process.env.GITHUB_API_KEY
            }
        });
    };
    return GithubApi;
}());
exports.default = GithubApi;
