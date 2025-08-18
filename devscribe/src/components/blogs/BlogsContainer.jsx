import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import SubscribedBlogs from "./SubscribedBlogs";
import BlogsDetails from "./BlogsDetails";
import {getAllPosts} from "../../services/postService"
import DevScribeLoader from "../ui/Loader";

const BlogsContainer = () => {
  const [subsMenu, setSubMenu] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // to track API loading state
  const [error, setError] = useState(null); // to track API errors


  const toggleMenu = () => {
    setSubMenu((prev) => !prev);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const data = await getAllPosts();
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setBlogs(data || []); // adjust if your API returns a different key
        console.log(blogs);
      } catch (err) {
        setError(err.message || "Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <DevScribeLoader />;

  return (

    <div className="p-6 text-white">
          {blogs.length > 0 ? (
            <div className="flex justify-between">
              <div className="w-full bg-zinc-800 relative overflow-hidden">
      {/* Blogs */}
      <div
        className="flex-1 px-2 transition-all duration-500"
        style={{
          marginLeft: subsMenu ? "17rem" : "0rem", // 17rem ≈ ml-68
        }}
      >
        <BlogsDetails blogData={blogs}/>
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
            </div>
          ) : (
            <div>No Blogs found!</div>
          )}
        </div>
    
  );
};

export default BlogsContainer;
