import React from "react";
import DealItem from "./deal-item"

const DetailItem = ({ game }) => {
    if (game === null) {
        return (<h1>Loading...</h1>);
    } else {
        return (
            <div className="border">
                <div className="row">
                    < div className="col-7 my-2" >
                        <img src={game.info.thumb} alt="game icon" width="80%" className="ms-3"></img>
                    </div >

                    <div className="col-5 my-2">
                        <h1>{game.info.title}</h1>
                        <p>The cheapest price ever: ${game.cheapestPriceEver.price}</p>
                    </div>
                    {/* <pre>{JSON.stringify(game, null, 2)}</pre> */}
                </div >

                <ul className="list-group">
                    {
                        game.deals?.map(deal =>
                            <DealItem key={deal.dealID} deal={deal} />)
                    }
                </ul>
            </ div >

        );
    }


};
export default DetailItem;