import React, { useState } from "react";
import ContentEditor from "../components/createblogs/ContentEditor";
import BlogEditor from "../components/createblogs/ContentEditor";
import {createPost} from "../services/postService"
import { useNavigate } from "react-router-dom";

const CreateBlogs = () => {
  const navigate = useNavigate();
  const [blogContent, setContent] = useState("");
  const [blogContentHtml, setHtmlContent] = useState("")
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState("");
  const [hashtags, setHashTags] = useState([])
  const [topics, setTopics] = useState([])



  const handleSave = () => {
    console.log("Blog Content:", blogContent);
    // send to backend
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      // Also store the file for later upload
    }
  };

  const isFormValid = () => {
    const hasContent =
      // Case 1: TipTap JSON
      (typeof blogContent === "object" &&
        blogContent !== null &&
        Array.isArray(blogContent.content) &&
        blogContent.content.length > 0) ||

      // Case 2: Plain string (HTML or text)
      (typeof blogContent === "string" && blogContent.trim() !== "");


   
    return (
      hasContent &&
      imagePreview !== null &&
      title.trim() !== "" &&
      hashtags.length > 0 &&
      topics.length > 0
    );
  };

  const blogSubmit = async (e) =>{
      e.preventDefault();
    try {
      let data
      data = await createPost(title, blogContent, hashtags, topics, imagePreview, blogContentHtml )

      if(data.success === true){
        resetBlogForm()
        navigate("/blogs")

      }



    } catch (err) {
      console.error(err);
    }


    console.log( blogContent, imagePreview, title, topics, hashtags, blogContentHtml);

  }

  const resetBlogForm = () =>{
    setContent("")
    setHtmlContent("")
    setHashTags([])
    setTitle("")
    setTopics([])
    setImagePreview("")
  }


  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl mb-4 text-white">Create New Blog</h1>
      <hr className="border border-zinc-800 mb-4" />

      {/* Layout container */}
      <div className="flex gap-6 flex-wrap md:flex-nowrap">
        {/* Editor Section (Left) */}
        <div className="flex-1 min-w-[300px]">
          <div className="border border-zinc-800 rounded-lg">
            <BlogEditor value={blogContent} onChange={(json, html) => {
    setContent(json);
    setHtmlContent(html);
  }} />
          </div>
        </div>

        {/* Title and Image Section (Right) */}
        <form  onSubmit={blogSubmit}>

          <div className="w-full md:w-[300px] flex flex-col bg-zinc-900 rounded-lg p-4 space-y-4 border border-zinc-700">
            <div className="relative">
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your title"
                className="peer block w-full appearance-none bg-transparent border-b border-zinc-500 px-3 pt-4 pb-2 text-white focus:outline-none focus:ring-0"
              />
            </div>

            <div className="relative">
              <input
                type="text"
                id="HashTags"
                onChange={(e) => setHashTags(e.target.value)}
                placeholder="Enter hashtags"
                className="peer block w-full appearance-none bg-transparent border-b border-zinc-500 px-3 pt-4 pb-2 text-white focus:outline-none focus:ring-0"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                id="Topics"
                onChange={(e) => setTopics(e.target.value)}
                placeholder="Enter related topics"
                className="peer block w-full appearance-none bg-transparent border-b border-zinc-500 px-3 pt-4 pb-2 text-white focus:outline-none focus:ring-0"
              />
            </div>

            <div className="mt-2">
              <label
                htmlFor="blogImage"
                className="cursor-pointer px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition"
              >
                Choose Image
              </label>
              <input
                type="file"
                id="blogImage"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <div className="mt-4 max-w-full h-20 w-full rounded-md border border-zinc-700 flex items-center justify-center overflow-hidden bg-zinc-800 text-white text-sm">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <span className="text-zinc-400">Cover Image</span>
                )}
              </div>
            </div>
            {/* button container */}
            <div className="flex justify-center space-x-4 mt-2">
              {/* Clear Button */}
              <button className="px-5 py-2 rounded-3xl border border-zinc-600 text-zinc-300 hover:border-zinc-500 hover:text-white transition">
                CLEAR
              </button>

              {/* Save Button */}
              <button
              type="submit"
                className={`px-5 py-2 rounded-3xl bg-indigo-600 text-white
                  ${isFormValid() ? "hover:bg-indigo-500 transition" : ""} 
                  ${!isFormValid() ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={!isFormValid()}
                onClick={handleSave}
              >
                SAVE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogs;
