import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, lazy, Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal/Modal";
import useAuth from "./hooks/useAuth";
import Home from "./pages/Home";
import BlogFeed from "./pages/BlogFeed";
import CreateBlogs from "./pages/CreateBlogs";
import Footer from "./components/Footer";

const App = () => {
  const [modalType, setModaltype] = useState(null);
  const [isModelOpen, setIsModalOpen] = useState(false);
  const { profile, login, logout } = useAuth();

  const openModal = (type) => {
    setModaltype(type);
    setIsModalOpen(true);
  };

  const closeModal = (type) => {
    setModaltype(type);
    setIsModalOpen(false);
  };



  


  return (
    <Router>
      <Navbar
        profile={profile}
        onLoginClick={() => openModal("login")}
        onSignUpClick={() => openModal("signup")}
        onLogout={logout}
      />

      {isModelOpen && (
        <Modal
          type={modalType}
          onClose={closeModal}
          onLogin={(role) => {
            login(role);
            closeModal();
          }}
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogFeed />} />
        <Route path="/create" element={<CreateBlogs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
