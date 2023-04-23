import React, { useState } from "react";
import { useNavigate } from "react-router-dom"


const SearchComponent = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const searchPrice = async () => {
        navigate(`/search/${search}`);
    }

    return (
        <>
            <h4>Search</h4>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <button onClick={searchPrice}>Search</button>
        </>
    );
};
export default SearchComponent;