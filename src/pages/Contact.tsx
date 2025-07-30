import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section className="h-screen bg-gradient-to-br from-purple-200 via-blue-100 to-pink-100 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-3xl p-12 max-w-3xl w-full text-center border border-gray-200">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-10 tracking-wide">
          Let’s Connect
        </h1>

        <div className="space-y-8 text-xl text-gray-800 font-medium">
          <div className="flex items-center justify-center space-x-5">
            <FaEnvelope className="text-purple-700 text-3xl" />
            <span>kiruthikathangavel99@gmail.com</span>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <FaPhoneAlt className="text-purple-700 text-3xl" />
            <span>+91 93606 37485</span>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <FaMapMarkerAlt className="text-purple-700 text-3xl" />
            <span>Karur, Tamil Nadu, India</span>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <FaLinkedin className="text-purple-700 text-3xl" />
            <a
              href="https://linkedin.com/in/kiruthika"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-900 font-semibold"
            >
              linkedin.com/in/kiruthika
            </a>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <FaGithub className="text-purple-700 text-3xl" />
            <a
              href="https://github.com/kiruthika"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-900 font-semibold"
            >
              github.com/kiruthika
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
