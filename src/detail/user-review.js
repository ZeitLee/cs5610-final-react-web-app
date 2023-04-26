import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { createReview, findGameReviews } from "../services/review-service"
import { useParams, Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import "../index.css"

const UserReview = ({ game }) => {
    const { currentUser } = useSelector((state) => state.user);
    const [title, setTitle] = useState([]);
    const [review, setReview] = useState([]);
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();

    const postReview = async () => {
        const newReview = await createReview({
            title: title,
            text: review,
            gameId: id,
            gameName: game.info.title,
            gameIcon: game.info.thumb,
            userId: currentUser._id
        });
        getGameReviews();
    }

    const getGameReviews = async () => {
        const response = await findGameReviews(id);
        setReviews(response);
    }

    useEffect(() => {
        getGameReviews();
    }, [id]);


    return (
        <div className="border rounded  border-dark container my-3 wd-bg-lightyellow">
            <h1 className="ms-3 my-2"> User Reviews</h1>

            <div className="list-group my-3">
                {reviews?.map((review) => {
                    return (
                        <div className="list-group-item">
                            <div className="row">
                                <div className="col-8">
                                    <h3 className="ps-3 mt-1">

                                        {review.title}
                                        <FontAwesomeIcon icon={faComment} className="ps-3   " />
                                    </h3>


                                    <div className="border border-primary rounded ms-3 me-5 mt-4 py-2 px-3">
                                        <Link to={`/profile/${review.userId._id}`} key={review._id}>
                                            {review.text}
                                        </Link>
                                    </div>

                                    <div className="text-muted text-end mt-2 me-5">
                                        Reviewed by: {`${review.userId.firstname} ${review.userId.lastname}`}
                                    </div>
                                </div>

                                <div className="col-4">
                                    <img src={`/images/myAvatar.jpeg`} className="rounded-circle float-end mt-3" width="100px" height="100px"></img>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>

            {currentUser &&
                <div className="border border-success rounded my-3 wd-bg-lightgreen">
                    <h2 className="ms-3 my-3"> Post your review</h2>
                    <div className="ms-3">
                        Title: <input type="text" className="ms-2 my-2 w-50" onChange={e => setTitle(e.target.value)}></input>
                    </div>

                    <div className="ms-3">
                        Comment:
                        <textarea className="form-control mt-2 w-75" onChange={e => setReview(e.target.value)} ></textarea>
                    </div>

                    <div className="text-end">
                        <button className="btn btn-success my-3 me-4" onClick={postReview}>Post Review</button>
                    </div>

                </div>
            }

        </ div >
    );



};
export default UserReview;