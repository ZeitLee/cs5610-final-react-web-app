import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { fullTextSearch } from "../services/search-service"
import ResultSummaryItem from "./result-summary-item"


const GameSummaryList = () => {
    const { title } = useParams();
    const [search, setSearch] = useState(title);
    const [result, setResult] = useState([]);
    const navigate = useNavigate();
    const searchPrice = async () => {
        const response = await fullTextSearch(search);
        setResult(response);
        navigate(`/search/${search}`);
    }

    useEffect(() => {
        const fetchGameSummary = async () => {
            const response = await fullTextSearch(title);
            setResult(response);
        };
        fetchGameSummary();
    }, [title]);

    if (result === null) {
        return (
            <h1>Loading...</h1>
        );
    }

    return (
        <>
            <h4>Search</h4>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <button onClick={searchPrice}>Search</button>
            <ul className="list-group">
                {
                    result?.map(res =>
                        <ResultSummaryItem key={res.gameID} result={res} />)
                }
            </ul>
        </>
    );
};
export default GameSummaryList;