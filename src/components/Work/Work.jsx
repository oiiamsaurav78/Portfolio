import React, { useState } from "react";
import { projects } from "../../constants";

export const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full" />
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto leading-relaxed">
          A glimpse into my journey of building, experimenting, and solving
          problems — projects that reflect my technical skills, creativity, and
          growth.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-2xl"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                {project.description}
              </p>

              {/* Tags always visible on card */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#8245ec]/20 text-[#8245ec] text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-2xl p-6 w-[90%] max-w-3xl relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />

            {/* Title + Description */}
            <h2 className="text-2xl font-bold text-white mb-2">
              {selectedProject.title}
            </h2>
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>

            {/* Tags inside modal too */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#8245ec]/20 text-[#8245ec] text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm px-5 py-2 rounded-lg border border-[#8245ec] text-[#8245ec] hover:bg-[#8245ec] hover:text-white transition"
              >
                GitHub
              </a>
              <a
                href={selectedProject.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm px-5 py-2 rounded-lg bg-[#8245ec] text-white hover:bg-[#6c32d1] transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
