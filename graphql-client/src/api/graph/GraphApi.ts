import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

export class GraphApi {
    static getRepositoryNames = async () => {
        return await client.query({
            query: gql`
                {
                    getRepositories {
                        name
                    }
                }
            `
        });
    };
}
