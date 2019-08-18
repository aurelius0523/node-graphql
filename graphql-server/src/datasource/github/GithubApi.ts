import axios from "axios";

const githubApiAxiosInstance = axios.create({
    baseURL: "https://api.github.com",
    timeout: 15000,
    headers: {
        Authorization: `token ${process.env.GITHUB_API_TOKEN}`
    }
});

class GithubApi {
    static getOwnRepositories = () => {
        return axios.get("/user/repos", {
            baseURL: process.env.GITHUB_API_ENDPOINT,
            timeout: 15000,
            headers: {
                Authorization: `token ${process.env.GITHUB_API_KEY}`
            }
        });
    };

    static getLanguage = (repositoryName: String) => {
        return axios.get(`/repos/${repositoryName}/languages`, {
            baseURL: process.env.GITHUB_API_ENDPOINT,
            timeout: 15000,
            headers: {
                Authorization: `token ${process.env.GITHUB_API_KEY}`
            }
        });
    };

    static getUserRepositories = (username: String) => {
        return axios.get(`/users/${username}/repos`, {
            baseURL: process.env.GITHUB_API_ENDPOINT,
            timeout: 15000,
            headers: {
                Authorization: `token ${process.env.GITHUB_API_KEY}`
            }
        });
    };

    static getUser = (username: String) => {
        return axios.get(`/users/${username}`, {
            baseURL: process.env.GITHUB_API_ENDPOINT,
            timeout: 15000,
            headers: {
                Authorization: `token ${process.env.GITHUB_API_KEY}`
            }
        });
    };

    static getUsers = (since: number) => {
        return axios.get(`/users?since=${since}`, {
            baseURL: process.env.GITHUB_API_ENDPOINT,
            timeout: 15000,
            headers: {
                Authorization: `token ${process.env.GITHUB_API_KEY}`
            }
        });
    };
}

export default GithubApi;
