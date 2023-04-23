import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

const ResultSummaryItem = ({ result }) => {

    return (
        <li className="list-group-item" key={result.gameID}>
            <div className="row">
                <div className="col-9">
                    <h1>
                        {result.external}
                    </h1>
                    <div>
                        The current lowest price: ${result.cheapest}
                    </div>
                    <Link to={`/game/detail/${result.gameID}`}> Detail </Link>
                </div>

                <div className="col-3">
                    <h1>
                        <img src={result.thumb} alt="game icon" className="rounded wd-game-summary-image"></img>
                    </h1>
                </div>

            </div>


        </li >
    );
};
export default ResultSummaryItem;