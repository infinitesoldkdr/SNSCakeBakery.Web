import { apiClient } from "./apiClient";
import { auth } from "../Firebase";
import { 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";

export const authService = {
  // LOGIN stays with Firebase (it's fast and secure)
login: async ({ email, password }) => {
  try {
    console.log("DEBUG: Starting Firebase login for:", email);
    
    // You MUST await this and keep the variable accessible
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    console.log("DEBUG: Login successful, UID:", userCredential.user.uid);
    return userCredential.user; // Return immediately upon success
  } catch (ex) {
    console.error("DEBUG: Firebase Login Error Object:", ex);
    console.error("DEBUG: Error Code:", ex.code);
    throw ex; // Throwing ensures your Login.jsx 'catch' block actually triggers
  }
},

  // REGISTER moves to your .NET API (The "One and Done" flow)
  register: async (userData) => {
    // We call our API, which creates the user in BOTH Firebase and Oracle
    const response = await apiClient.post("/user/register", userData);
    return response.data;
  },

  logout: async () => {
    await signOut(auth);
  }
};