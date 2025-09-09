import React from "react";
import { SkillsInfo } from "../../constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 lg:px-20 font-sans bg-skills-gradient"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2" />
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          A collection of my technical skills and expertise honed through various
          projects, experience, and coursework.
        </p>
      </div>

      {/* Categories in rows of 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 py-8 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.25)]"
          >
            {/* Category Title */}
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6 text-center">
              {category.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 bg-transparent border-2 border-gray-700 rounded-xl py-2 px-3 hover:scale-105 transition-transform duration-200"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 object-contain"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 font-medium truncate">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
