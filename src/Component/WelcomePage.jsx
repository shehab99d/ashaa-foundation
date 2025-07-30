import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Welcome = () => {
  return (
    <section
     id="home" className="min-h-screen w-full bg-gradient-to-br from-[#1f1b2e] via-[#2b1d34] to-[#2c1e1e] 
      text-white flex items-center justify-center flex-col px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center"
      >
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-6 leading-tight">
          <Typewriter
            words={["Welcome to", "Ashaa Foundation"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </h1>

        {/* Sub Text */}
        <p className="text-sm sm:text-base md:text-lg max-w-md md:max-w-xl mx-auto text-gray-300 leading-relaxed">
          Empowering communities through compassion, unity, and real impact.
        </p>
      </motion.div>

      {/* Scroll Down Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-16 animate-bounce"
      >
        <a href="#about">
          <svg
            className="w-6 h-6 text-yellow-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Welcome;
