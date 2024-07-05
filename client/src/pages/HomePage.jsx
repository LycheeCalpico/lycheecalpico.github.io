import React from "react";
import { TypeAnimation } from "react-type-animation";
import Terminal from "../components/Terminal";

const HomePage = () => {
  return (
    <div className="p-8 w-full h-full">
      <div className="w-full h-full ml-8 mt-6 flex flex-col items-start">
        <div className="w-full flex flex-col items-start">
          <h1 className="font-semibold text-xl">Ruike Qiu</h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "A Full",
              100,
              "A Full Stack",
              1000,
              "A Full Stack Engineer",
              5000,
            ]}
            speed={50}
            style={{ fontSize: "1.2em" }}
            repeat={Infinity}
          />
        </div>
        <div className="w-full h-[85%] ">
          <Terminal />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
