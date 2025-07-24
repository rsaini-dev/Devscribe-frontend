import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const sort = ["Best", "Hot", "New", "Top"];

const BlogsDetails = () => {
  const [isFilter, showFilter] = useState(false);
  const [selectedSort, setSelectedSort] = useState(null);

  const viewFilter = () => {
    showFilter((prev) => !prev);
  };
  const showCard = (val) => {
    setSelectedSort(val);
    showFilter(false)
  };
  return (
    <div>
      {/* blog content */}
      <div className="w-full">
        {/* image placeholder */}
        <button className="ml-2 mt-6 mb-2 flex cursor-pointer" onClick={viewFilter}>
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
                    hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 flex items-center gap-2
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

        {/* text area */}
        <div className="overflow-y-auto mt-4">
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
