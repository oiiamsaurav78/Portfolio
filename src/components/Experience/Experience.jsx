import React from "react";

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer (Part-Time)",
    company: "Iconic Design",
    period: "Aug 2023 – Nov 2023",
    description:
      "Developed the company website’s front-end using TailwindCSS, Three.js, and React.js. Achieved an 80% increase in client acquisition through the redesigned website. Led backend development for Rayan Decor at Iconic using Node.js.",
  },
  {
    id: 2,
    title: "Associate Developer Intern",
    company: "Qurinom Solutions (Remote)",
    period: "Jun 2023 – Aug 2023",
    description:
      "Built parts of the company’s website as a front-end team member using TailwindCSS and React.js. Contributed to the development of the Store Flaunt front-end and crafted responsive web solutions for diverse clients, ensuring optimal user experience.",
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[8vw] md:px-[6vw] lg:px-[12vw] font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Experience</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
          A showcase of my technical expertise and professional skills, refined
          through hands-on experiences, organizational roles, and internships.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical Line (only on larger screens) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-400 h-full hidden sm:block"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Experience Card */}
            <div
              className={`w-full sm:max-w-md p-6 rounded-2xl shadow-lg border border-white/20 bg-gray-900 text-white backdrop-blur-md mt-8 sm:mt-0 transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
              }`}
            >
              <h3 className="text-xl font-bold text-white">
                {experience.title}
              </h3>
              <p className="text-sm font-semibold text-purple-400 mt-1">
                {experience.company} • {experience.period}
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
