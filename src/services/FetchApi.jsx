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

    getEventId: async (id) => {
        try {
            const response = await axios.get(`${BACKEND_API_URL}/events/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    createEvent: async (formData) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${BACKEND_API_URL}/events`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    updateEvent: async (id, eventData) => {
        try {
            const token = localStorage.getItem('token');
            const formData = new FormData();
            formData.append('title', eventData.title);
            formData.append('location', eventData.location);
            formData.append('date', eventData.date);
            formData.append('hour', eventData.hour);
            formData.append('collection', eventData.collection);
            formData.append('description', eventData.description);

            if (eventData.image) {
                formData.append('image_url', eventData.image);
            }

            const response = await axios.post(`${BACKEND_API_URL}/events/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
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

    getProductId: async (id) => {
        try {
            const response = await axios.get(`${BACKEND_API_URL}/products/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    createProduct: async (formData) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${BACKEND_API_URL}/products`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    updateProduct: async (id, productData) => {
        try {
            const token = localStorage.getItem('token');
            const formData = new FormData();
            formData.append('name', productData.name);
            formData.append('stock', productData.stock);
            formData.append('price', productData.price);
            formData.append('description', productData.description);

            if (productData.image) {
                formData.append('image_url', productData.image);
            }

            const response = await axios.post(`${BACKEND_API_URL}/products/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
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

    getOrder: async (id) => {
        try {
            const response = await axios.get(`${BACKEND_API_URL}/orders/${id}`);
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

    getOrderProduct: async (id) => {
        try {
            const response = await axios.get(`${BACKEND_API_URL}/order-products/${id}`);
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

    getCustomer: async (id) => {
        try {
            const response = await axios.get(`${BACKEND_API_URL}/customers/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    createCustomer: async () => {
        try {
            const response = await axios.post(`${BACKEND_API_URL}/customers`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    updateShippedOrder: async (id) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(`${BACKEND_API_URL}/order-products/orders/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    updateCancelledOrder: async (id) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(`${BACKEND_API_URL}/orders/cancelled/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },


}

export default FetchApi