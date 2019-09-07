import * as React from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { NavLink } from "react-router-dom";
import { AppRoutes, RepositoryRoutes } from "../../constants/Routes";

export const Drawer: React.SFC = (props) => {
    return (
        <div className="drawer-container">
            <div className="icon-section">
                <NavLink to={AppRoutes.ROOT} exact={true}>
                    <div className="icon">
                        <AccountBoxIcon />
                    </div>
                </NavLink>
                <NavLink to={RepositoryRoutes.REPOSITORY_LIST} exact={true}>
                    <div className="icon">
                        <BookmarkIcon />
                    </div>
                </NavLink>
            </div>
        </div>
    );
};
