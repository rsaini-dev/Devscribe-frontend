import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState ,lazy, Suspense  } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal/Modal";
import useAuth from "./hooks/useAuth";
import Home from "./pages/Home"
import BlogFeed from "./pages/BlogFeed"

// const Home = lazy (() => import("./pages/Home"))
// const BlogFeed = lazy (() => import("./pages/BlogFeed"))

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
      </Routes>
    </Router>
  );
};

export default App;
