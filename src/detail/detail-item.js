import React from "react";
import DealItem from "./deal-item"
import '../index.css'

const DetailItem = ({ game }) => {
    if (game === null) {
        return (<h1>Loading...</h1>);
    } else {
        return (
            <div className="border border-2 border-dark rounded wd-bg-lightred">
                <div className="row">
                    < div className="col-6 my-2" >
                        <img src={game.info.thumb} alt="game icon" width="90%" className="ms-3 my-2 rounded"></img>
                    </div >

                    <div className="col-6 my-2">
                        <h1 className="fw-bold text-center fs-1 mx-5 mt-5">{game.info.title}</h1>
                        <p className="text-end text-center text-success fw-bold fs-5 me-3">The cheapest price ever: ${game.cheapestPriceEver.price}</p>
                    </div>
                </div >

                <div className="list-group my-3">
                    {
                        game.deals?.map(deal =>
                            <DealItem deal={deal} />)
                    }
                </div>
            </ div >

        );
    }


};
export default DetailItem;