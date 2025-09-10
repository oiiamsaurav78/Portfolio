import React from "react";
import { LeadershipInfo } from "../../constants";

export const Leadership = () => {
  return (
    <section
      id="leadership"
      className="py-24 px-6 md:px-12 lg:px-20 font-sans bg-skills-gradient"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">LEADERSHIP</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2" />
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          Roles where I demonstrated leadership, teamwork, and organizational
          skills through college activities and projects.
        </p>
      </div>

      {/* Cards in rows of 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {LeadershipInfo.map((role) => (
          <div
            key={role.id}
            className="bg-gray-900 backdrop-blur-md px-6 py-8 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.25)]
                       transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_3px_rgba(130,69,236,0.45)]"
          >
            {/* Role Title */}
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-4 text-center">
              {role.title}
            </h3>

            {/* Organization */}
            <p className="text-center text-sm text-gray-400 mb-6">
              {role.org}
            </p>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base text-center leading-relaxed">
              {role.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
