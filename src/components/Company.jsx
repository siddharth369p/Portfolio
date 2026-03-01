"use client";
import { motion } from "framer-motion";

const values = [
  {
    title: "Global Access",
    desc: "Creating seamless international education pathways across multiple countries.",
  },
  {
    title: "Student-First Approach",
    desc: "Every decision is made to maximize student success and long-term outcomes.",
  },
  {
    title: "Trusted Partnerships",
    desc: "Strong collaborations with universities, institutions, and global stakeholders.",
  },
];

export default function Company() {
  return (
    <section className="relative py-32 px-6 bg-black text-white overflow-hidden">
      
      {/* Background Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Company Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            CountryEdu Pvt Ltd
          </h2>
          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            CountryEdu is a global education consultancy designed to remove
            geographical barriers and enable students to access world-class
            opportunities across borders.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mt-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-purple-500/40 transition duration-300"
          >
            <h3 className="text-2xl font-semibold">Mission</h3>
            <p className="mt-4 text-gray-400 leading-relaxed">
              To guide students with transparency, integrity, and expertise,
              helping them make confident global education decisions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:border-purple-500/40 transition duration-300"
          >
            <h3 className="text-2xl font-semibold">Vision</h3>
            <p className="mt-4 text-gray-400 leading-relaxed">
              To become the most trusted global education ecosystem operating
              across continents and cultures.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mt-28">
          <h3 className="text-3xl md:text-4xl font-semibold text-center">
            Core Values
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 transition duration-300"
              >
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}