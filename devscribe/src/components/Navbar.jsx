import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/devscribe.svg";
import { Search, User, Bell, Plus } from "lucide-react";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Navbar = ({ profile, onLoginClick, onSignUpClick, onLogout }) => {
  const navigate = useNavigate()

  const [menu, setMenu] = useState(false);

  const menuRef = useRef(null);
  const showMenu = () => {
    console.log("calling", menu);

    setMenu((prev) => !prev);
  };

  const onNavigate = (params) =>{
    navigate(`/${params}`);
  }

  

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-[#e0c3fc] to-[#8ec5fc] shadow-md">
        <img
          src={logo}
          alt="Devscribe"
          className="h-20 w-auto transition-transform duration-300 hover:scale-110 cursor-pointer"
          onClick={() => onNavigate('blogs')}
        />

        {/* Search Bar */}
        <div className="flex min-w-lg justify-between">
          <div className="hidden w-3/4 md:flex items-center bg-zinc-100 dark:bg-zinc-700 rounded-full px-3 py-1 mr-38">
            <Search className="text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search blogs..."
              className="bg-transparent outline-none px-2 text-sm text-zinc-700 dark:text-gray-300 w-full"
            />
          </div>

          {!profile && (
            <div className="flex justify-between">
              <button
                className="px-4 py-2 text-smokey rounded-md cursor-pointer mr-2"
                onClick={onLoginClick}
              >
                Login
              </button>
              <button
                className="px-4 py-2 text-smokey rounded-md cursor-pointer"
                onClick={onSignUpClick}
              >
                Signup
              </button>
            </div>
          )}

          {profile && (
            <div className="relative flex">

              <button className="flex mr-2 px-4 py-2 bg-[#85bbf1] text-zinc-700 rounded-2xl cursor-pointer" onClick={() => onNavigate('create')}>
                <Plus />
                <span className="ml-2">Create</span>
              </button>
              <button className="px-4 py-2 text-zinc-700 rounded-md cursor-pointer">
                <Bell />
              </button>
              <button
                className="px-4 py-2 text-zinc-700 rounded-md cursor-pointer"
                onClick={showMenu}
              >
                <User />
              </button>

              {/* Menu Dropdown */}
              {menu && (
                <div
                  className="absolute flex flex-col items-start right-0 top-8 mt-2 w-54 bg-zinc-800 text-gray-400 shadow-lg rounded-md p-4 z-50"
                  ref={menuRef}
                >
                  <button className=" py-4 rounded-md cursor-pointer">
                    Profile
                  </button>
                  <button className=" py-4 rounded-md cursor-pointer">
                    My Blogs
                  </button>
                  {profile === "admin" && (
                    <button className=" py-4 rounded-md cursor-pointer">
                      Dashboard
                    </button>
                  )}
                  <button className=" py-4 rounded-md cursor-pointer">
                    Saved
                  </button>
                  <button className=" py-4 rounded-md cursor-pointer">
                    Help/Support
                  </button>
                  <button
                    className=" py-4  rounded-md cursor-pointer"
                    onClick={onLogout}
                  >
                    <RxExit />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
