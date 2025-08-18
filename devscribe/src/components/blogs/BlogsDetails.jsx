import React, { useState, useEffect } from "react";
import { ChevronDown, Bookmark, MessageCircle, Heart } from "lucide-react";
import { FaShare } from "react-icons/fa6";
import "../../assets/styles/Font.css";

const sort = ["Best", "Hot", "New", "Top"];

const BlogsDetails = ({ blogData }) => {
  const [isFilter, showFilter] = useState(false);
  const [selectedSort, setSelectedSort] = useState(null);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const viewFilter = () => {
    showFilter((prev) => !prev);
  };
  const showCard = (val) => {
    setSelectedSort(val);
    showFilter(false);
  };

  useEffect(() => {
    console.log("Blogs data on mount:", blogData);
    console.log("Blogs data len:", blogData.length);
  }, []);
  return (
      <div className="relative w-full py-4 rounded-lg">
        {/* image placeholder */}
        <button
          className=" absolute top-0 right-4 flex cursor-pointer items-center mb-6"
          onClick={viewFilter}
        >
          <span className="mr-2">{selectedSort}</span>
          <ChevronDown className="h-5 w-5" />
        </button>

        {isFilter && (
          <div className="absolute top-6 right-4  m-auto bg-zinc-800 border border-zinc-600 shadow-lg rounded-lg p-4 z-50 w-auto">
            <h2 className="text-white text-sm mb-2">Sort By</h2>
            {sort.map((val, index) => (
              <div
                key={index}
                onClick={() => showCard(val)}
                className={`cursor-pointer w-auto px-4 py-2 mb-2 text-white rounded-xl
                    hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 flex items-center gapx-2
                    ${selectedSort === val ? "bg-zinc-700" : ""}`}
              >
                <span>{val}</span>
              </div>
            ))}
          </div>
        )}
        <div className="overflow-auto h-[80vh] p-4">
          {blogData?.length > 0 ? (
            blogData.map((blog) => (
              <div key={blog._id} className="">
                {/* Blog title */}
                <h2 className="flex justify-items-start text-8xl font-bold mb-2 title-cursive">
                  {blog.title}
                </h2>
                <div className="w-full h-48 rounded-lg mb-4 mt-4 bg-zinc-700 animate-pulse"></div>

                {/* Blog HTML content */}
                <div
                  dangerouslySetInnerHTML={{ __html: blog.contentHTML }}
                  className="prose prose-invert max-w-none"
                />

                {/* Tags */}
                <div className="mt-2 text-sm text-blue-400">
                  Tags: {blog.tags.join(", ")}
                </div>

                <hr className="border border-zinc-700 mt-4" />

                {/* Action buttons (below post) */}
                <div className="flex justify-end gap-4 mt-4">
                  <button
                    onClick={() => setLiked(!liked)}
                    className="flex items-center gap-1"
                  >
                    <Heart
                      className={
                        liked ? "fill-red-500 text-red-500" : "text-white"
                      }
                    />
                    <span>1K</span>
                  </button>
                  <button className="flex items-center gap-1">
                    <MessageCircle />
                    <span>300</span>
                  </button>
                  <button
                    onClick={() => setSaved(!saved)}
                    className="flex items-center gap-1"
                  >
                    <Bookmark className={saved ? "fill-white" : "text-white"} />
                    <span>10</span>
                  </button>
                  <button className="flex items-center gap-1">
                    <FaShare />
                    <span>1K</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No blogs found.</p>
          )}
        </div>

        {/* button container */}
      </div>
  );
};

export default BlogsDetails;
