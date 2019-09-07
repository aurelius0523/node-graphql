import * as React from "react";

export const Card: React.SFC = (props) => {
    return <div className="card-container">{props.children}</div>;
};
