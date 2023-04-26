import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

const ResultSummaryItem = ({ result }) => {

    return (
        <div className="list-group-item border-2 border-dark " >
            <div className="row">
                < div className="col-9" >
                    <h2 className="d-block p-2 bg-primary text-white rounded-pill text-center fst-italic mt-3">
                        {result.external}
                    </h2>
                    <div className="text-end pe-3 fst-italic fs-5">
                        <strong>The current lowest price: ${result.cheapest}</strong>
                    </div >
                    <Link to={`/game/detail/${result.gameID}`} className="float-end pe-3 pt-1"> Detail</Link>
                </div >

                <div className="col-3 align-self-center">
                    <img src={result.thumb} alt="game icon" className="rounded wd-game-summary-image"></img>
                </div>

            </div >


        </div >
    );
};
export default ResultSummaryItem;