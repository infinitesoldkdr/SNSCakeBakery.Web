import { auth } from "../Firebase";

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://localhost:5050/api';

export const apiClient = async (endpoint, options = {}) => {
  // 1. Get the current logged-in user from Firebase
  const user = auth.currentUser;
  let token = null;

  if (user) {
    // 2. Retrieve the JWT ID Token. 
    // Passing 'true' forces a refresh if the token is expired.
    token = await user.getIdToken(true);
  }

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  // 3. If we have a token, attach it to the Authorization Header
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || `API Error: ${response.status}`);
  }

  return response.json();
};