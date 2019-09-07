import * as React from "react";
import LanguageLabel from "../../../common/LanguageLabel";
import { Card } from "../../../common/Card";
import "../../../../../src/styles/components/repository/repositoryList/card/repositoryCard.scss";

interface Props {
    name: string;
    languages: Array<string>;
}

export const RepositoryCard: React.SFC<Props> = (props) => {
    return (
        <div className="repository-card-container">
            <Card>
                <div className="title-section">
                    <div className="title text-h2">{props.name}</div>
                </div>
                <div className="languages-section">
                    {props.languages.map((language) => (
                        <LanguageLabel key={language} language={language} />
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default RepositoryCard;
