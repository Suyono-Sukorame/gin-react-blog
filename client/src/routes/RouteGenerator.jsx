import React from "react";
import { Routes, Route } from "react-router-dom";

// Import pages
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile"; // jika ini memang ada
import ProfileIndex from "../pages/Profile/Index";
import ProfileSettings from "../pages/Profile/Settings";
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function RouteGenerator() {
  return (
    <Routes>
      {/* Halaman utama */}
      <Route path="/" element={<Home />} />

      {/* Halaman umum */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Profile */}
      <Route path="/profile" element={<ProfileIndex />} />
      <Route path="/profile/settings" element={<ProfileSettings />} />

      {/* Opsional: jika memang ada Profile.js */}
      <Route path="/profile/legacy" element={<Profile />} />
    </Routes>
  );
}
