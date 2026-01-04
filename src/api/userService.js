import api from "./api";

export const register = (firstName,lastName, email, password) =>
    api.post("/user/register", { firstName,lastName, email, password });