

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
    <section className="py-32 px-10 bg-black text-white">
      {}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl"
      >
        <h2 className="text-4xl font-semibold">
          CountryEdu Pvt Ltd
        </h2>
        <p className="mt-6 text-gray-400 max-w-3xl">
          CountryEdu is a global education consultancy designed to remove
          geographical barriers and enable students to access world-class
          opportunities across borders.
        </p>
      </motion.div>

      {}
      <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="border border-gray-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold">Mission</h3>
          <p className="mt-4 text-gray-400">
            To guide students with transparency, integrity, and expertise,
            helping them make confident global education decisions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="border border-gray-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold">Vision</h3>
          <p className="mt-4 text-gray-400">
            To become the most trusted global education ecosystem operating
            across continents and cultures.
          </p>
        </motion.div>
      </div>

      {}
      <div className="mt-20 max-w-6xl">
        <h3 className="text-3xl font-semibold">Core Values</h3>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition"
            >
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="mt-4 text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
