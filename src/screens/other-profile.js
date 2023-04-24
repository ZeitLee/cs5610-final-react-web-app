import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import { findUserById } from '../services/auth-service'
import { createFollow } from '../services/follow-service'
import Followers from '../component/followers'
import ProfileComponent from '../component/profile-component'
import Reviews from '../component/reviews-component'

function OtherProfile() {
    const { id } = useParams();
    const [user, setUser] = useState({});

    const fetchUser = async () => {
        const response = await findUserById(id);
        setUser(response);
    }
    useEffect(() => {
        fetchUser();
    }, [id])

    const followAction = async () => {
        const response = await createFollow(id);
    }

    return (
        <div>
            <h1>Ohter Profile <button onClick={followAction} className="btn btn-primary float-end">Follow</button></h1>
            <ProfileComponent profile={user} />
            <Reviews userId={id} />
            <Followers userId={id} />
        </div>
    );
}

export default OtherProfile;