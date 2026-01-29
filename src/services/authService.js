import { apiClient } from "./apiClient";


import { auth } from "../Firebase";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut 
} from "firebase/auth";

export const authService = {
  login: async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; 
  },

  register: async ({ email, password }) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  },

  logout: async () => {
    await signOut(auth);
  }
};
