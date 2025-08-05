import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
    },
});

const createNewResume = (data) => axiosClient.post("/user-resumes", data);

const getUserResumes = (userEmail) => axiosClient.get("/user-resumes?filters[user_Email][$eq]=" + userEmail)

const updateResumeDetails = (id, data) => axiosClient.put('/user-resumes/' + id, data)

export default {
    createNewResume, getUserResumes, updateResumeDetails
};