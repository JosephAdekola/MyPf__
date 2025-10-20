import axios from "axios";

// const baseURL = "http://localhost:7077/api/v1/"

const baseURL = `${import.meta.env.VITE_APIBASEURL}/api/v1/`

export const getInstaMedia = async (params) => {
    try {
        const response = await axios.get(`${baseURL}instagrampost`);
        return response
    } catch (error) {
        console.log("an error occured while gettin IG media",error);
        return error.response.data.error || "unable to fetct instagram media"        
    }
}