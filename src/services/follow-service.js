import axios from "axios";

const SERVER_API_URL = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const REVIEWS_API = `${SERVER_API_URL}/follows`;

const api = axios.create({ withCredentials: true });

export const createFollow = async (userId) => {
    const response = await api.post(`${REVIEWS_API}/${userId}`);
    return response.data;
}

export const getFollowers = async (followedId) => {
    const response = await api.get(`${REVIEWS_API}/followers/${followedId}`);
    return response.data;
}

export const getFollowing = async (followerId) => {
    const response = await api.get(`${REVIEWS_API}/following/${followerId}`);
    return response.data;
}