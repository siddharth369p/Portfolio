"use client";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="relative py-36 px-6 bg-black text-white overflow-hidden">

      {/* Soft Spotlight Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_60%)]"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-40"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm tracking-wide text-gray-300"
        >
          Our Long-Term Vision
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Redefining Global Education Access
        </motion.h2>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-16 mt-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              Education should never be limited by geography. CountryEdu
              envisions a world where ambition surpasses borders —
              empowering students with clarity, opportunity, and confidence.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              We are building a multi-country ecosystem that connects
              institutions, mentors, and students through trust-driven
              partnerships and ethical guidance.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Our commitment goes beyond admissions — we aim to cultivate
              global leaders equipped with cultural intelligence,
              global exposure, and long-term success.
            </p>
          </motion.div>

          {/* Right 3D Glass Highlight Card */}
          <motion.div
            initial={{ rotateY: 15, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            whileHover={{ rotateY: -8, rotateX: 5 }}
            className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3 className="text-2xl font-bold text-purple-400">
              The Future We See
            </h3>

            <ul className="mt-6 space-y-4 text-gray-300">
              <li>🌍 Seamless cross-border education pathways</li>
              <li>🤝 Ethical & transparent student guidance</li>
              <li>🎓 Strategic global university partnerships</li>
              <li>🚀 Long-term student career impact</li>
            </ul>
          </motion.div>
        </div>

        {/* Elevated Stats */}
        <div className="grid md:grid-cols-3 gap-10 mt-24">
          {[
            { number: "8+", label: "Countries Active" },
            { number: "5000+", label: "Students Guided" },
            { number: "120+", label: "Global Partnerships" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              className="p-10 rounded-3xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 text-center shadow-xl"
            >
              <h3 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {item.number}
              </h3>
              <p className="mt-4 text-gray-400 tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}