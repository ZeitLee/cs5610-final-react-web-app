import axios from "axios";

const CLUB_API_URL = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const CLUBS_API = `${CLUB_API_URL}/clubs`;

const api = axios.create({ withCredentials: true });

export const createClub = async (club) => {
    const response = await api.post(CLUBS_API, club);
    return response.data;
}

export const findAllClubs = async () => {
    const response = await api.get(CLUBS_API);
    return response.data;
}


export const findClubById = async (id) => {
    const response = await api.get(`${CLUBS_API}/${id}`);
    return response.data;
}