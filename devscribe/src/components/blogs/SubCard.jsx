import React from 'react'

const SubCard = ({ icon: Icon, text, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer w-60 p-4 text-white rounded-xl
                  hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 flex items-center gap-2
                  ${active ? "bg-zinc-800" : ""}`}
    >
      <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <span>{text}</span>
    </div>
  );
};

export default SubCard
