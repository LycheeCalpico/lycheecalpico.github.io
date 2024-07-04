import React from "react";
import { FaGithub } from "react-icons/fa";
import { Tag } from "antd";
const ProjectDetail = ({
  title,
  techStacks,
  githubLink,
  description,
  isPublic,
  demoLink,
}) => {
  return (
    <div className="w-full h-full flex gap-[50px] items-center justify-center">
      <div className="flex justify-center items-center w-[65%] h-full">
        <div className="w-[90%] h-[200px] border-2 rounded-lg flex flex-col justify-start items-start p-4 relative overflow-auto">
          <p className="text-blue-500 font-bold mb-4 ">{title}</p>
          <div className="flex gap flex-wrap mb-3">
            {techStacks.map((stack, index) => (
              <Tag color="lime" key={index}>
                {stack}
              </Tag>
            ))}
          </div>
          <p className="mb-4 text-left text-sm">{description}</p>
          {isPublic && (
            <div className="absolute right-4 top-3 border-[2px] rounded-lg p-[3px] text-xs">
              public
            </div>
          )}
        </div>
      </div>

      <div className="w-[35%] h-full flex flex-col justify-center items-center gap-[20px]">
        {demoLink && (
          <button className="w-[70%] h-[20%] rounded-lg bg-blue-100">
            <a href={demoLink} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </button>
        )}
        <button className="w-[70%]  h-[20%] rounded-lg bg-blue-100 flex justify-center items-center gap-[10px]">
          <FaGithub />
          <a href={githubLink} target="_blank" rel="noreferrer">
            Go to Github
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
