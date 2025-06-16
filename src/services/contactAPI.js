import axios from "axios";

// const baseURL = "http://localhost:7077/api/v1/"

const baseURL = `${import.meta.env.VITE_APIBASEURL}/api/v1/`

export const saveContact = async (payload) => {
    try {
        const response = await axios.post(`${baseURL}portfolio-contact`, payload);
        return response
    } catch (error) {
        console.error("Error sending message:", error.response?.data || error.message);
    }
};