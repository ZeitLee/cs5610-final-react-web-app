import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/auth-thunks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../index.css'


function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleRegister = async () => {
        const role = document.getElementById("getType").value;
        console.log(role);
        try {
            await dispatch(registerThunk({ username, password, firstname, lastname, email, role }));
            navigate("/profile");
        } catch (e) {
            alert(e);
        }
    };
    return (
        <div className="row">
            <div className="col-2">

            </div>

            <div className="col-8 border border-dark rounded container text-white wd-bg-lightblue mt-4">
                <div>
                    <h1 className="text-center my-3">
                        <FontAwesomeIcon icon={faUser} className="pe-4" />
                        Register Screen</h1>
                    <div>
                        <label className="py-1">Username</label>
                        <input className="form-control my-1"
                            type="text" value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div>
                        <label lassName="py-1">Password</label>
                        <input className="form-control my-1"
                            type="password" value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div>
                        <label lassName="py-1">Firstname</label>
                        <input className="form-control my-1"
                            type="text" value={firstname}
                            onChange={(event) => setFirstname(event.target.value)}
                        />
                    </div>
                    <div>
                        <label lassName="py-1">Lastname</label>
                        <input className="form-control my-1"
                            type="text" value={lastname}
                            onChange={(event) => setLastname(event.target.value)}
                        />
                    </div>
                    <div>
                        <label lassName="py-1">Email</label>
                        <input className="form-control my-1"
                            type="text" value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>

                    <div className="mt-3">
                        <label lassName="py-1">User Type</label>
                        <select id="getType" className="my-1 rounded-pill p-2 ps-3 ms-3">
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <div className="text-end my-3">
                        <button onClick={handleRegister} className="btn btn-success rounded-pill px-4 py-2 border me-2 my-1">Register</button>
                    </div>

                </div>
            </div>

            <div className="col-2">

            </div>
        </div >

    );

}
export default RegisterScreen;