import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Project" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 
        px-[7vw] md:px-[7vw] lg:px-[20vw] 
        ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow" : "bg-transparent"}`}
    >
      <div className="text-white py-3 flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer font-mono">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Saurav&nbsp;Kumar</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-colors hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social media icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/oiiamsaurav78"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform text-gray-300 hover:text-[#8245ec] hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/saurav-kumar-30b309233/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform text-gray-300 hover:text-[#8245ec] hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 w-4/5 bg-[#040414] bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg z-50">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white transition-colors ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            {/* Socials inside dropdown */}
            <li className="flex space-x-6 pt-4">
              <a
                href="https://github.com/oiiamsaurav78"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform text-gray-300 hover:text-[#8245ec] hover:scale-110"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/saurav-kumar-30b309233/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform text-gray-300 hover:text-[#8245ec] hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
