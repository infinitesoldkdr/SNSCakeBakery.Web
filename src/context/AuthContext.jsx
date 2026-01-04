import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const stored = localStorage.getItem("user");

    const [user, setUser] = useState(stored ? JSON.parse(stored) : null);

    const login = (data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
