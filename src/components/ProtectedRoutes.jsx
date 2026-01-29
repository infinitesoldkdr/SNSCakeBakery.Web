import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="loading-screen">Verifying Session...</div>;
    }

    // If logged in, render the 'Outlet' (the child routes)
    // If not, redirect to login
    return user 
        ? <Outlet /> 
        : <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;