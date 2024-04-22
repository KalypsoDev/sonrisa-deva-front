import axios from "axios";

const BACKEND_API_URL = 'http://127.0.0.1:8000/api';

const FetchApi = {

    login: async (userData) => {
        try {
            const response = await axios.post(`${BACKEND_API_URL}/login`, userData);
            localStorage.setItem('token', response.data.token);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    logout: async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${BACKEND_API_URL}/logout`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getEvents: async () => {
        try {
            const response = await axios.get(`${BACKEND_API_URL}/events`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    createEvent: async (userData) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${BACKEND_API_URL}/events`, userData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    updateEvent: async (id) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${BACKEND_API_URL}/events/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    deleteEvent: async (id) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.delete(`${BACKEND_API_URL}/events/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getProducts: async () => {
        try {
            const response = await axios.get(`${BACKEND_API_URL}/products`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    createProduct: async (userData) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${BACKEND_API_URL}/products`, userData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    updateProduct: async (id) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${BACKEND_API_URL}/products/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    deleteProduct: async (id) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.delete(`${BACKEND_API_URL}/products/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    createOrder: async () => {
        try {
            const response = await axios.post(`${BACKEND_API_URL}/orders`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    createOrderProduct: async () => {
        try {
            const response = await axios.post(`${BACKEND_API_URL}/order-products`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },




}

export default FetchApi