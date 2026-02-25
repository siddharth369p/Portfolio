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
    <section className="relative py-32 px-6 bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 blur-3xl opacity-20 rounded-full"></div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Founder’s Journey
          </h2>
          <p className="mt-6 text-gray-400">
            A timeline of strategic decisions, growth, and global impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-24">

          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-blue-500 h-full rounded-full"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-20 flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 6, rotateY: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-full md:w-5/12 p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Year Badge */}
                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-sm font-semibold mb-4">
                  {item.year}
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>

              {/* Center Dot */}
              <span className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black border-4 border-purple-500 rounded-full shadow-lg"></span>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}