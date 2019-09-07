import * as React from "react";
import { Route, Switch } from "react-router-dom";
import RepositoryList from "./RepositoryList/RepositoryList";
import { RepositoryRoutes } from "../../constants/Routes";

export const Repository: React.SFC = () => {
    return (
        <div className="repository-container">
            <Switch>
                <Route path={RepositoryRoutes.REPOSITORY_LIST} exact={true} component={RepositoryList} />
            </Switch>
        </div>
    );
};

export default Repository;
