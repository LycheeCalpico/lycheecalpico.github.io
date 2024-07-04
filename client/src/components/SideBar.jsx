import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import LeetCodeIcon from "../assets/Leetcode";

const SideBar = () => {
  let location = useLocation();
  return (
    <div className="w-1/5 h-full bg-gray-50 p-4 border-r flex flex-col">
      <nav className="flex flex-col items-start">
        <div className="mb-6 mt-6 flex items-center gap-[10px]">
          <img src="photo.jpg" alt="" className="h-[50px] rounded-md" />
          <h1 className="text-lg font-bold">Ruike Qiu</h1>
        </div>
        <label htmlFor="" className="font-bold">
          Discover
        </label>
        <ul className="w-full flex flex-col items-start">
          <li
            className={`w-full flex items-start ${
              location.pathname === "/" ? "bg-blue-100" : ""
            } `}
          >
            <Link
              to=""
              className="text-lg font-medium flex justify-center items-center gap-[5px]"
            >
              <IoMdHome /> Home
            </Link>
          </li>
          <li
            className={`w-full flex items-start ${
              location.pathname === "/projects" ? "bg-blue-100" : ""
            }`}
          >
            <Link
              to="projects"
              className="text-lg font-medium flex justify-center items-center gap-[5px]"
            >
              <FaBookOpen />
              Projects
            </Link>
          </li>
          {/* <li
            className={`w-full flex items-start ${
              location.pathname === "/contact" ? "bg-blue-100" : ""
            }`}
          >
            <Link
              to="contact"
              className="text-lg font-medium flex justify-center items-center gap-[5px]"
            >
              <IoMdContact />
              Contact
            </Link>
          </li> */}
        </ul>
      </nav>
      <div className="flex items-center space-x-2 mt-auto justify-start">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/LycheeCalpico"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="mailto:rq2046@nyu.edu"
          className="text-red-600 hover:text-red-800"
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://leetcode.com/u/PauPauna/"
          className="text-red-600 hover:text-red-800 w-6 h-6 "
        >
          <LeetCodeIcon />
        </a>
      </div>
    </div>
  );
};

export default SideBar;
