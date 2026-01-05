import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainLayout from "./components/MainLayout.jsx";
import ProtectedRoute from "./components/ProtectedRoutes";
import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Menu from "./pages/Menu.jsx";
import Gallery from "./pages/Gallery";
import Orders from "./pages/Orders.jsx";
import CreateOrder from "./pages/CreateOrder";
import Contact from "./pages/Contact.jsx"
import Checkout from "./pages/Checkout.jsx";
import GoogleFormRedirect from "./pages/GoogleFormRedirect";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/* --- AUTH GROUP (No Navbar) --- */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/google-form" element={<GoogleFormRedirect />} />

                    {/* --- MAIN GROUP (Has Navbar) --- */}
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/createorder" element={<CreateOrder />} />
                        
                        {/* Protected Routes inside the Layout */}
                        <Route path="/orders" element={
                            <ProtectedRoute>
                                <Orders />
                            </ProtectedRoute>
                        } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}
