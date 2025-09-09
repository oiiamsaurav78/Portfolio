import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[12vw] lg:px-[20vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Contact Me
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full" />
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto leading-relaxed">
          I'd love to hear from you! Fill out the form below or connect with me
          directly.
        </p>
      </div>

      {/* Contact Form */}
      <form
        action="mailto:oiiamsaurav@gmail.com"
        method="POST"
        encType="text/plain"
        className="w-full max-w-xl bg-gray-900 border border-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[#8245ec] focus:ring focus:ring-[#8245ec]/40 outline-none transition-all duration-300 ease-in-out hover:border-[#8245ec]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[#8245ec] focus:ring focus:ring-[#8245ec]/40 outline-none transition-all duration-300 ease-in-out hover:border-[#8245ec]"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[#8245ec] focus:ring focus:ring-[#8245ec]/40 outline-none resize-none transition-all duration-300 ease-in-out hover:border-[#8245ec]"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-[#8245ec] text-white font-semibold rounded-lg hover:bg-[#6c32d1] transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-white mb-4">Connect with me</h3>
        <div className="flex gap-6 justify-center">
          <a
            href="https://www.linkedin.com/in/saurav-kumar-30b309233/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#0077b5] text-white font-medium hover:bg-[#005582] transition duration-300 ease-in-out"
          >
            <FaLinkedin className="text-xl" /> LinkedIn
          </a>
          <a
            href="https://github.com/oiiamsaurav78"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gray-800 text-white font-medium border border-gray-600 hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <FaGithub className="text-xl" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
