import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex w-[80%] h-[90%] border-[2px]">
          <SideBar />
          <div className="w-4/5">
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/projects" element={<ProjectPage />} />

              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
