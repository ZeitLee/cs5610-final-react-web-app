import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getGame } from "../services/search-service"
import { useSelector } from "react-redux";
import DetailItem from "./detail-item"
import UserReview from "./user-review"



const DetailComponent = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
        const fetchGame = async () => {
            const response = await getGame(id);
            setGame(response);
        };
        fetchGame();
    }, [id]);

    return (
        <>
            <h1>Detail Page</h1>

            <DetailItem game={game} />
            <UserReview game={game} />
        </>
    );
};
export default DetailComponent;