import React, { useState } from "react";
import { ChevronDown, Bookmark, MessageCircle, Heart } from "lucide-react";
import { FaShare } from "react-icons/fa6";

const sort = ["Best", "Hot", "New", "Top"];

const BlogsDetails = () => {
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
  return (
    <div>
      {/* blog content */}
      <div className="w-full">
        {/* image placeholder */}
        <button
          className="ml-2 mt-6 mb-2 flex cursor-pointer"
          onClick={viewFilter}
        >
          <span className="mr-2">{selectedSort}</span>
          <ChevronDown className="h-5 w-5" />
        </button>

        {isFilter && (
          <div className="absolute top-14 left-2 bg-zinc-800 border border-zinc-600 shadow-lg rounded-lg p-4 z-50 w-auto">
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

        <hr className="border border-zinc-700 px-4 mb-2" />
        <div className="w-full px-10 h-64 bg-zinc-700 rounded-2xl shadow-md flex items-center justify-center text-gray-400 text-sm">
          Blog Image Placeholder
        </div>

        {/* button container */}
        <div className="flex  absolute mt-4 right-4">
          <button
            onClick={() => setLiked(!liked)}
            className="flex items-center px-2 mr-2 gap-1"
          >
            <Heart
              className={liked ? "fill-red-500 text-red-500" : "text-white"}
            />
            <span>1K</span>
          </button>
          <button className="flex px-2 mr-2">
            <MessageCircle />
            <span>300</span>
          </button>
          <button
            onClick={() => setSaved(!saved)}
            className="flex items-center px-2 mr-2 gap-1"
          >

            <Bookmark 
                className={saved ? "fill-white" : "text-white"}
            />
            <span>10</span>
          </button>
          <button className="flex px-2 mr-2">
            <FaShare />
            <span>1K</span>
          </button>
        </div>

        {/* text area */}
        <div className="overflow-y-auto mt-10">
          <p className="text-white text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            dignissimos beatae officiis minus ut ex libero corporis veritatis,
            iusto aspernatur? Labore quidem provident recusandae dignissimos,
            obcaecati aspernatur dolore accusamus vitae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;
