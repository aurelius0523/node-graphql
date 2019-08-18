import { gql } from "apollo-server-express";

export const MutationResponseSchema = gql`
    interface MutationResponse {
        code: Int!
        success: Boolean!
        message: String
    }
`;
