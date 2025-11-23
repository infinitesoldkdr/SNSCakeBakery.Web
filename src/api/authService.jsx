import axiosClient from "./axiosClient";

const authService = {
    register: (data) => axiosClient.post("/auth/register", data),
    login: (data) => axiosClient.post("/auth/login", data),
};

export default authService;
