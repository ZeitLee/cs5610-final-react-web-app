import React, { useEffect, useState } from "react";
import { findAllReviews, deleteReview } from '../services/review-service'
import NewComponent from '../component/news-component'
import '../index.css'
import { useSelector } from "react-redux";
import { findAllUser } from "../services/auth-service"
import UserSummaryComponent from '../component/user-summary-component'
import { findAllClubs, deleteClubById } from '../services/club-service'
import { Link } from "react-router-dom";

const AdminScreen = () => {
    const { currentUser } = useSelector((state) => state.user);

    const [users, setUsers] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [clubs, setClubs] = useState([]);

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

    const getAllClubs = async () => {
        const response = await findAllClubs();
        setClubs(response);
    };

    const deleteClub = async (cid) => {
        const response = await deleteClubById(cid);
        getAllClubs();
    }


    useEffect(() => {
        getUsers();
        fetchReviews();
        getAllClubs();
    }, []);


    return (
        <>
            <div className="row">
                <h2 className="text-white my-3 border-top mt-4 border-3 border-white pt-3">All Users</h2>
                <div className="list-group">
                    {users?.map((ele) => (
                        <div className="list-group-item">
                            <UserSummaryComponent key={ele._id} userId={ele} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="row mt-3">
                <h2 className="my-3 text-white border-top border-5 mt-5 border-white pt-3">All Reviews</h2>
                {currentUser && <div className="list-group">
                    {
                        reviews?.map(news =>
                            <div className="mx-2">

                                <NewComponent news={news} key={news._id} />
                                <div className="border-bottom mb-3 border-white">
                                    <button className="btn btn-danger my-2 ms-3" onClick={() => deleteMyReview(news._id)}> Delete</button>
                                </div>
                            </div>
                        )
                    }
                </div>}
            </div>

            <div className="row list-group mt-3 ">
                <h2 className="my-3 text-white border-top border-5 mt-5 border-white pt-3">All Clubs</h2>


                {clubs?.map((club) => (
                    <div className="list-group-item  ">

                        <div className="row">

                            <div className="col-8">
                                <h2>{club.name}</h2>
                                <div className="border rounded py-3 bg-warning ">
                                    <p className="text-muted ps-3">{club.intro}</p>
                                    <Link to={`/clubs/${club._id}`} className="ps-3 pt-1"> Go to main page</Link>
                                </div>

                                {/* <button className="btn btn-danger my-2 ms-3 float-end" onClick={() => deleteClub(club._id)}> Delete</button> */}
                            </div>


                            <div className="col-4 d-flex align-items-center justify-content-end">
                                <img src="/images/club-default.jpeg" alt="c-icon" className="" height={150}></img>
                            </div>

                        </div>

                    </div >
                ))}
            </div>


        </>
    );
};
export default AdminScreen;