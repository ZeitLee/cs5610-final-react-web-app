import axios from "axios";

const API = "https://www.cheapshark.com/api/1.0";

export const fullTextSearch = async (query) => {
    const response = await axios.get(
        `${API}/games?title=${query}`
    );
    return response.data;
};

export const getGame = async (id) => {
    const response = await axios.get(
        `${API}/games?id=${id}`
    )
    return response.data;
};

export const getDeal = async (id) => {
    const response = await axios.get(
        `${API}/deals?id=${id}`
    )
    return response.data;
}

export const getStores = async () => {
    const response = await axios.get(
        `${API}/stores`
    )
    return response.data;
}

export const getNews = async () => {
    const response = await axios.get(`${API}/stores?lastChange`);
    return response.data;
}
