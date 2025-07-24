import React, { useState } from "react";
import { Menu } from "lucide-react";
import SubscribedBlogs from "./SubscribedBlogs";
import BlogsDetails from "./BlogsDetails";

const BlogsContainer = () => {
  const [subsMenu, setSubMenu] = useState(false);

  const toggleMenu = () => {
    setSubMenu((prev) => !prev);
  };

  return (
    <div className="w-full bg-zinc-800 relative overflow-hidden">
      {/* Blogs */}
      <div
        className="flex-1 px-2 transition-all duration-500"
        style={{
          marginLeft: subsMenu ? "17rem" : "0rem", // 17rem ≈ ml-68
        }}
      >
        <BlogsDetails />
      </div>
      {/* Button & Sidebar */}
      <div className="relative">
        {/* Sidebar container with sliding effect */}
        <div
          className={`fixed top-28 bottom-0 left-0
            bg-zinc-900 border-r border-zinc-00 transition-transform duration-500 ease-in-out
            ${
              subsMenu ? "translate-x-0" : "-translate-x-full"
            } w-auto shadow-lg`}
        >
          {/* Menu Button on border */}
          <button
            onClick={toggleMenu}
            className="absolute -right-10 top-50 bg-zinc-800 p-2 rounded-r-lg opacity-50 hover:opacity-100"
          >
            <Menu className="text-white" />
          </button>
          <SubscribedBlogs />
        </div>

        {/* Menu button when sidebar is closed */}
        {!subsMenu && (
          <button
            onClick={toggleMenu}
            className="absolute top-50 left-10 bg-zinc-800 p-2 rounded-lg opacity-50 hover:opacity-100"
          >
            <Menu className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogsContainer;
