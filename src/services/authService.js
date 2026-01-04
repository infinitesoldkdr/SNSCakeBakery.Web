import { apiClient } from "./apiClient";

export const authService = {
  login: (credentials) => {
    return apiClient("/Auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
  }
};