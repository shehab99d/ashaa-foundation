import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaHeart, FaUsers, FaEye } from "react-icons/fa";

const values = [
  {
    icon: <FaHandsHelping size={30} />,
    title: "Trust",
    desc: "We build trust through transparency and accountability.",
  },
  {
    icon: <FaHeart size={30} />,
    title: "Hope",
    desc: "Spreading hope to those who need it the most.",
  },
  {
    icon: <FaUsers size={30} />,
    title: "Unity",
    desc: "Together, we bring change for a better tomorrow.",
  },
  {
    icon: <FaEye size={30} />,
    title: "Transparency",
    desc: "Every donation is tracked and clearly reported.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative text-white py-20 px-4 md:px-10 bg-white/5 rounded-2xl lg:mt-20 md:mt-10 mt-6"
    >
      {/* Background Image Layer */}
      <div
        className="absolute rounded-2xl inset-0 bg-[url('/bg-about.jpg')] bg-cover bg-center opacity-10"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Title & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Who We Are</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            We are a nonprofit organization working to uplift communities and
            support lives through meaningful actions and transparency.
          </p>
        </motion.div>

        {/* Icon Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {values.map((value, idx) => (
            <div
              key={idx}
              className="bg-[#2D2D3A] hover:bg-[#3c3c4f] transition rounded-2xl p-6 text-center shadow-md"
            >
              <div className="mb-4 text-gold-400 flex justify-center text-yellow-400">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-300 text-sm">{value.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Optional Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
          <p className="text-gray-400">
            {/* Placeholder for timeline component or simple steps */}
            [ Add your timeline or history here if needed... ]
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
