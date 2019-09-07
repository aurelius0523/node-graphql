import { useQuery, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import * as React from "react";
import { Card } from "./common/Card";
import SvgIcon from "@material-ui/core/SvgIcon";
import Icon from "@material-ui/core/Icon";
import SearchIcon from "@material-ui/icons/Search";
import { Drawer } from "./common/Drawer";
import { Route, Switch } from "react-router";
import { AppRoutes } from "../constants/Routes";
import { Input } from "@material-ui/core";
import TextInput from "./common/TextInput";

const Repository = React.lazy(() => import("./repository/Repository"));
const App: React.FC = () => {
    const { loading, error, data, refetch, networkStatus } = useQuery(
        gql`
            {
                getRepositories {
                    name
                }
            }
        `,
        { notifyOnNetworkStatusChange: true }
    );

    // React.useEffect(() => {}, []);

    // console.log(loading, error, data.getRepositories);

    // const [state, setState] = React.useState({ number: 0, responseData: [] });

    // const handleRerender = () => {
    //     setState({ ...state, number: Math.random() });
    // };

    // const client = useApolloClient();

    // const handleManualFiring = async () => {
    //     const { data } = await client.query({
    //         query: gql`
    //             {
    //                 getRepositories {
    //                     name
    //                 }
    //             }
    //         `
    //     });

    //     console.log("manual", data);
    //     // setState({ ...state, responseData: data });
    // };

    // if (networkStatus === 4) {
    //     return <div>Refetching!</div>;
    // }
    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // const UPDATE_USER = gql`
    //     mutation updateUser($username: String!) {
    //         updateUser(username: "ss") {
    //             username
    //             id
    //         }
    //     }
    // `;

    return (
        <div className="app-container">
            <Drawer />
            <div className="route-container">
                <TextInput />
                <Card>
                    <SearchIcon htmlColor={"#cccccc"} />

                    {/* <button onClick={handleRerender}>rerender</button> */}
                    {/* <button onClick={() => refetch()}>Refetch</button> */}
                    {/* <button onClick={handleManualFiring}>Manual fetch</button> */}
                </Card>
                {/* {data.getRepositories.map((datum: any) => {
                    return <div key={datum.name}>{datum.name}</div>;
                })} */}
                <React.Suspense fallback={<div>loading</div>}>
                    <Switch>
                        <Route path={[AppRoutes.ROOT, AppRoutes.REPOSITORY]} component={Repository} />
                    </Switch>
                </React.Suspense>
            </div>
        </div>
    );
};

export default App;
