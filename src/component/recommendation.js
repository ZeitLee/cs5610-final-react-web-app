import React, { useState, useEffect } from "react";
import '../index.css'
import RecommendItem from './recommend-item'
const Recommendation = ({ }) => {

    const games = [612, 255, 31, 630, 61];

    return (
        <div className="border-top">
            <h2 className="text-center py-2"> Guess You Like</h2>
            <div class="card-group card-group-scroll ">
                {games?.map((id) => {
                    return (
                        <RecommendItem gameId={id} />
                    );
                })}
            </div>


        </div >

    );
};
export default Recommendation;