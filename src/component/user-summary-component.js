import React, { useState, useEffect, useId } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

function UserSummaryComponent({ userId }) {
    return (
        <div className="list-group-item border border-0">
            <div className="row rounded">
                <div className="col-4">
                    <img src={`/images/myAvatar.jpeg`} className="rounded-circle ms-0 ps-0 d-none d-lg-block" width={60}></img>
                </div>

                <div className="col-8 text-truncation">
                    <Link to={`/profile/${userId._id}`}><span className="fw-bold ">{userId.firstname} {userId.lastname}</span></Link>

                    <FontAwesomeIcon icon={faCircleCheck} className="text-primary ps-2" /> <br />
                    <span className="text-muted"> @{userId.username}</span>
                </div>
            </div>
        </div >
    );
}

export default UserSummaryComponent;