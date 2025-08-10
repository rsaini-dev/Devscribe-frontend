import React, { useState, useEffect } from "react";
import imgLogin from "../../assets/images/bloglogin.webp";
import { IoIosClose } from "react-icons/io";
import logo from "../../assets/devscribe.svg";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../../services/userService";

const Modal = ({ type, onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const [currentType, setCurrentType] = useState(type);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let data;

      if (type === "login") {
        data = await login(email, password);
      } else if (type === "signup") {
        await signup(name, email, phoneNumber, password);
        data = await login(email, password); // auto-login after signup
      }

      if (data?.user) {
        onLogin(data.user.role);
      }

      if (data?.token) {
        localStorage.setItem("token", data.token);
      }

      navigate("/blogs");
    } catch (err) {
      console.error(
        `${type === "login" ? "Login" : "Signup"} failed:`,
        err.response?.data?.message || err.message
      );
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleToggleType = () => {
    resetForm();
    setCurrentType(currentType === "login" ? "signup" : "login");
  };

  const isFormValid = () => {
    if (currentType === "login") {
      return email.trim() !== "" && password.trim() !== "";
    } else if (currentType === "signup") {
      return (
        name.trim() !== "" &&
        password.trim() !== "" &&
        phoneNumber.trim() !== "" &&
        confirmPassword.trim() !== "" &&
        password === confirmPassword
      );
    }
    return false;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-gray-400 flex w-[80%] max-w-4xl rounded-lg overflow-hidden">
          {/* Left Side (Image) */}
          <div className="w-1/2 relative">
            <img
              src={imgLogin}
              alt="Modal Visual"
              className="w-full h-full object-cover"
            />

            <img
              src={logo}
              alt="Logo"
              className="absolute top-4 right-38 w-40 h-40"
            />
          </div>

          {/* Right Side (Content) */}
          <div className="w-1/2 p-6 flex flex-col justify-center bg-white relative">
            <IoIosClose
              className="absolute top-2 right-4 text-3xl cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={onClose} // Optional close function
            />
            <h2 className="absolute top-10 right-40 text-2xl font-semibold mb-4 text-gray-800">
              {currentType === "login" ? " Welcome Back!" : "Create Account"}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
              {currentType === "signup" && (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className=" w-full bg-gray-200 border-none mb-4 p-2 rounded-xl"
                />
              )}

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className=" w-full bg-gray-200 border-none mb-4 p-2 rounded-xl"
              />

              {currentType === "signup" && (
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  className=" w-full bg-gray-200 border-none mb-4 p-2 rounded-xl"
                />
              )}

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className=" w-full bg-gray-200 border-none mb-4 p-2 rounded-xl"
              />

              {currentType === "signup" && (
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Enter your password again"
                  className=" w-full bg-gray-200 border-none mb-4 p-2 rounded-xl"
                />
              )}

              {currentType === "signup" &&
                confirmPassword &&
                confirmPassword !== password && (
                  <p className="text-red-500 text-sm mb-2">
                    Passwords do not match
                  </p>
                )}

              <div className="flex mb-2">
                <input
                  type="checkbox"
                  id={currentType === "login" ? "remember" : "terms"}
                  name={currentType === "login" ? "remember" : "terms"}
                />
                <label
                  htmlFor={currentType === "login" ? "remember" : "terms"}
                  className="ml-2"
                >
                  {currentType === "login"
                    ? "Remember me"
                    : "I agree to all terms and privacy policy"}
                </label>
              </div>
              <button
                className={`px-4 py-2 bg-indigo-600 text-white rounded-md 
                  ${isFormValid() ? "hover:bg-indigo-700" : ""} 
                  ${!isFormValid() ? "opacity-50 cursor-not-allowed" : ""}`}
                type="submit"
                disabled={!isFormValid()}
              >
                {currentType === "login" ? "Login" : "Sign Up"}
              </button>
            </form>

            <p className="mt-2">
              {type === "login"
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                className="text-indigo-600 ml-1 font-semibold"
                onClick={handleToggleType}
              >
                {currentType === "login" ? "Sign up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
