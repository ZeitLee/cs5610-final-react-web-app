import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faLocation, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import "../index.css"
import { Link } from "react-router-dom";

const Profile = (
    {
        profile = {
            firstName: "Default",
            lastName: "Name",
            handle: "@Zeit-Lee",
            profilePicture: "myAvatar.jpeg",
            bannerPicture: "banner.jpeg",
            bio: "Computer Science Major. Enjoying developing games and softwares. Meeting friends in the world.",
            website: "fake-website.com",
            location: "Boston, MA",
            dateOfBirth: "01/01/1993",
            dateJoined: "4/2009",
            followingCount: 340,
            followersCount: 223,
            tuits: 5232,
        }
    },
) => {
    return (
        <div className="row border mt-1">

            <div className="row mt-2">
                <div className="col-1">
                    <Link to="/">
                        <FontAwesomeIcon icon={faArrowLeft} size="xl" fixedWidth color="gray" className="mt-2" />
                    </Link>
                </div>

                <div className="col-11">
                    <div className="">
                        <b className="fs-5">{profile.firstName} {profile.lastName}</b>
                    </div>
                    <div className="">
                        <small className="text-muted">{profile.tuits} tuits</small>
                    </div>

                </div>
            </div>

            <div className="position-relative pt-2">
                <img src={`/images/${profile.bannerPicture}`} width="100%" />
                <img src={`/images/${profile.profilePicture}`}
                    className="rounded-circle px-0 position-absolute wd-left-bottom border border-3" width={100} height={100} />
                <Link to="/tuiter/edit-profile" className="position-absolute wd-right-bottom btn btn-light border border-2 border-dark rounded-pill py-1">
                    Edit Profile
                </Link>
            </div>

            <div className="mt-5 pt-3">
                <b className="px-2 fs-4">{profile.firstName} {profile.lastName}</b>
                <br />
                <small className="text-muted px-2">{profile.handle}</small>
            </div>

            <div className="ms-2 mt-2">
                <span>{profile.bio}</span>
            </div>

            <div className="ms-2 mt-2">
                <a href="#">{profile.website}</a>
            </div>

            <div className="row mt-3 text-muted pb-3">
                <div className="col-4 text-truncate ps-4">
                    <FontAwesomeIcon icon={faLocation} />
                    <span className="ps-2">{profile.location}</span>
                </div>

                <div className="col-4 text-truncate ps-1">
                    <FontAwesomeIcon icon={faCakeCandles} />
                    <span className="ps-2">Born {profile.dateOfBirth}</span>
                </div>

                <div className="col-4 text-truncate ps-2">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span className="ps-2">Joined {profile.dateJoined}</span>
                </div>
            </div>

            <div className="mt-3 text-black pb-3">
                <b className="ps-2">{profile.followingCount}</b><span className="text-muted ps-2">Following</span>
                <b className="ps-3">{profile.followersCount}</b><span className="text-muted ps-2">Followers</span>
            </div>
        </div >

    );
};

export default Profile;