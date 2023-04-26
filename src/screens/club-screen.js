import React, { useEffect, useState } from "react";
import { findAllClubs, createClub } from '../services/club-service'
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import "../index.css"

function ClubScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [clubs, setClubs] = useState([]);
    const [name, setName] = useState("");
    const [intro, setIntro] = useState("");

    const handleCreate = async () => {
        const newClub = await createClub({
            name: name,
            intro: intro
        });
        getAllClubs();
    };

    const getAllClubs = async () => {
        const response = await findAllClubs();
        setClubs(response);
    };


    useEffect(() => {
        getAllClubs();
    }, [])



    return (
        <div>
            <div className="border list-group my-4 ">
                {clubs?.map((club) => (
                    <div className="list-group-item  ">

                        <div className="row">

                            <div className="col-8">
                                <h2>{club.name}</h2>
                                <div className="border rounded py-3 bg-warning ">
                                    <p className="text-muted ps-3">{club.intro}</p>
                                    <Link to={`/clubs/${club._id}`} className="ps-3 pt-1"> Go to main page</Link>
                                </div>
                            </div>

                            <div className="col-4">
                                <img src="/images/club-default.jpeg" alt="c-icon" className="float-end" height={150}></img>
                            </div>
                        </div>

                    </div >
                ))}
            </div >

            {currentUser &&
                <div className="border border-success rounded my-3 wd-bg-lightgreen">
                    <h2 className="ms-3 my-3"> Create your own club</h2>
                    <div className="ms-3">
                        Club Name: <input type="text" className="ms-2 my-2 w-50" onChange={e => setName(e.target.value)}></input>
                    </div>

                    <div className="ms-3">
                        Introduction:
                        <textarea className="form-control mt-2 w-75" onChange={e => setIntro(e.target.value)} ></textarea>
                    </div>

                    <div className="text-end">
                        <button className="btn btn-warning my-4 me-3" onClick={() => handleCreate()}> Create the Club</button>
                    </div>

                </div>
            }


        </div>



    );

}
export default ClubScreen;