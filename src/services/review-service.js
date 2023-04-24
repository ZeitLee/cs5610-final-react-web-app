import axios from "axios";

const SERVER_API_URL = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const REVIEWS_API = `${SERVER_API_URL}/reviews`;

const api = axios.create({ withCredentials: true });

export const createReview = async (review) => {
    const response = await api.post(REVIEWS_API, review);
    return response.data;
}

export const findMyReviews = async (userId) => {
    const response = await api.get(`${REVIEWS_API}/users/${userId}`);
    return response.data;
}

export const findGameReviews = async (gameId) => {
    const response = await api.get(`${REVIEWS_API}/games/${gameId}`);
    return response.data;
}

export const deleteReview = async (rid) => {
    const response = await api.delete(`${REVIEWS_API}/${rid}`);
    return response.data;
}

export const findAllReviews = async () => {
    const response = await api.get(`${REVIEWS_API}`);
    return response.data;
}