import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Maintenance Master",
      description:
        "A responsive web application offering a wide range of home services including plumbing, electrical, and cleaning. Designed for easy booking and reliable service management.",
      img: "/assets/maintenance.png",
      skills: "React, Node.js, MongoDB",
    },
    {
      title: "SkillForge",
      description:
        "An interactive e-learning platform built for students and professionals to upskill in technical and non-technical domains through structured online courses.",
      img: "/assets/skillforge.png",
      skills: "React, Express.js, MySQL",
    },
    {
      title: "YieldWise",
      description:
        "An AI-driven analytics tool that predicts vegetable prices and sales trends using historical datasets, helping farmers and vendors make data-backed decisions.",
      img: "/assets/yieldwise.png",
      skills: "Python, LSTM, Data Visualization",
    },
  ];

  return (
    <section className="h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex flex-col justify-center px-10">
      <div className="grid grid-rows-3 gap-4 w-full h-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex items-center justify-between bg-white rounded-xl shadow-lg p-8 ${
              index % 2 === 1 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-60 h-44 object-cover rounded-lg shadow-md"
            />
            <div className="flex-1 px-8">
              <h2 className="text-2xl font-bold text-black mb-4">
                {project.title}
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                {project.description}
              </p>
              <p className="text-lg font-medium text-gray-900">
                <b>Skills:</b> {project.skills}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
