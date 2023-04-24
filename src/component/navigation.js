import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logoutThunk } from "../services/auth-thunks";

function Navigation() {
    const { currentUser } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(logoutThunk());
        navigate("/login");
    }

    return (

        <div className="mt-3">
            <Link to="/">Home</Link>|
            {!currentUser && <Link to="/login">Login</Link>} |
            {!currentUser && <Link to="/register">Register</Link>} |
            {currentUser && <Link to="/profile">Profile</Link>} |
            <Link to="/search">Search</Link>
            {currentUser && <button className="btn btn-danger float-end"
                onClick={() => logout()}>
                Logout</button>}

        </div>

    );
}
export default Navigation;