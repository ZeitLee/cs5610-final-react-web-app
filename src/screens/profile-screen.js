import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../services/auth-thunks";
import { findMyReviews } from '../services/review-service'
import { Link } from "react-router-dom";
import Followers from '../component/followers'


function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);
    const [reviews, setReviews] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = () => {
        dispatch(updateUserThunk(profile));
    };

    const getMyReviews = async () => {
        const response = await findMyReviews();
        setReviews(response);
    };

    useEffect(() => {
        const fetchUser = async () => {
            const { payload } = await dispatch(profileThunk());
            setProfile(payload);
            getMyReviews();
        };
        fetchUser();
    }, []);

    return (
        <div>
            <h1>Profile Screen</h1>
            {profile && (
                <div>
                    <div>
                        <label>First Name</label>
                        <input type="text"
                            value={profile.firstname}
                            onChange={(event) => {
                                const newProfile = {
                                    ...profile,
                                    firstname: event.target.value,
                                };
                                setProfile(newProfile);
                            }}
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text"
                            value={profile.lastname}
                            onChange={(event) => {
                                const newProfile = {
                                    ...profile,
                                    lastname: event.target.value,
                                };
                                setProfile(newProfile);
                            }}
                        />
                    </div>
                </div>
            )}
            <button
                onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/login");
                }}>
                Logout</button>
            <button onClick={save}>Save</button>

            <h2>My Reviews</h2>

            {reviews?.map((reviews) => {
                return <Link to={`/game/detail/${reviews.gameId}`}>{reviews.text} <br /></Link>;
            })}

            <Followers userId={currentUser._id} />

        </div>


    );

}
export default ProfileScreen;