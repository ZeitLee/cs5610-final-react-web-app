import { profileThunk } from "../services/auth-thunks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function LoadProfile({ children }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(profileThunk());
    }, [])
    return (children);
}

export default LoadProfile;