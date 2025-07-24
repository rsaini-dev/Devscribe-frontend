import React, { useState } from "react";
import {
  ChartNoAxesColumnIncreasing,
  House,
  MoveUpRight,
  ChevronUp,
  ChevronDown,
  Annoyed,
} from "lucide-react";
import SubCard from "./SubCard";
import ChannelCard from "./ChannelCard";
import { channelNames } from "./channelData";
import { blogTopics } from "./topicsData";


const SubscribedBlogs = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showTopics, setShowTopics] = useState(false)
  const [selected, setSelected] = useState("Home");
  const [selectedChannel, setChannel] = useState("");
  const [selectedTopic, setTopic] = useState("")

  return (
    <div className="py-2 overflow-y-auto h-full w-full">
      {/* controls */}
      <div className="ml-2">
        <SubCard
          icon={House}
          text="Home"
          active={selected === "Home"}
          onClick={() => setSelected("Home")}
        />
        <SubCard
          icon={MoveUpRight}
          text="Popular"
          active={selected === "Popular"}
          onClick={() => setSelected("Popular")}
        />
        <SubCard
          icon={ChartNoAxesColumnIncreasing}
          text="All"
          active={selected === "All"}
          onClick={() => setSelected("All")}
        />
      </div>
      <hr className="border border-zinc-800 px-4 m-2" />
      {/* Topics */}
      <div className="w-auto  p-4 rounded-lg">
        {/* Collapse/Expand Button */}
        <button
          onClick={() => setShowTopics(!showTopics)}
          className="flex items-center justify-between w-full text-white p-2 rounded-lg"
        >
          <span className="font-medium">Topics</span>
          {showTopics ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>

        {/* Collapsible Content */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            showTopics ? "max-h-[1000px] mt-3" : "max-h-0"
          }`}
        >
          {blogTopics.map((name, index) => (
            <ChannelCard
              key={index}
              icon={Annoyed}
              text={name}
              active={selectedTopic === name}
              onClick={() => setTopic(name)}
            />
          ))}
        </div>
      </div>

      <hr className="border border-zinc-800 px-4 m-2" />
      {/* Subscribed Blogs */}

      
      <div className="w-auto  p-4 rounded-lg">
        {/* Collapse/Expand Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-white p-2 rounded-lg"
        >
          <span className="font-medium">Channels</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>

        {/* Collapsible Content */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-[1000px] mt-3" : "max-h-0"
          }`}
        >
          {channelNames.map((name, index) => (
            <ChannelCard
              key={index}
              icon={Annoyed}
              text={name}
              active={selectedChannel === name}
              onClick={() => setChannel(name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscribedBlogs;
