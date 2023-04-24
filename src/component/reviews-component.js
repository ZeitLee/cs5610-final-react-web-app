import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { findMyReviews, deleteReview } from '../services/review-service'
import { Link } from "react-router-dom";

function Reviews({ userId }) {
    const { currentUser } = useSelector((state) => state.user);
    const [reviews, setReviews] = useState([]);

    const getMyReviews = async () => {
        const response = await findMyReviews(userId);
        setReviews(response);
    };

    const deleteMyReview = async (rid) => {
        const response = await deleteReview(rid);
        getMyReviews();
    }

    useEffect(() => {
        getMyReviews();
    }, [userId])

    return (
        <div className="border border-2 mt-3">
            <h2>My Reviews</h2>

            <div className="list-group">
                {reviews?.map((review) => {
                    return (
                        <div className="list-group-item">
                            <div className="row">
                                <div className="col-8">
                                    <h4><Link to={`/game/detail/${review.gameId}`}>{review.gameName}</Link></h4>
                                    <div className="border rounded py-2 px-3 mt-3">
                                        {review.text}
                                    </div>
                                    {currentUser._id === userId && <button className="btn btn-danger mt-3 mb-2" onClick={() => deleteMyReview(review._id)}> Delete</button>}
                                </div>

                                <div className="col-4 my-auto">
                                    <img src={review.gameIcon} alt="game icon" className="float-end " width="100%"></img>
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>

    )

}

export default Reviews;