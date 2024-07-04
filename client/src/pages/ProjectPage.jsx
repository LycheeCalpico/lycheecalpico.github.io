import React, { useState } from "react";
import Project from "../components/Project";
import { TypeAnimation } from "react-type-animation";
import ProjectDetail from "../components/ProjectDetail";
const ProjectPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  console.log(selectedProject);
  return (
    <div className="p-8 h-full">
      <div className="w-full h-full flex flex-col items-start  mt-8">
        <h1 className="font-semibold text-xl">My Projects</h1>
        <TypeAnimation
          sequence={["Please click for details...", 2000]}
          speed={50}
          style={{ fontSize: "1em" }}
          repeat={Infinity}
        />
        <div className="w-full h-[35%] flex gap-[30px] overflow-auto max-w-full pb-3 mt-4 p-2 mb-8">
          <Project
            image="employee.png"
            title="Employee-Management-System"
            setSelectedProject={setSelectedProject}
          />
          <Project
            image="chat.png"
            title="Chat-App"
            setSelectedProject={setSelectedProject}
          />
          <Project
            image="cart.png"
            title="Ecommerce-Website"
            setSelectedProject={setSelectedProject}
          />
          <Project
            image="event.png"
            title="Event-Booking-System"
            setSelectedProject={setSelectedProject}
          />
          <Project
            image="game.png"
            title="street-fighting-game"
            setSelectedProject={setSelectedProject}
          />
        </div>
        <div className="h-[40%] w-full">
          {selectedProject === "Employee-Management-System" && (
            <ProjectDetail
              title="Employee-Management-System"
              description="The Employee Management Project aims to create a web portal for managing the onboarding process of new employees, allowing employees to update personal information and upload documents while enabling HR to manage onboarding statuses and employee profiles.Key features include secure registration via token, a comprehensive onboarding application process, personal information management, and visa status tracking for employees, with corresponding management capabilities for HR."
              techStacks={[
                "javascript",
                "react",
                "expressjs",
                "mongodb",
                "tailwind",
                "antd",
                "nodejs",
              ]}
              isPublic={true}
              githubLink={
                "https://github.com/LycheeCalpico/Employee-Management-Project"
              }
            />
          )}
          {selectedProject === "Chat-App" && (
            <ProjectDetail
              title="Chat-App"
              description="Real time chatting app,  a user-friendly tool designed to enhance communication and collaboration among colleagues."
              techStacks={[
                "javascript",
                "socket.io",
                "daisy UI",
                "react",
                "expressjs",
                "mongodb",
                "tailwind",
                "nodejs",
              ]}
              isPublic={true}
              githubLink={" https://github.com/LycheeCalpico/ChatApp"}
            />
          )}
          {selectedProject === "Ecommerce-Website" && (
            <ProjectDetail
              title="Ecommerce-Website"
              description="
The Product Management System project entails developing a platform with regular and admin user roles, where regular users can browse and add products to their cart, and admin users can create, edit, and remove products. The project is split into three phases: Phase I involves creating sign-in, sign-up, and update password pages with proper validations and responsive design; Phase II focuses on building APIs and frontend flows for product management including listing, creating, editing, and detailing products; Phase III integrates APIs and frontend flows for cart management, ensuring functionalities like adding products to the cart, pagination, and maintaining cart info upon login with a responsive design. Error handling and additional features like search functionality and preserving user info on page refresh are also required."
              techStacks={[
                "javascript",
                "socket.io",
                "daisy UI",
                "react",
                "expressjs",
                "mongodb",
                "tailwind",
                "nodejs",
              ]}
              isPublic={true}
              githubLink={
                "https://github.com/LycheeCalpico/Product-Management-System"
              }
            />
          )}
          {selectedProject === "Event-Booking-System" && (
            <ProjectDetail
              title="Event-Booking-System"
              description="The event booking system provides a platform for users sharing their amazing events. Also, users can book events that are listed on events page."
              techStacks={[
                "javascript",
                "graphql",
                "react",
                "context",
                "expressjs",
                "mongodb",
                "tailwind",
                "nodejs",
              ]}
              isPublic={true}
              githubLink={
                "https://github.com/LycheeCalpico/graphql-eventbooking-system"
              }
            />
          )}
          {selectedProject === "street-fighting-game" && (
            <ProjectDetail
              title="street-fighting-game"
              description="Due Tonight is a one-on-one fighting game based on two teams of professor and student. 
Students from UC Davis are under high study pressure, so they want to fight with professors 
in order to get an extension for their homework. But professors should avoid that happens. 
Characters have different attack skills which may come from some personal characteristics 
in reality. This game is connected to our daily lives, especially those students and professors
from UCD Computer Science department."
              techStacks={["C#", "Unity"]}
              isPublic={true}
              githubLink={
                "https://github.com/LycheeCalpico/graphql-eventbooking-system"
              }
              demoLink={"https://m2neko.itch.io/duetonight"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
