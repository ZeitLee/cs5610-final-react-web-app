import axios from "axios";

const MEMBER_API_URL = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const MEMBER_API = `${MEMBER_API_URL}/members`;

const api = axios.create({ withCredentials: true });

export const joinClub = async (club) => {
    const response = await api.post(`${MEMBER_API}/${club.clubId}`, club);
    return response.data;
}

export const findMembers = async (clubId) => {
    const response = await api.get(`${MEMBER_API}/clubs/${clubId}`);
    return response.data;
}

export const findClubs = async (userId) => {
    const response = await api.get(`${MEMBER_API}/users/${userId}`);
    return response.data;
}

export const deleteMember = async (userId) => {
    const response = await api.delete(`${MEMBER_API}/users/${userId}`);
    return response.data;
}

export const findTarget = async (userId, clubId) => {
    const response = await api.get(`${MEMBER_API}/${clubId}/${userId}`);
    const res = response.data;
    return res;
}