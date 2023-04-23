import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { createReview, findGameReviews } from "../services/review-service"
import { useParams, Link } from "react-router-dom"

const UserReview = ({ game }) => {
    const { currentUser } = useSelector((state) => state.user);
    const [review, setReview] = useState([]);
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();

    const postReview = async () => {
        const newReview = await createReview({
            text: review,
            gameId: id,
            gameName: game.info.title,
            userId: currentUser._id
        });
        window.location.reload();
    }

    const getGameReviews = async () => {
        const response = await findGameReviews(id);
        setReviews(response);
    }

    useEffect(() => {
        getGameReviews();
    }, []);


    return (
        <div className="border">
            <h1>Review</h1>

            <ul className="list-group">
                {reviews?.map((review) => {
                    return (
                        <Link to={`/profile/${review.userId}`} className="list-group-item" key={review._id}>
                            {review.text}
                        </Link>
                    )
                })}
            </ul>

            {currentUser &&
                <div>
                    <textarea className="form-control" onChange={e => setReview(e.target.value)}></textarea>
                    <button className="btn btn-success" onClick={postReview}>Post Review</button>
                </div>
            }

        </ div >
    );



};
export default UserReview;