import { gql } from "apollo-server-express";

export const NodeSchema = gql`
    interface Node {
        id: String!
    }
`;
