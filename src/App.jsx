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

          {/* Public */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* App Layout */}
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="createorder" element={<CreateOrder />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>

          {/* Protected */}
          <Route element={<ProtectedRoute />}>
            <Route path="/orders" element={<Orders />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
