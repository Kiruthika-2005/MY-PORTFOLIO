import React from "react";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaBrain,
  FaComments,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import { SiCplusplus, SiMysql } from "react-icons/si";

const About: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center py-10">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-6xl w-full">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          About Me
        </h1>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-lg text-gray-700">
          {/* Education */}
          <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              🎓 Education
            </h2>
            <p>
              <b>B.Tech – AI & DS</b>
            </p>
            <p className="text-blue-600 font-medium">CGPA: 8.23 / 10</p>
            <p className="mt-2">Higher Secondary – 90.4%</p>
            <p>Senior Secondary – 99.5%</p>
          </div>

          {/* Experience */}
          <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              💼 Experience
            </h2>
            <p>
              <b>AICTE Virtual Internship</b>
            </p>
            <p className="mt-2">
              Worked on <b>Energy Consumption Analysis</b> using interactive
              dashboards, focusing on real-world insights.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              💻 Technical Skills
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaPython /> Python
              </li>
              <li className="flex items-center gap-2">
                <SiMysql /> SQL
              </li>
              <li className="flex items-center gap-2">
                <FaJava /> Java
              </li>
              <li className="flex items-center gap-2">
                <SiCplusplus /> C++
              </li>
              <li className="flex items-center gap-2">
                <FaHtml5 /> HTML
              </li>
              <li className="flex items-center gap-2">
                <FaCss3Alt /> CSS
              </li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              🤝 Soft Skills
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaComments /> Communication
              </li>
              <li className="flex items-center gap-2">
                <FaBrain /> Problem Solving
              </li>
              <li className="flex items-center gap-2">
                <FaUsers /> Teamwork
              </li>
              <li className="flex items-center gap-2">
                <FaLightbulb /> Decision Making
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
