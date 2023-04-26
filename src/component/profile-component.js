import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faLocation, faArrowLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { createFollow, deleteFollow } from '../services/follow-service'
import "../index.css"
import { Link } from "react-router-dom";

const ProfileComponent = ({ profile }) => {
    const { currentUser } = useSelector((state) => state.user);

    const followAction = async () => {
        const response = await createFollow(profile._id);
    }

    const deleteAction = async () => {
        const response = await deleteFollow(profile._id);
    }

    const loginVisiable = () => {
        if (currentUser === null) {

        }
        else if (profile === currentUser) {
            return (
                <Link to="/profile/edit-profile" className="position-absolute wd-right-bottom btn btn-light border border-2 border-dark rounded-pill py-1">
                    Edit Profile
                </Link>
            );
        } else {
            return (
                <div className="">
                    <button onClick={followAction} className="btn btn-primary position-absolute wd-right-bottom-1" > Follow</button >
                    <button onClick={deleteAction} className="btn btn-danger position-absolute wd-right-bottom" > Delete</button >
                </div>

            );
        }
    }

    const backButton = () => {
        if (currentUser !== null) {
            return "/profile";
        } else {
            return "/";
        }
    }


    return (
        <div className="row border border-5 mt-4 rounded pb-3 wd-bg-lightyellow">
            <div className="row mt-2">
                <div className="col-1">
                    <Link to={backButton()}>
                        <FontAwesomeIcon icon={faArrowLeft} size="xl" fixedWidth color="gray" className="mt-2" />
                    </Link>
                </div>

                <div className="col-11">
                    <div className="">
                        <b className="fs-5">{profile.firstname} {profile.lastname}</b>
                    </div>
                </div>
            </div>

            <div className="position-relative pt-2 mt-2">
                <img src={`/images/banner.jpeg`} width="100%" />
                <img src={`/images/myAvatar.jpeg`}
                    className="rounded-circle px-0 position-absolute wd-left-bottom border border-3" width={100} height={100} />
                {loginVisiable()}
            </div>

            <div className="mt-5 pt-3">
                <b className="px-2 fs-3">{profile.firstname} {profile.lastname}</b>
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary ps-1" />
                <span className="text-muted px-2 fs-5">@{profile.username}</span>
            </div>

            {profile.medal &&
                <div className="mt-2">
                    <span className="fw-bold mx-2">Bio:</span>
                    <div className="mt-2 p-3 border border-1 bg-light mx-3">
                        <span className=" rounded px-3">{profile.medal}</span>
                    </div>
                </div>}

            {currentUser &&
                <>
                    <div className="mt-3">
                        <span className="mx-2">Email:</span>
                        <span className="text-muted p-4">{profile.email}</span>
                    </div>

                    <div className="row mt-3 text-muted pb-3">
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
                    </div>
                </>}



        </div >

    );
};

export default ProfileComponent;