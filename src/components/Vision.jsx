"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Vision() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const centerX = width / 2;
    const centerY = height / 2;

    setRotateY((x - centerX) / 25);
    setRotateX(-(y - centerY) / 25);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="relative py-40 px-6 bg-black text-white overflow-hidden">

      {/* Deep Animated Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_50%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="inline-block px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-sm tracking-widest text-gray-300 shadow-lg"
        >
          OUR LONG-TERM VISION
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_20px_40px_rgba(139,92,246,0.4)]"
        >
          Redefining Global Education Access
        </motion.h2>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-20 mt-20 items-center">

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              Education should never be limited by geography. CountryEdu
              envisions a world where ambition surpasses borders —
              empowering students with clarity, opportunity, and confidence.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We are building a multi-country ecosystem that connects
              institutions, mentors, and students through trust-driven
              partnerships and ethical guidance.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Beyond admissions — we cultivate global leaders equipped
              with cultural intelligence, exposure, and long-term success.
            </p>
          </motion.div>

          {/* 3D Interactive Glass Card */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ rotateX, rotateY }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="relative p-12 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.7)]"
            style={{ transformStyle: "preserve-3d", perspective: 2000 }}
          >
           
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-20 blur-xl -z-10"></div>

            <h3 className="text-2xl font-bold text-purple-400">
              The Future We See
            </h3>

            <ul className="mt-8 space-y-5 text-gray-300">
              <li className="hover:translate-x-2 transition">🌍 Seamless cross-border pathways</li>
              <li className="hover:translate-x-2 transition">🤝 Ethical & transparent guidance</li>
              <li className="hover:translate-x-2 transition">🎓 Global university alliances</li>
              <li className="hover:translate-x-2 transition">🚀 Long-term career impact</li>
            </ul>
          </motion.div>
        </div>

        {/* 3D Stats Section */}
        <div className="grid md:grid-cols-3 gap-12 mt-28 perspective-1000">
          {[
            { number: "8+", label: "Countries Active" },
            { number: "5000+", label: "Students Guided" },
            { number: "120+", label: "Global Partnerships" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                rotateX: -10, 
                rotateY: 10, 
                scale: 1.1 
              }}
              className="relative p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 text-center shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition-all duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-2xl -z-10"></div>

              <h3 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {item.number}
              </h3>
              <p className="mt-5 text-gray-400 tracking-wider">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}