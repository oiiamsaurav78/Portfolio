import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-[8vw] mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side - Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-xl font-semibold">Saurav Kumar</h3>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="flex gap-6 text-sm">
          <a
            href="#about"
            className="hover:text-[#8245ec] transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-[#8245ec] transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#work"
            className="hover:text-[#8245ec] transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-[#8245ec] transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Right Side - Socials */}
        <div className="flex gap-5">
          <a
            href="mailto:oiiamsaurav@gmail.com"
            className="p-2 rounded-full bg-gray-800 hover:bg-[#8245ec] hover:text-white transition duration-300"
          >
            <FaEnvelope className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-id"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-[#8245ec] hover:text-white transition duration-300"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href="https://github.com/your-github-id"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-[#8245ec] hover:text-white transition duration-300"
          >
            <FaGithub className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};
