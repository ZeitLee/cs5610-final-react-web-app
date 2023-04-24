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
            gameIcon: game.info.thumb,
            userId: currentUser._id
        });
    }

    const getGameReviews = async () => {
        const response = await findGameReviews(id);
        setReviews(response);
    }

    useEffect(() => {
        getGameReviews();
    }, [id]);


    return (
        <div className="border mt-3">
            <h1>Review</h1>

            <ul className="list-group">
                {reviews?.map((review) => {
                    return (
                        <div className="list-group-item">
                            <div className="row">
                                <div className="col-7">
                                    <h2>{`${review.userId.firstname} ${review.userId.lastname}`}</h2>
                                    <Link to={`/profile/${review.userId}`} className="" key={review._id}>
                                        {review.text}
                                    </Link>
                                </div>

                                <div className="col-5">
                                    <img src={`/images/myAvatar.jpeg`} className="rounded-circle float-end" width="100px" height="100px"></img>
                                </div>

                            </div>
                        </div>
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