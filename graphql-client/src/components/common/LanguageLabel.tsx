import * as React from "react";
import RoundIcon from "@material-ui/icons/FiberManualRecordRounded";
const LanguageColor = require("../../assets/json/languageColors.json");

interface LanguageLabelProps {
    language: string;
}

const LanguageLabel: React.SFC<LanguageLabelProps> = (props) => {
    const determineColor = (language: string) => {
        return LanguageColor[language];
    };

    return (
        <span className="language-label-container">
            <div className="wrapper">
                <RoundIcon style={{ fill: determineColor(props.language) }} />
                <span className="title">{props.language}</span>
            </div>
        </span>
    );
};

export default LanguageLabel;
