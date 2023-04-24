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
        <div className="row my-5">
            <div className="col-6">
                <h1>Followers</h1>
                <div className="">
                    {followers?.map((ele) => (
                        <div className="row border mx-1 rounded">
                            <div className="col-8">
                                <span className="">{ele.followerId.firstname} {ele.followerId.lastname}</span>
                            </div>

                            <div className="col-4 py-3">
                                <img src={`/images/myAvatar.jpeg`} className="rounded-circle float-end" width="50px" height="50px"></img>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div className="col-6">
                <h2>Following</h2>
                <ul className="list-group">
                    {following?.map((ele) => (
                        <div className="row border mx-1 rounded">
                            <div className="col-8">
                                <span className="">{ele.followedId.firstname} {ele.followedId.lastname}</span>
                            </div>

                            <div className="col-4 py-3">
                                <img src={`/images/myAvatar.jpeg`} className="rounded-circle float-end" width="50px" height="50px"></img>
                            </div>
                        </div>
                    ))}

                </ul>
            </div>


        </div>

    )

}

export default Followers;