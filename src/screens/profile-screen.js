import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { profileThunk, logoutThunk, updateUserThunk } from "../services/auth-thunks";
import Reviews from '../component/reviews-component'
import Followers from '../component/followers'
import ProfileComponent from '../component/profile-component'


function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUser = async () => {
            const { payload } = await dispatch(profileThunk());
            setProfile(payload);
        };
        fetchUser();
    }, [currentUser._id]);

    return (
        <div>
            <h1>Profile Screen</h1>
            <ProfileComponent profile={profile} />
            <Reviews userId={currentUser._id} />
            <Followers userId={currentUser._id} />
        </div>


    );

}
export default ProfileScreen;