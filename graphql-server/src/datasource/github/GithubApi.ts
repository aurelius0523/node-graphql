import axios from "axios";

const getGithubAxios = () => {
    return axios.create({
        baseURL: process.env.GITHUB_API_ENDPOINT,
        timeout: 15000,
        headers: {
            Authorization: `token ${process.env.GITHUB_API_KEY}`
        }
    });
};

class GithubApi {
    static getOwnRepositories = () => {
        return getGithubAxios().get("/user/repos");
    };

    static getLanguage = (repositoryName: String) => {
        return getGithubAxios().get(`/repos/${repositoryName}/languages`);
    };

    static getUserRepositories = (username: String) => {
        return getGithubAxios().get(`/users/${username}/repos`);
    };

    static getUser = (username: String) => {
        return getGithubAxios().get(`/users/${username}`);
    };

    static getUsers = (since: number) => {
        return getGithubAxios().get(`/users?since=${since}`);
    };
}

export default GithubApi;
