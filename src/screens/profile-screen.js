import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { profileThunk, logoutThunk, updateUserThunk } from "../services/auth-thunks";
import Reviews from '../component/reviews-component'
import Followers from '../component/followers'
import ProfileComponent from '../component/profile-component'
import ClubList from '../component/clubs-component'


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
            <div className="row">
                <div className="col-8">
                    <ProfileComponent profile={profile} />
                    <div className="row">
                        <ClubList userId={currentUser._id} />
                    </div>
                    <div className="row">
                        <Reviews userId={currentUser._id} />
                    </div>


                </div>
                <div className="col-4">
                    <Followers userId={currentUser._id} />
                </div>
            </div>
        </div >
    );

}
export default ProfileScreen;