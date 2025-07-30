import { motion } from "framer-motion";

const ImpactSection = () => {
  const impacts = [
    {
      title: "500+ Meals Served",
      description: "We’ve provided nutritious meals to over 500 homeless and hungry individuals across Bangladesh.",
    },
    {
      title: "120+ Children Educated",
      description: "Through our school sponsorship program, over 120 children are now attending school regularly.",
    },
    {
      title: "50 Women Empowered",
      description: "We’ve trained 50 underprivileged women with vocational skills and micro-funding opportunities.",
    },
    {
      title: "300 Medical Camps",
      description: "We’ve organized health checkups and free clinics benefiting rural and underserved communities.",
    },
  ];

  return (
    <section id="impact" className="lg:my-20 md:my-20 my-14 rounded-2xl bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Our Impact So Far
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Your support has helped us reach lives and bring light to many. Here's how Asha Foundation is making a real difference:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {impacts.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-[#1c1e3d] border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#FFD369]">{item.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;
