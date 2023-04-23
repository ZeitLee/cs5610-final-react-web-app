import axios from "axios";

const REVIEWS_API = "http://localhost:4000/api/follows";

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