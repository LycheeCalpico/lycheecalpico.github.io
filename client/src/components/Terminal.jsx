// src/components/Terminal.js
import React from "react";

const Terminal = () => {
  return (
    <div className="w-full h-full p-2 bg-white text-black rounded-lg shadow-lg max-w-xl">
      <div className="bg-gray-300 py-1 px-2 rounded-t-lg flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-xs text-gray-600">Ruike -- -zsh -- 80x24</div>
      </div>
      <pre className="font-mono text-xs p-2 bg-white text-black rounded-b-lg flex flex-col items-start">
        <span className="text-black">Ruike@Ruike-MacBook-Pro ~ %</span>
        <span className="text-black">{`> Ruike.currentLocation`}</span>
        <span className="text-black">"San Jose, CA"</span>
        <br />
        <span className="text-black">{`> Ruike.contactInfo`}</span>
        <span className="text-black">{`["rq2046@nyu.edu", "LinkedIn", "GitHub"]`}</span>
        <br />
        <span className="text-black">{`> Ruike.interests`}</span>
        <span className="text-black">{`["video games", "reading", "cooking", "painting"]`}</span>
        <br />
        <span className="text-black">{`> Ruike.education`}</span>
        <span className="text-black">{`"B.Sc. Computer Science & Economics - University of California, Davis"`}</span>
        <span className="text-black">{`"M.Sc. Computer Engineering - New York University"`}</span>
        <br />
        <span className="text-black">{`> Ruike.tech_stacks`}</span>
        <span className="text-black">{`["React", "graphQL", "NodeJS", "ExpressJS", "MongoDB", "Redux", "git"]`}</span>
        <br />
        <span className="text-black">{`> Ruike.programming_languages`}</span>
        <span className="text-black">{`["JavaScript", "Python", "Java", C++", "C"]`}</span>
        <br />
        <span className="text-black">{`> Ruike.testing`}</span>
        <span className="text-black">{`["testCafe", "Jest"]`}</span>
      </pre>
    </div>
  );
};

export default Terminal;
