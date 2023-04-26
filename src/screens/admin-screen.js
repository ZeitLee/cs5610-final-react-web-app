import React, { useEffect, useState } from "react";
import { findAllReviews, deleteReview } from '../services/review-service'
import NewComponent from '../component/news-component'
import '../index.css'
import { useSelector } from "react-redux";
import { findAllUser } from "../services/auth-service"
import UserSummaryComponent from '../component/user-summary-component'

const AdminScreen = () => {
    const { currentUser } = useSelector((state) => state.user);

    const [users, setUsers] = useState([]);
    const [reviews, setReviews] = useState([]);

    const getUsers = async () => {
        const response = await findAllUser();
        setUsers(response);
    }

    const fetchReviews = async () => {
        const response = await findAllReviews();
        setReviews(response);
    };

    const deleteMyReview = async (rid) => {
        const response = await deleteReview(rid);
        fetchReviews();
    }

    useEffect(() => {
        getUsers();
        fetchReviews();
    }, []);


    return (
        <>
            <div className="row">
                <h2 className="text-white my-3 border-top mt-4 border-3 border-white">All Users</h2>
                <div className="list-group">
                    {users?.map((ele) => (
                        <div className="list-group-item">

                            <UserSummaryComponent key={ele._id} userId={ele} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="row ">
                <div className="">
                    <h2 className="mx-2 my-3 text-white border-top border-5 my-5 border-white">All Reviews</h2>
                    {currentUser && <div className="list-group">
                        {
                            reviews?.map(news =>
                                <div >
                                    <NewComponent news={news} key={news._id} />
                                    <button className="btn btn-danger mt-3 mb-2 text-end mb-4" onClick={() => deleteMyReview(news._id)}> Delete</button>
                                </div>
                            )
                        }
                    </div>}
                </div>
            </div>


        </>
    );
};
export default AdminScreen;