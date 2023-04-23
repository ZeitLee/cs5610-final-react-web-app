import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Navigation() {
    const { currentUser } = useSelector((state) => state.user);

    return (

        <div>
            <Link to="/">Home</Link>|
            {!currentUser && <Link to="/login">Login</Link>} |
            {!currentUser && <Link to="/register">Register</Link>} |
            {currentUser && <Link to="/profile">Profile</Link>} |
            <Link to="/search">Search</Link>
        </div>

    );
}
export default Navigation;