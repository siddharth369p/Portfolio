"use client";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="relative py-32 px-6 bg-black text-white overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-10 left-20 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          The Vision
        </motion.h2>

        {/* 3D Glass Card */}
        <motion.div
          initial={{ rotateX: 15, opacity: 0, y: 80 }}
          whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          whileHover={{ rotateX: 5, rotateY: -5 }}
          className="mt-12 p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            Education should never be limited by borders. CountryEdu envisions
            a world where ambition is stronger than geography — where students
            from every background gain access to world-class institutions,
            global exposure, and life-changing opportunities.
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed">
            We are building a connected global education ecosystem operating
            across multiple countries, empowering students with transparency,
            mentorship, and strategic guidance throughout their international
            journey.
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Our mission extends beyond admissions — we aim to create
            long-term global success stories by bridging cultures,
            institutions, and opportunities.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { number: "8+", label: "Countries Active" },
            { number: "5000+", label: "Students Guided" },
            { number: "120+", label: "Global Partnerships" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 text-center hover:scale-105 transition duration-300"
            >
              <h3 className="text-4xl font-bold text-purple-400">
                {item.number}
              </h3>
              <p className="mt-3 text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}