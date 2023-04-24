import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../services/auth-thunks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../index.css'


function EditProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = () => {
        dispatch(updateUserThunk(profile));
    };

    return (
        <div>
            <h1>Edit Profile Screen</h1>
            <div className="mt-2 py-2">
                <Link to="/profile">
                    <FontAwesomeIcon icon={faXmark} size="xl" fixedWidth color="gray" className="pt-1" />
                </Link>
                <b className="ps-3">Edit Profile</b>
                <div className="float-end">
                    <Link to="/profile">
                        <button onClick={save} className="rounded-pill btn btn-dark py-1">Save</button>
                    </Link>
                </div>
            </div>

            <div className="position-relative mt-2">
                <img src={`/images/banner.jpeg`} width="100%" />
                <img src={`/images/myAvatar.jpeg`}
                    className="rounded-circle px-0 position-absolute wd-left-bottom border border-3" width={100} height={100} />
            </div>

            <div className="row">
                <div className="mt-5 pt-4 col-6">
                    <span className="text-muted ps-2">Firstname</span>
                    <input placeholder="Please input your firstname."
                        value={profile.firstname}
                        onChange={(event) => {
                            const newProfile = {
                                ...profile,
                                firstname: event.target.value,
                            };
                            setProfile(newProfile);
                        }}
                        className="form-control rounded mt-1" />

                </div>

                <div className="mt-5 pt-4 col-6">
                    <span className="text-muted ps-2">Lastname</span>
                    <input placeholder="Please input your lastname."
                        value={profile.lastname}
                        onChange={(event) => {
                            const newProfile = {
                                ...profile,
                                lastname: event.target.value,
                            };
                            setProfile(newProfile);
                        }}
                        className="form-control rounded mt-1 " />
                </div>
            </div>

            <div className="pt-4">
                <span className="text-muted ps-2">Location</span>
                <input
                    placeholder="Please input your location."
                    value={profile.location}
                    onChange={(event) => {
                        const newProfile = {
                            ...profile,
                            location: event.target.value,
                        };
                        setProfile(newProfile);
                    }}
                    className="form-control rounded mt-1" />
            </div>

            <div className="pt-4">
                <span className="text-muted ps-2">Email</span>
                <input
                    placeholder="Please input your email."
                    value={profile.email}
                    onChange={(event) => {
                        const newProfile = {
                            ...profile,
                            email: event.target.value,
                        };
                        setProfile(newProfile);
                    }}
                    className="form-control rounded mt-1" />
            </div>

            {profile.dob &&
                <div className="pt-4">
                    <span className="text-muted ps-2">Birth Date</span>
                    <input
                        onChange={(event) => {
                            const newProfile = {
                                ...profile,
                                dob: event.target.value,
                            };
                            setProfile(newProfile);
                        }}
                        type="date"
                        defaultValue={profile.dob.substring(0, 10)}
                        className="form-control rounded mt-1 mb-5" />
                </div>
            }

            {!profile.dob &&
                <div className="pt-4">
                    <span className="text-muted ps-2">Birth Date</span>
                    <input
                        onChange={(event) => {
                            const newProfile = {
                                ...profile,
                                dob: event.target.value,
                            };
                            setProfile(newProfile);
                        }}
                        type="date"
                        className="form-control rounded mt-1 mb-5" />
                </div>
            }



            <button
                onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/login");
                }}>
                Logout</button>

        </div >


    );

}
export default EditProfileScreen;