// src/components/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        {/* Outlet is where the child route (Home, Menu, etc.) will be rendered */}
        <Outlet />
      </main>
      {/* You can add a Footer here if you want it on all main pages too */}
    </>
  );
}