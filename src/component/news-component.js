import React, { useState, useEffect } from "react";

const NewComponent = ({ news }) => {

    return (
        <div className="list-group-item">
            <div className="row">

                <div className="col-8">
                    <h4>{news.gameName}</h4>
                    <div className="border rounded px-3">
                        {news.text}
                    </div>
                    <p className="float-end mt-2"> Reviewed by: {news.userId.firstname} {news.userId.firstname}</p>
                    {/* {JSON.stringify(news.userId.firstname, null, 2)} */}
                </div>

                <div className="col-4">
                    <img src={`/images/myAvatar.jpeg`} alt="user" width="100px" height="100px" className="float-end rounded-circle"></img>
                </div>
            </div>
        </div >
    );
};
export default NewComponent;