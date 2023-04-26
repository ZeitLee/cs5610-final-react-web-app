import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fullTextSearch } from "../services/search-service"
import ResultSummaryItem from "./result-summary-item"
import SearchComponent from './index'


const GameSummaryList = () => {
    const { title } = useParams();
    const [result, setResult] = useState([]);

    useEffect(() => {
        const fetchGameSummary = async () => {
            const response = await fullTextSearch(title);
            setResult(response);
        };
        fetchGameSummary();
    }, [title]);

    return (
        <>
            <SearchComponent />
            <div className="list-group mt-3">
                {
                    result?.map(res =>
                        <ResultSummaryItem result={res} />)
                }
            </div>
        </>
    );
};
export default GameSummaryList;