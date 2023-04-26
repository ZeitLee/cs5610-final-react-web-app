import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import UserSummaryComponent from './user-summary-component'
import { findAllUser } from "../services/auth-service"

function WhoToFollow() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await findAllUser();
        setUsers(response);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <h2 className="text-white my-3">Who To Follow</h2>
            <div className="list-group">
                {users?.map((ele) => (
                    <UserSummaryComponent key={ele._id} userId={ele} />
                ))}
            </div>
        </div>

    );
}

export default WhoToFollow;