import * as React from "react";
import RepositoryCard from "./card/RepositoryCard";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import "../../../styles/components/repository/repositoryList/repositoryList.scss";
import { RepositoryCardShimmer } from "../../common/shimmer/RepositoryCardShimmer";

export const RepositoryList: React.SFC = (props) => {
    const { loading, data, error } = useQuery(
        gql`
            {
                getRepositories {
                    id
                    name
                    languages
                }
            }
        `
    );
    return (
        <div className="repository-list-container">
            {loading ? (
                <LoadingState />
            ) : (
                <React.Fragment>
                    {data.getRepositories.map((datum: any) => {
                        return <RepositoryCard key={datum.id} name={datum.name} languages={datum.languages} />;
                    })}
                </React.Fragment>
            )}
        </div>
    );
};

const LoadingState: React.SFC = () => {
    return (
        <div className="loading-state-container">
            <RepositoryCardShimmer />
            <RepositoryCardShimmer />
        </div>
    );
};

export default RepositoryList;
