import React, { useState, useEffect } from "react";
import { findClubs } from '../services/member-service'
import { Link } from 'react-router-dom'


const ClubList = ({ userId }) => {
    const [clubs, setClubs] = useState([]);

    const fetchClubs = async () => {
        const response = await findClubs(userId);
        setClubs(response);
    }

    useEffect(() => {
        fetchClubs();
    }, [userId])

    return (
        <div className="border border-5 border-white wd-bg-lightgreen rounded mt-3">
            <h2 className="text-center py-2"> Joined Club</h2>

            <ul class="d-flex flex-wrap mx-auto ">
                {clubs?.map((club) => (
                    <li class="list-group-item m-2 bg-light rounded text-center">
                        <Link to={`/clubs/${club.clubId._id}`} className="mx-3">{club.clubId.name}</Link> <br />
                        <img src="/images/club-default.jpeg" className="rounded m-3" width={100}></img>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default ClubList;