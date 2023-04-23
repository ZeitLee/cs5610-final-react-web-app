import React, { useState, useEffect } from 'react'
import { getFollowers, getFollowing } from '../services/follow-service'

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

    useEffect(() => {
        fetchFollowers();
        fetchFollowing();
    }, [])

    return (
        <div>
            <h1>Followers</h1>
            <pre>{JSON.stringify(followers, null, 2)}</pre>
            <ul className="list-group">
                {followers?.map((ele) => (
                    <li className="list-group-item" key={ele._id}>
                        {ele.followerId.firstname} {ele.followerId.lastname}
                    </li>
                ))}

            </ul>
            <h2>Following</h2>
            <ul className="list-group">
                {following?.map((ele) => (
                    <li className="list-group-item" key={ele._id}>
                        {ele.followedId.firstname} {ele.followedId.lastname}
                    </li>
                ))}

            </ul>
            <pre>{JSON.stringify(following, null, 2)}</pre>
        </div>

    )

}

export default Followers;