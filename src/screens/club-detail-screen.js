import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { findClubById } from '../services/club-service'
import { joinClub, findMembers, findTarget, deleteMember } from '../services/member-service'
import { Link, useParams } from 'react-router-dom'
import "../index.css"

function ClubDetailScreen() {
    const { clubId } = useParams();
    const { currentUser } = useSelector((state) => state.user);
    const [club, setClub] = useState({});
    const [members, setMembers] = useState([]);


    const fetchClub = async () => {
        const response = await findClubById(clubId);
        setClub(response);
    }

    const fetchMembers = async () => {
        const response = await findMembers(clubId);
        setMembers(response);
    }

    const handleJoin = async () => {
        const newMember = await joinClub({
            userId: currentUser._id,
            clubId: clubId
        });
        fetchMembers();
    }

    const handleQuit = async () => {
        const require = await deleteMember(currentUser._id);
        fetchMembers();
    }

    const interactButton = () => {
        if (currentUser) {

            members.forEach((m) => {
                if (currentUser._id === m.userId._id) {
                    return (
                        <button className="btn btn-danger" onClick={handleQuit} >Quit</button>
                    );
                }
            })

            return (< button className="btn btn-success" onClick={handleJoin} > Join</button >)
        } else {
            return (<h1>11</h1>)
        }
    }


    useEffect(() => {
        fetchClub();
        fetchMembers();
    }, [clubId])

    return (
        <div className="container border border-white border-5 rounded mt-4 wd-bg-lightpurple">
            <h1 className="text-center display-2">{club.name}</h1>
            <div className="row my-3">
                <div className="col-3">
                    <img src="/images/club-default.jpeg" alt="club icon" className="rounded ms-3" width="80%" />
                </div>
                <div className="col-9">
                    <div className="border border-2 border-white bg-white rounded p-5">
                        <span className="fs-4 p-5 ">
                            {club.intro}
                        </span>
                    </div>

                </div>
            </div>
            <div className="row m-3 pt-3">
                <h3 className="fw-bold border-top pt-3">Members</h3>
                <ul class="d-flex flex-wrap ">
                    {members?.map((member) => (
                        <li class="list-group-item border m-2 text-center ">
                            <div className="fw-bold p-3">
                                <Link to={`/profile/${member.userId._id}`}>{member.userId.lastname} {member.userId.firstname}</Link></div>
                            <img src="/images/myAvatar.jpeg" className="rounded mx-auto my-2" width={130}></img>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mx-3 my-3 ">
                {currentUser && <button className="btn btn-success m-2" onClick={handleJoin} >Join</button>}
                {currentUser && <button className="btn btn-danger m-2" onClick={handleQuit} >Quit</button>}
            </div>
        </div >
    );

}
export default ClubDetailScreen;