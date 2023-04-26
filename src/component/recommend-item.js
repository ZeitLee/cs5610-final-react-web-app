import React, { useState, useEffect } from "react";
import '../index.css'
import { getGame } from '../services/search-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons';

const RecommendItem = ({ gameId }) => {
    const [game, setGame] = useState(null);

    const getGameInfo = async () => {
        const response = await getGame(gameId);
        setGame(response);
    };

    useEffect(() => {
        getGameInfo();
    }, [])

    if (game === null) {
        return <h4>Loading...</h4>;
    }

    return (

        <div class="card">
            <img class="card-img-top wd-game-recommend-image " src={game.info.thumb} alt="Card image cap of the game" />
            <div class="card-body">
                <div className="row wd-fixed-height mx-2 text-center">
                    <h5 class="card-title mx-2"> {game.info.title} </h5>
                </div>
                <div className="row mx-2">
                    <p class="card-text text-success text-center" >The cheapest price ever: ${game.cheapestPriceEver.price}</p>
                    <a href={`/game/detail/${gameId}`} class="btn btn-primary float-end ">
                        <FontAwesomeIcon icon={faSquareUpRight} className="pe-2" /> To Page
                        </a>
                </div>



            </div>
        </div>


    );
};
export default RecommendItem;