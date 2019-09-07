import * as React from "react";
import "./repositoryCardShimmer.scss";
import { Card } from "../Card";

export const RepositoryCardShimmer: React.SFC = () => {
    return (
        <div className="repository-card-shimmer-container">
            <Card>
                <div className="title shimmer" />
                <div className="languages-section">
                    <div className="languages shimmer" />
                    <div className="languages shimmer" />
                    <div className="languages shimmer" />
                </div>
            </Card>
        </div>
    );
};
