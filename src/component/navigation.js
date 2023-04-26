import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logoutThunk } from "../services/auth-thunks";
import { useLocation } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRightToBracket, faMagnifyingGlass, faUser, faUserPlus, faSitemap, faUnlock } from '@fortawesome/free-solid-svg-icons';
import '../index.css'

function Navigation() {
    const { currentUser } = useSelector((state) => state.user);
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const active = paths[1]

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(logoutThunk());
        navigate("/login");
    }

    return (
        <div className="row pt-3">
            <div className="col-9">
                <div className="list-group list-group-horizontal">
                    <Link to="/" className={`list-group-item ${active === '' ? 'active' : ''}`}>
                        <FontAwesomeIcon icon={faHome} className="pe-2" />
                        Home
                    </Link>

                    {/* {!currentUser &&
                        <li className="nav-item">
                            <span className={`nav-link ${active === 'login' ? 'active' : ''}`}><Link to="/login">Login</Link></span>
                        </li>
                    } */}
                    {/* 
                    {!currentUser &&
                        <li className="nav-item">
                            <span className={`nav-link ${active === 'register' ? 'active' : ''}`}>
                                {!currentUser && <Link to="/register">Register</Link>}
                            </span>
                        </li>
                    } */}
                    <Link to="/search" className={`list-group-item ${active === 'search' ? 'active' : ''}`}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="pe-2" />
                        Search
                    </Link>

                    <Link to="/clubs" className={`list-group-item ${active === 'clubs' ? 'active' : ''}`}>
                        <FontAwesomeIcon icon={faSitemap} className="pe-2" />
                        Clubs
                    </Link>

                    {currentUser &&
                        <Link to="/profile" className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faUser} className="pe-2" />
                        Profile
                        </Link>
                    }

                    {currentUser && currentUser.role === "admin" &&
                        <Link to="/admin" className={`list-group-item ${active === 'admin' ? 'active' : ''}`}>
                            <FontAwesomeIcon icon={faUnlock} className="pe-2" />
                        Admin
                        </Link>
                    }

                </div >
            </div >

            <div className="col-3">
                {currentUser &&
                    <button className="btn btn-danger float-end" onClick={() => logout()}>Logout</button>
                }

                {!currentUser &&
                    <div className="list-group list-group-horizontal float-end">
                        <Link to="/login" className={`list-group-item bg-success text-white`}>
                            <FontAwesomeIcon icon={faRightToBracket} className="pe-2" />
                            <span className="d-none d-xl-inline">Login</span>
                        </Link>

                        <Link to="/register" className={`list-group-item bg-warning`}>
                            <FontAwesomeIcon icon={faUserPlus} className="pe-2" />
                            <span className="d-none d-xl-inline">Sign up</span>
                        </Link>
                    </div>
                }
            </div>

        </div >

    );
}
export default Navigation;