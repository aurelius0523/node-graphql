import { gql } from "apollo-server-express";
import { GraphQLScalarType, Kind } from "graphql";

export const DateScalar = gql`
    scalar DateTime
`;

export const DateScalarResolver = {
    DateTime: new GraphQLScalarType({
        name: "Date",
        description: "Date custom scalar type",
        parseValue(value) {
            return new Date(value); // value from the client
        },
        serialize(value) {
            return value; // value sent to the client
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return parseInt(ast.value, 10); // ast value is always in string format
            }
            return null;
        }
    })
};
