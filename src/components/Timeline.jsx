


"use client";
import { motion } from "framer-motion";


const timelineData = [
  {
    year: "2019",
    title: "The Foundation",
    desc: "The idea of CountryEdu was born with a mission to simplify global education access.",
  },
  {
    year: "2020",
    title: "First International Operations",
    desc: "Expanded consulting services beyond India with early global partnerships.",
  },
  {
    year: "2021",
    title: "Scaling Trust",
    desc: "Built a reputation for transparency, student success, and ethical guidance.",
  },
  {
    year: "2023",
    title: "Multi-Country Presence",
    desc: "Successfully established operations across multiple international markets.",
  },
  {
    year: "2025",
    title: "Eight-Country Ecosystem",
    desc: "CountryEdu operates as a global education ecosystem across eight countries.",
  },
];

export default function Timeline() {
  return (
    <section className="py-32 px-10 bg-gradient-to-b from-black to-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-semibold">Founder’s Journey</h2>
        <p className="mt-4 text-gray-400 max-w-2xl">
          A timeline of strategic decisions, growth, and global impact.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="mt-20 relative max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gray-700" />

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-16 mb-16"
          >
            <span className="absolute left-0 top-1 w-8 h-8 rounded-full bg-black border-2 border-gray-500" />

            <h3 className="text-xl font-semibold">
              {item.year} — {item.title}
            </h3>
            <p className="mt-3 text-gray-400 max-w-xl">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
