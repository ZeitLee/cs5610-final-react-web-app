import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faLocation, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import "../index.css"
import { Link } from "react-router-dom";

const ProfileComponent = ({ profile }) => {
    const { currentUser } = useSelector((state) => state.user);

    // if (profile === undefined || profile === {} || profile === null) {
    //     return (<h4>Loading...</h4>);
    // }

    return (
        <div className="row border mt-1 rounded pb-3">

            <div className="row mt-2">
                <div className="col-1">
                    <Link to="/profile">
                        <FontAwesomeIcon icon={faArrowLeft} size="xl" fixedWidth color="gray" className="mt-2" />
                    </Link>
                </div>

                <div className="col-11">
                    <div className="">
                        <b className="fs-5">{profile.firstname} {profile.lastname}</b>
                    </div>
                </div>
            </div>

            <div className="position-relative pt-2">
                <img src={`/images/banner.jpeg`} width="100%" />
                <img src={`/images/myAvatar.jpeg`}
                    className="rounded-circle px-0 position-absolute wd-left-bottom border border-3" width={100} height={100} />
                {profile === currentUser && <Link to="/profile/edit-profile" className="position-absolute wd-right-bottom btn btn-light border border-2 border-dark rounded-pill py-1">
                    Edit Profile
                </Link>}

            </div>

            <div className="mt-5 pt-3">
                <b className="px-2 fs-4">{profile.firstname} {profile.lastname}</b>
                <br />
                <small className="text-muted px-2">@{profile.username}</small>
            </div>

            {profile.medal &&
                <div className="ms-2 mt-2">
                    Medal:
                <div className="mt-2 ps-1">
                        <span className="border border-1 rounded px-3 bg-warning">{profile.medal}</span>
                    </div>
                </div>}


            {/* <div className="row mt-3 text-muted pb-3">
                <div className="col-4 text-truncate ps-4">
                    <FontAwesomeIcon icon={faLocation} />
                    {profile.location && <span className="ps-2">{profile.location}</span>}
                    {!profile.location && <span className="ps-2">Unknown</span>}
                </div>

                <div className="col-4 text-truncate ps-1">
                    <FontAwesomeIcon icon={faCakeCandles} />
                    {profile.dob && <span className="ps-2">{profile.dob.substring(0, 10)}</span>}
                    {!profile.dob && <span className="ps-2">Unknown</span>}
                </div>

                <div className="col-4 text-truncate ps-2">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span className="ps-2">Joined {profile.createdAt.substring(0, 10)}</span>
                </div>
            </div> */}
        </div >

    );
};

export default ProfileComponent;