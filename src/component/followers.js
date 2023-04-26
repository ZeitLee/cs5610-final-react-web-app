import React, { useState, useEffect } from 'react'
import { getFollowers, getFollowing } from '../services/follow-service'
import UserSummaryComponent from '../component/user-summary-component'

function Followers({ userId }) {
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);

    const fetchFollowers = async () => {
        const response = await getFollowers(userId);
        setFollowers(response);
    }

    const fetchFollowing = async () => {
        const resposne = await getFollowing(userId);
        setFollowing(resposne);
    }

    const followerDisplay = () => {
        if (followers.length === 0) {
            return (<div className="list-group-item"><h4 className="text-center border border-white rounded py-2"> No followers.</h4></div>);
        }
        return (
            followers?.map((ele) => (
                <div className="list-group-item">
                    <UserSummaryComponent userId={ele.followerId} />
                </div>
            ))
        );
    }

    const followingDisplay = () => {
        if (following.length === 0) {
            return (<div className="list-group-item"><h4 className="text-center border border-white rounded py-2"> No following.</h4></div>);
        }
        return (
            following?.map((ele) => (
                <UserSummaryComponent userId={ele.followedId} />
            ))
        );
    }

    useEffect(() => {
        fetchFollowers();
        fetchFollowing();
    }, [])

    return (
        <div className="mx-4 mt-4">
            <div className="row border border-dark rounded bg-primary text-white">
                <h2 className="text-center py-2">Followers</h2>
                <div className="list-group my-3 ms-1 ">
                    {followerDisplay()}
                </div>
            </div>

            <div className="row bg-info border border-dark rounded mt-3">
                <h2 className="text-center py-2">Following</h2>
                <div className="list-group my-3 ms-1">
                    {followingDisplay()}
                </div>
            </div>


        </div>

    )

}

export default Followers;