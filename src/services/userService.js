import { apiClient } from "./apiClient";

export const userService = {
    register : (formData) => 
        {
            return apiClient("/user/register", {
                method: "POST",
                body: JSON.stringify(formData)
            });
        }
};