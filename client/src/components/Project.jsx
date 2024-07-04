import React from "react";
const Project = ({ image, title, setSelectedProject }) => {
  return (
    <div onClick={() => setSelectedProject(title)}>
      <div className="w-[150px] h-[150px] bg-slate-400 border-2 hover:scale-105">
        <img src={image} alt="" className="w-full h-full mb-1" />
      </div>
      <p className="text-sm font-normal">{title}</p>
    </div>
  );
};

export default Project;
