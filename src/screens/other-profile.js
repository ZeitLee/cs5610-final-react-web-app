import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { findUserById } from '../services/auth-service'
import { createFollow } from '../services/follow-service'
import Followers from '../component/followers'
import ProfileComponent from '../component/profile-component'
import Reviews from '../component/reviews-component'

function OtherProfile() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        const response = await findUserById(id);
        setUser(response);
    }
    useEffect(() => {
        fetchUser();
    }, [id])

    if (user === null) {
        return (<h1>Loading...</h1>);
    }

    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <ProfileComponent profile={user} />
                    <Reviews userId={id} />

                </div>
                <div className="col-4">
                    <Followers userId={id} />
                </div>




            </div>


        </div>
    );
}

export default OtherProfile;