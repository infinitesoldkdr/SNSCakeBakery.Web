import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../Firebase"; // Import the auth instance we created
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Critical for preventing flickers

    useEffect(() => {
        // This is the "Observer"
        // It listens for whenever the user logs in, logs out, or the app starts
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                // User is signed in
                // We extract only what we need for the UI
                setUser({
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    displayName: firebaseUser.displayName || "Valued Customer"
                });
            } else {
                // User is signed out
                setUser(null);
            }
            setLoading(false); // We have finished checking the auth status
        });

        // Cleanup the listener when the component unmounts
        return () => unsubscribe();
    }, []);

    // Standard login/logout helpers that use the Firebase service
    const login = (userData) => {
        // Note: With the observer above, we don't strictly need to call setUser here,
        // but keeping it for compatibility with your existing Login.jsx is fine.
        setUser(userData);
    };

    const logout = async () => {
        await auth.signOut();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {/* We don't render the app until we know if the user is logged in or not */}
            {!loading && children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);