import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/SauravKumar.jpeg";

export const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-2xl sm:text-5xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight whitespace-nowrap">
            Saurav Kumar
          </h1>

          {/* Skills Heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={["Full Stack Developer", "Java Developer", "Coder"]}
                loop={0} // infinite
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          {/* About paragraph */}
          <div className="max-w-3xl">
            <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed">
              I am a passionate developer with a strong foundation in Java,
              Python, SQL, and web technologies like HTML, CSS, and JavaScript.
              I enjoy solving problems, building scalable applications, and
              continuously improving my skills in full stack development. Beyond
              coding, I love exploring new technologies and working on impactful
              projects that make a difference.
            </p>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1AKhBReHz3---CqJlvlIcmy4Z_MiWH3Oc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-8 py-3 text-lg font-bold text-white rounded-full 
                         bg-gradient-to-r from-[#8245ec] to-[#5a2bbf] shadow-lg shadow-purple-900/50
                         transition duration-300 transform hover:scale-105 hover:shadow-purple-700/70"
            >
              See Resume
            </a>
          </div>
        </div>

        {/* Right Side (Profile Image with Tilt Effect) */}
        <div className="md:w-1/2 flex justify-center">
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} scale={1.05} transitionSpeed={1000}>
            <img
              src={profileImage}
              alt="Saurav Kumar"
              className="w-64 sm:w-72 md:w-80 lg:w-96 rounded-2xl shadow-lg shadow-purple-900/50 transition-transform duration-500 hover:scale-105"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};
