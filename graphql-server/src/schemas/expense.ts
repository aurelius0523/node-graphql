import { gql } from "apollo-server-core";

// --- Schema
export const ExpenseSchema = gql`
    enum ExpenseCategory {
        FOOD
        FINANCIAL_EXPENSES
        TRANSPORTATION
    }

    type Expense implements Node {
        id: String!
        amount: Float!
        categories: [ExpenseCategory]
        date: DateTime
    }

    extend type Query {
        getExpenseList: [Expense!]
    }
`;

const getExpenseListResolver = () => {
    return [
        {
            id: "1",
            amount: 200.1,
            categories: ["FOOD"],
            date: new Date()
        }
    ];
};

// --- Resolver
export const ExpenseResolver = {
    Query: {
        getExpenseList: getExpenseListResolver
    }
};
