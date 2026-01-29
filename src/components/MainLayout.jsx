import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar /> 
      <main className="content-container">
        {/* All your protected pages (Home, Menu, etc.) will appear here */}
        <Outlet /> 
      </main>
    </>
  );
};

export default MainLayout;