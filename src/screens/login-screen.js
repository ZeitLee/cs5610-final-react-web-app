import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk, profileThunk } from "../services/auth-thunks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';

function LoginScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            await dispatch(loginThunk({ username, password }));
            const { payload } = await dispatch(profileThunk());
            if (payload === undefined) {
                alert("Login fail. \nPlease check your username and password. Or sign up a new user.");
            } else {
                navigate("/profile");
            }
        } catch (e) {
            alert(e);
        }
    };



    return (
        <div className="row">
            <div className="col-2">

            </div>

            <div className="col-8 text-white">
                <div className="border border-2 border-dark rounded mt-3 bg-success container">
                    <h1 className="text-center py-3">
                        <FontAwesomeIcon icon={faWarehouse} className="pe-3" />
                Login Screen
                </h1>
                    <div>
                        <label className="py-1">Username</label>
                        <input className="form-control my-1"
                            type="text" value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div>
                        <label className="py-1">Password</label>
                        <input className="form-control my-1"
                            type="password" value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div className="text-end">
                        <button onClick={handleLogin} className="my-3 btn btn-warning rounded-pill border border-1 me-2">
                            <span className="fw-bold px-2">Login</span></button>
                    </div>

                </div>
            </div>

            <div className="col-2">

            </div>
        </div>

    );

}
export default LoginScreen;