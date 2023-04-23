import axios from "axios";

const REVIEWS_API = "http://localhost:4000/api/reviews";

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
