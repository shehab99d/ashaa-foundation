import React, { useState } from "react";
import { motion } from "framer-motion";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.amount) {
      alert("Please fill all required fields.");
      return;
    }

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setFormData({
      name: "",
      email: "",
      amount: "",
      message: "",
    });
  };

  return (
    <div
      id="donate"
      className="lg:mt-20 md:mt-16 mt-10 min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-16 bg-[url('/bg-about.jpg')] bg-cover bg-center text-white"
    >
      <div className="w-full max-w-4xl bg-black/50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl backdrop-blur-lg">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold mb-6 text-center text-yellow-400"
        >
          Donate to Ashaa Foundation
        </motion.h2>

        {success && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-green-600 text-white text-center py-3 rounded mb-6 font-medium"
          >
            🎉 Thank you for your donation!
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm sm:text-base">Your Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm sm:text-base">Your Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm sm:text-base">Donation Amount (USD) *</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm sm:text-base">Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="p-3 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row gap-3 mt-4">
            <button
              type="submit"
              className="w-full sm:w-auto bg-yellow-400 text-black font-semibold py-3 px-6 rounded hover:bg-yellow-300 transition text-center"
            >
              Submit Donation
            </button>

            <a
              href="https://web.telegram.org/k/#@ashaaindustries"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 border border-white/30 text-white font-semibold py-3 px-6 rounded hover:bg-white/20 transition text-center"
            >
              Donate Manually (Telegram)
            </a>

            <a
              href="https://www.instagram.com/worldbrkr/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 border border-white/30 text-white font-semibold py-3 px-6 rounded hover:bg-white/20 transition text-center"
            >
              Donate Manually (Instagram)
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
