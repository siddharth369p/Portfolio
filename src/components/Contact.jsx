"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative py-28 px-6 bg-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-600 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600 blur-3xl opacity-20 rounded-full"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Connect with the Vision
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-400"
        >
          Let’s build global education pathways together.
        </motion.p>

        {/* Glass Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileHover={{ rotateX: 5, rotateY: -5 }}
          className="mt-12 p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          <p className="text-lg text-gray-300">
            📍 Gurugram, Sector 11 · India
          </p>

          <p className="mt-4 text-gray-400">
            📧 contact@countryedu.com
          </p>

          <p className="mt-4 text-gray-400">
            📞 +91 98765 43210
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-xl"
          >
            Schedule Consultation
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}