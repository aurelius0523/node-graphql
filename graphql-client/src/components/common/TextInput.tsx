import * as React from "react";

export const TextInput: React.SFC = (props) => {
    return (
        <span className="text-input-container">
            <input type="text" placeholder="Search" />
        </span>
    );
};

export default TextInput;
