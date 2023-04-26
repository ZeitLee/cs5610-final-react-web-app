import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "../index.css"


const SearchComponent = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const searchPrice = async () => {
        navigate(`/search/${search}`);
    }

    return (
        <div className="border border-2 border-dark mt-3 rounded px-3 wd-bg-lightyellow">

            <h2 className="ps-3 pt-3">Search Page</h2>
            <div className="row ps-4">
                <div className="col-6 position-relative">
                    <input type="text" id="search" value={search} onChange={(e) => setSearch(e.target.value)}
                        className="rounded-pill form-control ps-5" placeholder="Sreaching game title" />
                    <label for="search"><i className="bi bi-search wd-mag-pos text-muted"></i></label>
                </div>

                <div className="col-6">
                    <button onClick={searchPrice} className="btn btn-info rounded">
                        <span className="fst-italic">
                            Search
                        </span>
                    </button>
                </div>
            </div>



        </div>
    );
};
export default SearchComponent;