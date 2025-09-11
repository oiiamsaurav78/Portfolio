import React from "react";

export const Achievements = () => {
  const achievements = [
    {
      id: 0,
      title: "JEE Mains",
      desc: "Secured 95 percentile among 1M+ candidates in the Joint Entrance Examination (Mains).",
    },
    {
      id: 1,
      title: "JEE Advanced",
      desc: "Qualified the prestigious JEE Advanced exam, one of India’s toughest engineering entrance tests.",
    },
    {
      id: 2,
      title: "PRMO",
      desc: "Qualified the Pre-Regional Mathematical Olympiad, showcasing strong problem-solving skills.",
    },
    {
      id: 3,
      title: "WBJEE",
      desc: "Achieved an impressive All India Rank of 1024 in the West Bengal Joint Entrance Examination.",
    },
    {
      id: 4,
      title: "NPTEL – DBMS",
      desc: "Ranked in the Top 1 percentile nationwide in the NPTEL Database Management Systems course.",
    },
    {
      id: 5,
      title: "DSA Practice",
      desc: "Solved 700+ Data Structures and Algorithms problems across multiple platforms, strengthening problem-solving skills.",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-24 px-6 md:px-12 lg:px-20 font-sans bg-skills-gradient"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">ACHIEVEMENTS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2" />
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          Academic and competitive achievements that highlight my consistency,
          problem-solving, and dedication.
        </p>
      </div>

      {/* Achievements Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            className="bg-gray-900 backdrop-blur-md px-6 py-8 rounded-2xl border border-white
                       shadow-[0_0_20px_1px_rgba(130,69,236,0.25)]
                       transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_3px_rgba(130,69,236,0.45)]"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-3 text-center">
              {ach.title}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base text-center leading-relaxed">
              {ach.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
