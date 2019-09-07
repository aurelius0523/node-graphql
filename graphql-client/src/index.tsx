import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./components/App";
import "./styles/main.scss";
require("../favicon.ico");

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <App />
            </Router>
        </ApolloProvider>
    );
};

ReactDOM.render(<Root />, document.getElementById("app-container"));
