import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import '../index.css'

const NewComponent = ({ news }) => {

    return (
        <div className="list-group-item bg-warning border border-2 border-white" key={news._id}>
            <div className="row">

                <div className="col-8">
                    <h4 className="mt-2">{news.gameName}</h4>
                    <div className="border border-white rounded px-3 py-2 mt-2">
                        <Link to={`/game/detail/${news.gameId}`}>{news.text}</Link>
                    </div>
                    <p className="float-end mt-2"> Reviewed by: {news.userId.firstname} {news.userId.lastname}</p>
                </div>

                <div className="col-4">
                    <img src={`/images/myAvatar.jpeg`} alt="user" width="100px" height="100px" className="float-end rounded-circle mt-4"></img>
                </div>
            </div>
        </div >
    );
};
export default NewComponent;