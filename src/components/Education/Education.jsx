import React from "react";
import { education } from "../../constants";

export const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Education</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full" />
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto leading-relaxed">
          My academic journey has shaped my technical foundation and fueled my
          curiosity for problem-solving and innovation.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-[#8245ec]/40 ml-4">
        {education.map((edu) => (
          <div key={edu.id} className="mb-12 ml-6 relative">
            {/* Timeline Dot */}
            <span className="absolute -left-3 top-2 w-6 h-6 bg-[#8245ec] rounded-full border-4 border-gray-900"></span>

            {/* Card */}
            <div className="bg-gray-900 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg 
                            transition-all duration-300 ease-in-out 
                            hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(130,69,236,0.6)] hover:bg-gray-800/90">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-12 h-12 object-contain rounded-full bg-white p-1"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {edu.school}
                  </h3>
                  <p className="text-sm text-gray-400">{edu.date}</p>
                </div>
              </div>

              <h4 className="text-[#8245ec] font-medium mb-2">{edu.degree}</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-2">
                {edu.desc}
              </p>
              <p className="text-gray-400 text-sm font-semibold">
                Grade: {edu.grade}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
